package mx.com.santander.splitter.ml.recomendations.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import mx.com.santander.splitter.ml.recomendations.demo.model.Recommendation;

import java.util.Optional;
@Repository
public interface RecommendationRepository extends MongoRepository<Recommendation, String> {

    Optional<Recommendation> findByCustomerId(String customerId);
}