package mx.com.santander.splitter.ml.recomendations.demo.model;

import lombok.Data;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.List;

@Data
@Document(collection = "transactions")
public class Transaction {

    @Id
    private ObjectId _id;   // ObjectId real de Mongo

    private String id;              // "txn_001"
    private String customerId;      // "customer_67890"

    private Instant date;           // "2026-04-12T00:00:00Z"
    private Double amoutn;          // OJO: typo igual que en tu JSON
    private String currency;

    private String description;
    private String category;
    private String status;

    private String paymentMethod;
    private String merchant;
    private String merchantname;

    private Location location;      // objeto embebido

    private List<String> tags;

    private Metadata metadata;      // objeto embebido

    private String mcc;
    private Boolean isFraudulent;

    private Integer exchangeRate;
    private Instant settlementDate;

    private Boolean recurring;
    private Integer installmentCount;

    private String originalTransactionId;

    private Integer cashbackAmount;
    private Integer rewardsPoints;

    private List<String> categoryHierarchy;

    // Subdocumentos
    @Data
    public static class Location {
        private String city;
        private String state;
        private String country;
    }

    @Data
    public static class Metadata {
        private String orderId;
        private String customerId;
    }
}