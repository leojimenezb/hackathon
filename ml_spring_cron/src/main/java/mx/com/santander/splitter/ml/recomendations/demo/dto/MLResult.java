package mx.com.santander.splitter.ml.recomendations.demo.dto;

import lombok.Data;

@Data
public class MLResult {
    private String productId;
    private double score;
    private String reason;

    public MLResult(String productId, double score, String reason) {
        this.productId = productId;
        this.score = score;
        this.reason = reason;
    }
}