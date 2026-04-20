package mx.com.santander.splitter.ml.recomendations.demo.extractor;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import mx.com.santander.splitter.ml.recomendations.demo.dto.Features;
import mx.com.santander.splitter.ml.recomendations.demo.dto.Transaction;
import mx.com.santander.splitter.ml.recomendations.demo.mapper.MccCategoryMapper;

public class FeatureExtractor {

    public Features extract(List<Transaction> transactions) {

        Features f = new Features();

        double gastoPets = 0;
        double gastoVet = 0;
        double gastoGas = 0;
        double gastoRestaurants = 0;
        double gastoGroceries = 0;
        int recurrenciasVet = 0;

        double sumaMontosAbs = 0;
        double sumaMontosAbsCuadrado = 0;
        int n = 0;

        LocalDate hoy = LocalDate.now();
        double gastoPetsUlt3Meses = 0;
        double gastoPetsPrevios = 0;

        for (Transaction t : transactions) {

            double monto = Math.abs(t.getAmount()); // usamos valor absoluto del cargo
            MccCategoryMapper.Category cat = MccCategoryMapper.fromMcc(t.getMcc());

            // gasto por categoría
            switch (cat) {
                case PETS -> gastoPets += monto;
                case VETERINARY -> gastoVet += monto;
                case GAS -> gastoGas += monto;
                case RESTAURANTS -> gastoRestaurants += monto;
                case GROCERIES -> gastoGroceries += monto;
                default -> {}
            }

            // recurrencias veterinarias (simplificado: contar transacciones vet)
            if (cat == MccCategoryMapper.Category.VETERINARY) {
                recurrenciasVet++;
            }

            // variabilidad: usamos montos absolutos
            sumaMontosAbs += monto;
            sumaMontosAbsCuadrado += monto * monto;
            n++;

            // tendencia en pets: comparamos últimos 3 meses vs anteriores
            if (cat == MccCategoryMapper.Category.PETS && t.getDate() != null) {
                long meses = ChronoUnit.MONTHS.between(t.getDate(), hoy);
                if (meses <= 3) {
                    gastoPetsUlt3Meses += monto;
                } else if (meses <= 6) {
                    gastoPetsPrevios += monto;
                }
            }
        }

        // tendencia_pets: (últimos 3m - previos 3m) / max(previos, 1)
        double tendenciaPets = 0;
        if (gastoPetsPrevios > 0) {
            tendenciaPets = (gastoPetsUlt3Meses - gastoPetsPrevios) / gastoPetsPrevios;
        } else if (gastoPetsUlt3Meses > 0) {
            tendenciaPets = 1.0; // empezó a gastar donde antes no gastaba
        }

        // variabilidad: coeficiente de variación simple
        double variabilidad = 0;
        if (n > 1) {
            double media = sumaMontosAbs / n;
            double var = (sumaMontosAbsCuadrado / n) - (media * media);
            double std = var > 0 ? Math.sqrt(var) : 0;
            variabilidad = media > 0 ? std / media : 0;
        }

        f.setGastoPets(gastoPets);
        f.setGastoVet(gastoVet);
        f.setGastoGas(gastoGas);
        f.setGastoRestaurants(gastoRestaurants);
        f.setGastoGroceries(gastoGroceries);
        f.setRecurrenciasVet(recurrenciasVet);
        f.setTendenciaPets(tendenciaPets);
        f.setVariabilidad(variabilidad);

        return f;
    }
}

