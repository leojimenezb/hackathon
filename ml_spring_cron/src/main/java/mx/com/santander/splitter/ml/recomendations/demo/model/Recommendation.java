package mx.com.santander.splitter.ml.recomendations.demo.model;

import lombok.Data;
import mx.com.santander.splitter.ml.recomendations.demo.dto.Features;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Map;

@Data
@Document(collection = "recommendations")
public class Recommendation {

    @Id
    private ObjectId _id;  // _id: "rec_001"
    private String id;  // _id: "rec_001"

    private String customerId;
    private String productId;
    private String productName;

    private Double score;
    private String reason;

    private Map<String, Object> featuresUsed; // objeto dinámico

    private Instant createdAt;
}
