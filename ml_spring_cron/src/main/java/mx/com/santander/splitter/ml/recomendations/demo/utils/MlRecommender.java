package mx.com.santander.splitter.ml.recomendations.demo.utils;

import ai.onnxruntime.*;

import java.io.InputStream;
import java.util.*;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class MlRecommender {

    private final OrtEnvironment env;
    private final OrtSession session;

    public MlRecommender() throws Exception {
        log.info("Initializing ML Recommender with ONNX model");
        env = OrtEnvironment.getEnvironment();

        try (InputStream modelStream = getClass().getClassLoader().getResourceAsStream("recommender.onnx")) {

            if (modelStream == null) {
                throw new RuntimeException("No se encontró recommender.onnx en el classpath");
            }

            byte[] modelBytes = modelStream.readAllBytes();
            session = env.createSession(modelBytes);
            log.info("ONNX model loaded successfully");

        } catch (Exception e) {
            log.error("Error loading ONNX model", e);
            throw new RuntimeException("Error cargando el modelo ONNX", e);
        }
    }

    public String predict(float[] features) throws Exception {
        log.debug("Predicting with features: {}", Arrays.toString(features));

        OnnxTensor input = OnnxTensor.createTensor(env, new float[][] { features });

        Map<String, OnnxTensor> inputs = Map.of("input", input);

        OrtSession.Result result = session.run(inputs);

        float[][] output = (float[][]) result.get(0).getValue();

        int bestIndex = 0;
        for (int i = 1; i < output[0].length; i++) {
            if (output[0][i] > output[0][bestIndex]) {
                bestIndex = i;
            }
        }

        String product = switch (bestIndex) {
            case 0 -> "pet_insurance_basic";
            case 1 -> "auto_insurance_basic";
            case 2 -> "auto_savings";
            default -> "financial_health_checkup";
        };
        log.debug("Predicted product: {}", product);
        return product;
    }
}
