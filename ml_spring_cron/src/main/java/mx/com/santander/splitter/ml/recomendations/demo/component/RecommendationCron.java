package mx.com.santander.splitter.ml.recomendations.demo.component;

import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import mx.com.santander.splitter.ml.recomendations.demo.model.Customer;
import mx.com.santander.splitter.ml.recomendations.demo.repository.CustomerRepository;
import mx.com.santander.splitter.ml.recomendations.demo.service.RecommendationService;

@Component
public class RecommendationCron {

    private final RecommendationService recommendationService;
    private final CustomerRepository customerRepository;

    public RecommendationCron(
            RecommendationService recommendationService,
            CustomerRepository customerRepository
    ) {
        this.recommendationService = recommendationService;
        this.customerRepository = customerRepository;
    }

    @Scheduled(cron = "0 */5 * * * *") // cada 5 minutos
    public void runBatch() {
        List<Customer> customers = customerRepository.findAll();

        for (Customer c : customers) {
            try {
                recommendationService.generateAndSaveRecommendation(c.getId());
            } catch (Exception e) {
                System.out.println("Error generando recomendación para " + c.getId());
            }
        }
    }
}
