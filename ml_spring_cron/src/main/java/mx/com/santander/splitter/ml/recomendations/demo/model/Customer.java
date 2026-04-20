package mx.com.santander.splitter.ml.recomendations.demo.model;

import lombok.Data;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "customers")
public class Customer {

    @Id
    private String id;  // _id: "customer_67890"

    private String name;
    private Integer age;
    private Integer incomeEstimated;

    private List<String> lifeEvents;       // ["pet_owner", "new_job"]
    private List<String> currentProducts;  // ["cuenta_debito", "tarjeta_credito"]

    private String createdAt;             // 2024-02-10T14:23:00Z
}