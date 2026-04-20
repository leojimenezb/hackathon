package mx.com.santander.splitter.ml.recomendations.demo.utils;

import ai.onnxruntime.*;

import java.io.InputStream;
import java.util.*;

import lombok.extern.slf4j.Slf4j;
import mx.com.santander.splitter.ml.recomendations.demo.dto.MLResult;

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
        log.info("Predicting with features: {}", Arrays.toString(features));

        OnnxTensor input = OnnxTensor.createTensor(env, new float[][] { features });

        Map<String, OnnxTensor> inputs = Map.of("input", input);

        OrtSession.Result result = session.run(inputs);

        log.info("ONNX result type: {}", result.get(0).getClass().getName());
        log.info("ONNX result value type: {}", result.get(0).getValue().getClass().getName());

        Object outputObj = result.get(0).getValue();
        String product;

        // Manejo flexible del tipo de salida
        if (outputObj instanceof String[]) {
            String[] output = (String[]) outputObj;
            log.info("Output es String array con {} elementos", output.length);
            if (output.length > 0) {
                product = output[0];
                log.info("Primer elemento del array: {}", product);
            } else {
                product = "financial_health_checkup";
            }
        } else if (outputObj instanceof float[][]) {
            float[][] output = (float[][]) outputObj;
            float[] scores = output[0];
            product = getProductByIndex(getMaxIndex(scores));
        } else if (outputObj instanceof float[]) {
            float[] scores = (float[]) outputObj;
            product = getProductByIndex(getMaxIndex(scores));
        } else {
            log.error("Unexpected output type: {}", outputObj.getClass().getName());
            throw new RuntimeException("Tipo de salida ONNX inesperado: " + outputObj.getClass().getName());
        }

        log.info("Predicted product: {}", product);
        return product;
    }

    private int getMaxIndex(float[] scores) {
        int bestIndex = 0;
        for (int i = 1; i < scores.length; i++) {
            if (scores[i] > scores[bestIndex]) {
                bestIndex = i;
            }
        }
        return bestIndex;
    }

    private String getProductByIndex(int index) {
        return switch (index) {
            case 0 -> "pet_insurance_basic";
            case 1 -> "auto_insurance_basic";
            case 2 -> "auto_savings";
            default -> "financial_health_checkup";
        };
    }

    

    public MLResult predictWithScore(float[] features) throws Exception {
        log.info("Predicting with score for features: {}", Arrays.toString(features));

        OnnxTensor input = OnnxTensor.createTensor(env, new float[][] { features });
        Map<String, OnnxTensor> inputs = Map.of("input", input);

        OrtSession.Result result = session.run(inputs);
        
        log.info("ONNX result type: {}", result.get(0).getClass().getName());
        log.info("ONNX result value type: {}", result.get(0).getValue().getClass().getName());

        Object outputObj = result.get(0).getValue();
        String productId;
        double score;

        // Manejo flexible del tipo de salida
        if (outputObj instanceof String[]) {
            String[] output = (String[]) outputObj;
            log.info("Output es String array con {} elementos", output.length);
            if (output.length > 0) {
                productId = output[0];
                score = 1.0; // Asumimos score máximo para el producto directo
                log.info("Producto directo del modelo: {}", productId);
            } else {
                productId = "financial_health_checkup";
                score = 0.0;
            }
        } else if (outputObj instanceof float[][]) {
            float[][] output = (float[][]) outputObj;
            float[] scores = output[0];
            int bestIndex = getMaxIndex(scores);
            productId = getProductByIndex(bestIndex);
            score = scores[bestIndex];
        } else if (outputObj instanceof float[]) {
            float[] scores = (float[]) outputObj;
            int bestIndex = getMaxIndex(scores);
            productId = getProductByIndex(bestIndex);
            score = scores[bestIndex];
        } else {
            log.error("Unexpected output type: {}", outputObj.getClass().getName());
            throw new RuntimeException("Tipo de salida ONNX inesperado: " + outputObj.getClass().getName());
        }

        String reason = switch (productId) {
            case "pet_insurance_basic" ->
                "Tus gastos en mascotas aumentaron y tienes cargos veterinarios recurrentes.";
            case "auto_insurance_basic" ->
                "Tu gasto en gasolina es alto y constante.";
            case "auto_savings" ->
                "Tu gasto en supermercados es elevado y estable.";
            default ->
                "Tu variabilidad de gastos es alta, recomendamos una revisión financiera.";
        };

        return new MLResult(productId, score, reason);
    }

}
