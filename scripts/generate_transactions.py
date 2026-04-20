import random
import uuid
import json
from datetime import datetime, timedelta

# Catálogos realistas
CATEGORIES = [
    ("Supermercado", "5411"),
    ("Restaurante", "5812"),
    ("Gasolina", "5541"),
    ("Servicios", "4899"),
    ("Transporte", "4111"),
    ("Ropa", "5651"),
    ("Farmacia", "5912"),
    ("Entretenimiento", "7832")
]

CITIES = [
    ("Ciudad de México", "CDMX", "México"),
    ("Guadalajara", "Jalisco", "México"),
    ("Monterrey", "Nuevo León", "México"),
    ("Puebla", "Puebla", "México"),
    ("Querétaro", "Querétaro", "México")
]

PAYMENT_METHODS = ["Tarjeta de Débito", "Tarjeta de Crédito", "Transferencia", "SPEI"]

MERCHANTS = [
    "Oxxo", "Walmart", "Chedraui", "Soriana", "Starbucks",
    "Cinemex", "Cinépolis", "Uber", "Rappi", "Liverpool",
    "Farmacias Guadalajara", "The Home Depot", "Costco"
]


def generar_transaccion(customer_id, index, year, month):
    categoria, mcc = random.choice(CATEGORIES)
    merchant = random.choice(MERCHANTS)
    ciudad, estado, pais = random.choice(CITIES)

    # Fecha dentro del mes solicitado
    dia = random.randint(1, 28)
    fecha = datetime(year, month, dia)
    fecha_liquidacion = fecha + timedelta(days=random.randint(1, 3))

    monto = round(random.uniform(50, 2500), 2)

    return {
        "id": f"txn_{index:03d}",
        "customerId": customer_id,
        "date": fecha.isoformat() + "Z",
        "amoutn": monto,
        "currency": "MXN",
        "description": f"Pago en {merchant}",
        "category": categoria,
        "status": "Completado",
        "paymentMethod": random.choice(PAYMENT_METHODS),
        "merchant": merchant,
        "merchantname": merchant,
        "location": {
            "city": ciudad,
            "state": estado,
            "country": pais
        },
        "tags": ["pago", categoria.lower(), "mxn"],
        "metadata": {
            "orderId": f"order_{uuid.uuid4().hex[:8]}",
            "customerId": customer_id
        },
        "mcc": mcc,
        "isFraudulent": False,
        "exchangeRate": 1.0,
        "settlementDate": fecha_liquidacion.isoformat() + "Z",
        "recurring": False,
        "installmentCount": 1,
        "originalTransactionId": None,
        "cashbackAmount": 0.00,
        "rewardsPoints": random.randint(0, 50),
        "categoryHierarchy": [categoria, f"{categoria} General"]
    }


def generar_transacciones_mes(customer_id, year, month, cantidad=50):
    return [
        generar_transaccion(customer_id, i + 1, year, month)
        for i in range(cantidad)
    ]


# ------------------------------
# BLOQUE PRINCIPAL DEL SCRIPT
# ------------------------------
if __name__ == "__main__":
    trans = generar_transacciones_mes("customer_67890", 2026, 4, 50)

    with open("transacciones_customer_67890_abril.json", "w", encoding="utf-8") as f:
        json.dump(trans, f, indent=4, ensure_ascii=False)

    print("Archivo generado: transacciones_customer_67890_abril.json")
