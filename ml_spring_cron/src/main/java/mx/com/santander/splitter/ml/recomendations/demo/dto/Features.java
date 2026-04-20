package mx.com.santander.splitter.ml.recomendations.demo.dto;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Features {

    private double gastoPets;
    private double gastoVet;
    private double gastoGas;
    private double gastoRestaurants;
    private double gastoGroceries;
    private int recurrenciasVet;
    private double tendenciaPets;
    private double variabilidad;

    // getters/setters omitidos por brevedad

    public float[] toArray() {
        return new float[] {
            (float) gastoPets,
            (float) gastoVet,
            (float) gastoGas,
            (float) gastoRestaurants,
            (float) gastoGroceries,
            (float) recurrenciasVet,
            (float) tendenciaPets,
            (float) variabilidad
        };
    }

    public Map<String, Object> toMap() {
    return Map.of(
        "gasto_mascotas_mensual", this.getGastoPets(),
        "veterinario_recurrente", this.getRecurrenciasVet() > 0,
        "tendencia_3m", this.getTendenciaPets()
    );
}
}
