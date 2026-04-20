package mx.com.santander.splitter.ml.recomendations.demo.service;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import lombok.extern.slf4j.Slf4j;
import mx.com.santander.splitter.ml.recomendations.demo.dto.Features;
import mx.com.santander.splitter.ml.recomendations.demo.dto.MLResult;
import mx.com.santander.splitter.ml.recomendations.demo.extractor.FeatureExtractor;
import mx.com.santander.splitter.ml.recomendations.demo.model.Recommendation;
import mx.com.santander.splitter.ml.recomendations.demo.model.Transaction;
import mx.com.santander.splitter.ml.recomendations.demo.repository.RecommendationRepository;
import mx.com.santander.splitter.ml.recomendations.demo.repository.TransactionRepository;
import mx.com.santander.splitter.ml.recomendations.demo.utils.MlRecommender;

import java.time.Instant;
import java.util.List;

@Service
@Slf4j
public class RecommendationService {

	private final TransactionRepository transactionRepository;
	private final FeatureExtractor featureExtractor;
	private final MlRecommender mlRecommender;
	private final RecommendationRepository recommendationRepository;

	public RecommendationService(TransactionRepository transactionRepository, FeatureExtractor featureExtractor,
			MlRecommender mlRecommender, RecommendationRepository recommendationRepository) {
		this.transactionRepository = transactionRepository;
		this.featureExtractor = featureExtractor;
		this.mlRecommender = mlRecommender;
		this.recommendationRepository = recommendationRepository;
	}

	public Recommendation generateAndSaveRecommendation(String customerId) throws Exception {
		log.info("Generating recommendation for customer {}", customerId);

		// 1. Obtener transacciones del usuario
		List<Transaction> txns = transactionRepository.findByCustomerId(customerId);
		log.info("Found {} transactions for customer {}", txns.size(), customerId);

		// 2. Extraer features
		Features features = featureExtractor.extract(txns);
		log.info("Extracted features for customer {}", customerId);

		// 3. Convertir features a vector ML
		float[] vector = features.toArray();
		log.info("Converted features to vector of length {}", vector.length);

		// 4. Ejecutar modelo ML
		MLResult result = mlRecommender.predictWithScore(vector);
		log.info("Predicted product {} for customer {}", result, customerId);

		// 5. Crear ID único
		String recId = "rec_" + customerId;

		// 6. Crear documento Recommendation
		Recommendation rec = new Recommendation();
		rec.setId(recId);
		rec.setCustomerId(customerId);
		rec.setProductId(result.getProductId());
		rec.setProductName(mapProductName(result.getProductId()));
		rec.setScore(result.getScore());
		rec.setReason(result.getReason());
		rec.setFeaturesUsed(features.toMap());
		rec.setCreatedAt(Instant.now());
		ObjectMapper mapper = new ObjectMapper();
		mapper.registerModule(new JavaTimeModule());
		String featuresJson = mapper.writeValueAsString(rec);
		log.info(featuresJson);
		// 6. Guardar en MongoDB
		recommendationRepository.save(rec);
		log.info("Saved recommendation for customer {}", customerId);

		return rec;
	}

	private String mapProductName(String productId) {
		return switch (productId) {
		case "pet_insurance_basic" -> "Seguro de Mascotas";
		case "auto_insurance_basic" -> "Seguro de Auto";
		case "auto_savings" -> "Ahorro Automático";
		default -> "Chequeo de Salud Financiera";
		};
	}
}
