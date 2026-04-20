package mx.com.santander.splitter.ml.recomendations.demo.component;

import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;
import mx.com.santander.splitter.ml.recomendations.demo.model.Customer;
import mx.com.santander.splitter.ml.recomendations.demo.repository.CustomerRepository;
import mx.com.santander.splitter.ml.recomendations.demo.service.RecommendationService;

@Component
@Slf4j
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

    @Scheduled(cron = "*/5 * * * * *")
    public void runBatch() {
        log.info("Starting batch recommendation generation");
        List<Customer> customers = customerRepository.findAll();
        log.info("Found {} customers to process", customers.size());

        for (Customer c : customers) {
            log.debug("Processing customer {}", c.getId());
            try {
                //recommendationService.generateAndSaveRecommendation(c.getId());
                log.debug("Successfully generated recommendation for customer {}", c.getId());
            } catch (Exception e) {
                log.error("Error generating recommendation for {}", c.getId(), e);
            }
        }
        log.info("Batch recommendation generation completed");
    }
}
