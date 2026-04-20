package mx.com.santander.splitter.ml.recomendations.demo.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
@Builder
public class Transaction {

    private String customerId;
    private String mcc;
    private double amount;      // cargos negativos, abonos positivos
    private java.time.LocalDate date;
    private String merchantName;

    // getters/setters
}
