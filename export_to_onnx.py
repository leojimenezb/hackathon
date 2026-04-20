import pandas as pd
import joblib
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType

df = pd.read_csv("synthetic_recommendations.csv")
X = df.drop("label", axis=1)

model = joblib.load("recommender.pkl")

initial_type = [('input', FloatTensorType([None, X.shape[1]]))]
onnx_model = convert_sklearn(model, initial_types=initial_type)

with open("recommender.onnx", "wb") as f:
    f.write(onnx_model.SerializeToString())

print("Modelo exportado a recommender.onnx")