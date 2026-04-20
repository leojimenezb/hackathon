import pandas as pd
import numpy as np

N = 5000

df = pd.DataFrame({
    "gasto_pets": np.random.gamma(3, 200, N),
    "gasto_vet": np.random.binomial(1, 0.3, N) * np.random.uniform(200, 800, N),
    "gasto_gas": np.random.gamma(2, 300, N),
    "gasto_restaurants": np.random.gamma(2, 150, N),
    "gasto_groceries": np.random.gamma(5, 200, N),
    "recurrencias_vet": np.random.binomial(2, 0.2, N),
    "tendencia_pets": np.random.uniform(-0.2, 0.6, N),
    "variabilidad": np.random.uniform(0.1, 0.5, N)
})

def label(row):
    if row.gasto_pets > 800 and row.recurrencias_vet >= 1:
        return "pet_insurance_basic"
    if row.gasto_gas > 1200:
        return "auto_insurance_basic"
    if row.variabilidad > 0.35:
        return "financial_health_checkup"
    return "auto_savings"

df["label"] = df.apply(label, axis=1)

df.to_csv("synthetic_recommendations.csv", index=False)

print("Dataset generado con éxito.")
