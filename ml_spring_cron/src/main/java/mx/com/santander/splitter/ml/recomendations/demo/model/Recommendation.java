package mx.com.santander.splitter.ml.recomendations.demo.model;

import lombok.Data;
import mx.com.santander.splitter.ml.recomendations.demo.dto.Features;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "recommendations")
public class Recommendation {

    @Id
    private String id; // puedes usar customerId como id

    private String customerId;
    private String productId;
    private double score;
    private String reason;

    private LocalDateTime generatedAt;

    // Opcional: guardar features usados (útil para debugging)
    private Features features;

    public Recommendation(String customerId, String productId, Features features, LocalDateTime generatedAt) {
        this.id = customerId; // 1 recomendación vigente por usuario
        this.customerId = customerId;
        this.productId = productId;
        this.features = features;
        this.generatedAt = generatedAt;
    }
}
