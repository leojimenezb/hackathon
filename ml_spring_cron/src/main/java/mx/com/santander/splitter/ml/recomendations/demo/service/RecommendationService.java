package mx.com.santander.splitter.ml.recomendations.demo.service;

import org.springframework.stereotype.Service;

import mx.com.santander.splitter.ml.recomendations.demo.dto.Features;
import mx.com.santander.splitter.ml.recomendations.demo.dto.Transaction;
import mx.com.santander.splitter.ml.recomendations.demo.extractor.FeatureExtractor;
import mx.com.santander.splitter.ml.recomendations.demo.model.Recommendation;
import mx.com.santander.splitter.ml.recomendations.demo.repository.RecommendationRepository;
import mx.com.santander.splitter.ml.recomendations.demo.repository.TransactionRepository;
import mx.com.santander.splitter.ml.recomendations.demo.utils.MlRecommender;

import java.util.List;

@Service
public class RecommendationService {

    private final TransactionRepository transactionRepository;
    private final FeatureExtractor featureExtractor;
    private final MlRecommender mlRecommender;
    private final RecommendationRepository recommendationRepository;

    public RecommendationService(
            TransactionRepository transactionRepository,
            FeatureExtractor featureExtractor,
            MlRecommender mlRecommender,
            RecommendationRepository recommendationRepository
    ) {
        this.transactionRepository = transactionRepository;
        this.featureExtractor = featureExtractor;
        this.mlRecommender = mlRecommender;
        this.recommendationRepository = recommendationRepository;
    }

    public Recommendation generateAndSaveRecommendation(String customerId) throws Exception {

        // 1. Obtener transacciones del usuario
        List<Transaction> txns = transactionRepository.findByCustomerId(customerId);

        // 2. Extraer features
        Features features = featureExtractor.extract(txns);

        // 3. Convertir features a vector ML
        float[] vector = features.toArray();

        // 4. Llamar al modelo ML
        String productId = mlRecommender.predict(vector);

        // 5. Crear recomendación
        Recommendation rec = new Recommendation(
                customerId,
                productId,
                features,
                java.time.LocalDateTime.now()
        );

        // 6. Guardar en MongoDB
        recommendationRepository.save(rec);

        return rec;
    }
}
