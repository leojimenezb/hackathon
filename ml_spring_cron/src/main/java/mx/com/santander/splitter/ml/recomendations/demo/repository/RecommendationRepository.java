package mx.com.santander.splitter.ml.recomendations.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import mx.com.santander.splitter.ml.recomendations.demo.model.Recommendation;

import java.util.Optional;

public interface RecommendationRepository extends MongoRepository<Recommendation, String> {

    Optional<Recommendation> findByCustomerId(String customerId);
}