package mx.com.santander.splitter.ml.recomendations.demo.utils;

import ai.onnxruntime.*;
import java.util.*;

public class MlRecommender {

    private final OrtEnvironment env;
    private final OrtSession session;

    public MlRecommender() throws Exception {
        env = OrtEnvironment.getEnvironment();
        session = env.createSession("recommender.onnx");
    }

    public String predict(float[] features) throws Exception {

        OnnxTensor input = OnnxTensor.createTensor(env, new float[][]{features});

        Map<String, OnnxTensor> inputs = Map.of("input", input);

        OrtSession.Result result = session.run(inputs);

        float[][] output = (float[][]) result.get(0).getValue();

        int bestIndex = 0;
        for (int i = 1; i < output[0].length; i++) {
            if (output[0][i] > output[0][bestIndex]) {
                bestIndex = i;
            }
        }

        return switch (bestIndex) {
            case 0 -> "pet_insurance_basic";
            case 1 -> "auto_insurance_basic";
            case 2 -> "auto_savings";
            default -> "financial_health_checkup";
        };
    }
}
