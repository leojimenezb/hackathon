package mx.com.santander.splitter.ml.recomendations.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "transactions")
public class Transaction {

    @Id
    private String id;

    private String customerId;
    private String mcc;
    private double amount;
    private LocalDate date;
    private String merchantName;
    private String transactionType; // debit / credit
    private String channel;         // POS, ATM, SPEI, etc.
}