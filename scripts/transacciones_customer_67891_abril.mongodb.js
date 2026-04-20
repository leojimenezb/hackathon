const database = 'hackathon';

// Create a new database.
use(database);

db.transactions.insertMany([
    {
        "id": "txn_001",
        "customerId": "customer_67891",
        "date": "2026-04-12T00:00:00Z",
        "amoutn": 941.22,
        "currency": "MXN",
        "description": "Pago en The Home Depot",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "The Home Depot",
        "merchantname": "The Home Depot",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_c672bd10",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-13T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 50,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_002",
        "customerId": "customer_67891",
        "date": "2026-04-22T00:00:00Z",
        "amoutn": 1162.7,
        "currency": "MXN",
        "description": "Pago en Chedraui",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Chedraui",
        "merchantname": "Chedraui",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_abe7fe3f",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-24T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 8,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_003",
        "customerId": "customer_67891",
        "date": "2026-04-13T00:00:00Z",
        "amoutn": 1018.07,
        "currency": "MXN",
        "description": "Pago en Cinépolis",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Crédito",
        "merchant": "Cinépolis",
        "merchantname": "Cinépolis",
        "location": {
            "city": "Guadalajara",
            "state": "Jalisco",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_1d38dc2f",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-15T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 43,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_004",
        "customerId": "customer_67891",
        "date": "2026-04-22T00:00:00Z",
        "amoutn": 1627.4,
        "currency": "MXN",
        "description": "Pago en Chedraui",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Transferencia",
        "merchant": "Chedraui",
        "merchantname": "Chedraui",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_4c47fedf",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-23T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 33,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_005",
        "customerId": "customer_67891",
        "date": "2026-04-05T00:00:00Z",
        "amoutn": 1655.96,
        "currency": "MXN",
        "description": "Pago en Soriana",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Soriana",
        "merchantname": "Soriana",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_f63461b2",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-06T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 42,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_006",
        "customerId": "customer_67891",
        "date": "2026-04-24T00:00:00Z",
        "amoutn": 1476.65,
        "currency": "MXN",
        "description": "Pago en Rappi",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Rappi",
        "merchantname": "Rappi",
        "location": {
            "city": "Puebla",
            "state": "Puebla",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_a04607f2",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-27T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 40,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_007",
        "customerId": "customer_67891",
        "date": "2026-04-23T00:00:00Z",
        "amoutn": 1052.42,
        "currency": "MXN",
        "description": "Pago en Chedraui",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Chedraui",
        "merchantname": "Chedraui",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_2625b76a",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-24T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 6,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_008",
        "customerId": "customer_67891",
        "date": "2026-04-28T00:00:00Z",
        "amoutn": 1010.2,
        "currency": "MXN",
        "description": "Pago en Starbucks",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Starbucks",
        "merchantname": "Starbucks",
        "location": {
            "city": "Querétaro",
            "state": "Querétaro",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_5e62c40d",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-30T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 30,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_009",
        "customerId": "customer_67891",
        "date": "2026-04-10T00:00:00Z",
        "amoutn": 1389.35,
        "currency": "MXN",
        "description": "Pago en Soriana",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Soriana",
        "merchantname": "Soriana",
        "location": {
            "city": "Guadalajara",
            "state": "Jalisco",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_06e80ab4",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-13T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 17,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_010",
        "customerId": "customer_67891",
        "date": "2026-04-10T00:00:00Z",
        "amoutn": 1201.18,
        "currency": "MXN",
        "description": "Pago en Oxxo",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Oxxo",
        "merchantname": "Oxxo",
        "location": {
            "city": "Querétaro",
            "state": "Querétaro",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_e1206fb0",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-13T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 46,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_011",
        "customerId": "customer_67891",
        "date": "2026-04-28T00:00:00Z",
        "amoutn": 1161.44,
        "currency": "MXN",
        "description": "Pago en Walmart",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Crédito",
        "merchant": "Walmart",
        "merchantname": "Walmart",
        "location": {
            "city": "Puebla",
            "state": "Puebla",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_48bfe85d",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-29T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 28,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_012",
        "customerId": "customer_67891",
        "date": "2026-04-17T00:00:00Z",
        "amoutn": 1587.76,
        "currency": "MXN",
        "description": "Pago en Rappi",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Transferencia",
        "merchant": "Rappi",
        "merchantname": "Rappi",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_35c5200b",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-18T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 23,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_013",
        "customerId": "customer_67891",
        "date": "2026-04-20T00:00:00Z",
        "amoutn": 1185.59,
        "currency": "MXN",
        "description": "Pago en Cinemex",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Cinemex",
        "merchantname": "Cinemex",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_8393326b",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-22T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 29,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_014",
        "customerId": "customer_67891",
        "date": "2026-04-21T00:00:00Z",
        "amoutn": 1767.07,
        "currency": "MXN",
        "description": "Pago en Starbucks",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Crédito",
        "merchant": "Starbucks",
        "merchantname": "Starbucks",
        "location": {
            "city": "Puebla",
            "state": "Puebla",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_dd82df8e",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-23T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 39,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_015",
        "customerId": "customer_67891",
        "date": "2026-04-15T00:00:00Z",
        "amoutn": 866.9,
        "currency": "MXN",
        "description": "Pago en Soriana",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Soriana",
        "merchantname": "Soriana",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_9158acc5",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-18T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 48,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_016",
        "customerId": "customer_67891",
        "date": "2026-04-23T00:00:00Z",
        "amoutn": 1553.46,
        "currency": "MXN",
        "description": "Pago en Oxxo",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Transferencia",
        "merchant": "Oxxo",
        "merchantname": "Oxxo",
        "location": {
            "city": "Querétaro",
            "state": "Querétaro",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_f98a0457",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-24T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 9,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_017",
        "customerId": "customer_67891",
        "date": "2026-04-04T00:00:00Z",
        "amoutn": 1533.88,
        "currency": "MXN",
        "description": "Pago en Cinépolis",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Cinépolis",
        "merchantname": "Cinépolis",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_3396b55f",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-07T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 27,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_018",
        "customerId": "customer_67891",
        "date": "2026-04-24T00:00:00Z",
        "amoutn": 1008.75,
        "currency": "MXN",
        "description": "Pago en Oxxo",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Oxxo",
        "merchantname": "Oxxo",
        "location": {
            "city": "Querétaro",
            "state": "Querétaro",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_4d259b4d",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-27T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 2,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_019",
        "customerId": "customer_67891",
        "date": "2026-04-26T00:00:00Z",
        "amoutn": 1320.63,
        "currency": "MXN",
        "description": "Pago en Chedraui",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Crédito",
        "merchant": "Chedraui",
        "merchantname": "Chedraui",
        "location": {
            "city": "Guadalajara",
            "state": "Jalisco",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_a05dabcb",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-29T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 37,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_020",
        "customerId": "customer_67891",
        "date": "2026-04-08T00:00:00Z",
        "amoutn": 932.34,
        "currency": "MXN",
        "description": "Pago en Costco",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Transferencia",
        "merchant": "Costco",
        "merchantname": "Costco",
        "location": {
            "city": "Guadalajara",
            "state": "Jalisco",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_c3c4585d",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-11T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 32,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_021",
        "customerId": "customer_67891",
        "date": "2026-04-10T00:00:00Z",
        "amoutn": 1326.44,
        "currency": "MXN",
        "description": "Pago en Cinemex",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Cinemex",
        "merchantname": "Cinemex",
        "location": {
            "city": "Querétaro",
            "state": "Querétaro",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_add25344",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-11T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 4,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_022",
        "customerId": "customer_67891",
        "date": "2026-04-10T00:00:00Z",
        "amoutn": 1926.28,
        "currency": "MXN",
        "description": "Pago en Costco",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Costco",
        "merchantname": "Costco",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_aa5a4209",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-12T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 26,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_023",
        "customerId": "customer_67891",
        "date": "2026-04-11T00:00:00Z",
        "amoutn": 945.13,
        "currency": "MXN",
        "description": "Pago en Uber",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Uber",
        "merchantname": "Uber",
        "location": {
            "city": "Querétaro",
            "state": "Querétaro",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_77a0c101",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-13T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 20,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_024",
        "customerId": "customer_67891",
        "date": "2026-04-19T00:00:00Z",
        "amoutn": 1490.03,
        "currency": "MXN",
        "description": "Pago en Oxxo",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Transferencia",
        "merchant": "Oxxo",
        "merchantname": "Oxxo",
        "location": {
            "city": "Guadalajara",
            "state": "Jalisco",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_172c644c",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-20T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 15,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_025",
        "customerId": "customer_67891",
        "date": "2026-04-09T00:00:00Z",
        "amoutn": 1898.38,
        "currency": "MXN",
        "description": "Pago en Oxxo",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Oxxo",
        "merchantname": "Oxxo",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_5f5ae888",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-12T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 46,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_026",
        "customerId": "customer_67891",
        "date": "2026-04-19T00:00:00Z",
        "amoutn": 1657.67,
        "currency": "MXN",
        "description": "Pago en The Home Depot",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "The Home Depot",
        "merchantname": "The Home Depot",
        "location": {
            "city": "Guadalajara",
            "state": "Jalisco",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_8e800836",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-21T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 33,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_027",
        "customerId": "customer_67891",
        "date": "2026-04-22T00:00:00Z",
        "amoutn": 1038.27,
        "currency": "MXN",
        "description": "Pago en Oxxo",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Crédito",
        "merchant": "Oxxo",
        "merchantname": "Oxxo",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_02a8681f",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-23T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 2,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_028",
        "customerId": "customer_67891",
        "date": "2026-04-17T00:00:00Z",
        "amoutn": 1262.01,
        "currency": "MXN",
        "description": "Pago en Cinemex",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Crédito",
        "merchant": "Cinemex",
        "merchantname": "Cinemex",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_2aa1d04f",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-18T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 39,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_029",
        "customerId": "customer_67891",
        "date": "2026-04-18T00:00:00Z",
        "amoutn": 1564.96,
        "currency": "MXN",
        "description": "Pago en Cinemex",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Crédito",
        "merchant": "Cinemex",
        "merchantname": "Cinemex",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_ebfda41d",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-20T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 45,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_030",
        "customerId": "customer_67891",
        "date": "2026-04-07T00:00:00Z",
        "amoutn": 823.15,
        "currency": "MXN",
        "description": "Pago en The Home Depot",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "The Home Depot",
        "merchantname": "The Home Depot",
        "location": {
            "city": "Puebla",
            "state": "Puebla",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_7424236e",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-10T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 2,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_031",
        "customerId": "customer_67891",
        "date": "2026-04-20T00:00:00Z",
        "amoutn": 994.99,
        "currency": "MXN",
        "description": "Pago en Farmacias Guadalajara",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Farmacias Guadalajara",
        "merchantname": "Farmacias Guadalajara",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_7e5df4a3",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-22T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 3,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_032",
        "customerId": "customer_67891",
        "date": "2026-04-13T00:00:00Z",
        "amoutn": 1108.71,
        "currency": "MXN",
        "description": "Pago en Cinemex",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Transferencia",
        "merchant": "Cinemex",
        "merchantname": "Cinemex",
        "location": {
            "city": "Puebla",
            "state": "Puebla",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_870eea49",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-15T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 0,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_033",
        "customerId": "customer_67891",
        "date": "2026-04-01T00:00:00Z",
        "amoutn": 1551.09,
        "currency": "MXN",
        "description": "Pago en Uber",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Transferencia",
        "merchant": "Uber",
        "merchantname": "Uber",
        "location": {
            "city": "Querétaro",
            "state": "Querétaro",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_76627a20",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-03T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 4,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_034",
        "customerId": "customer_67891",
        "date": "2026-04-13T00:00:00Z",
        "amoutn": 1061.25,
        "currency": "MXN",
        "description": "Pago en Farmacias Guadalajara",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Farmacias Guadalajara",
        "merchantname": "Farmacias Guadalajara",
        "location": {
            "city": "Querétaro",
            "state": "Querétaro",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_a14652d4",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-14T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 17,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_035",
        "customerId": "customer_67891",
        "date": "2026-04-04T00:00:00Z",
        "amoutn": 1081.91,
        "currency": "MXN",
        "description": "Pago en Cinépolis",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Cinépolis",
        "merchantname": "Cinépolis",
        "location": {
            "city": "Querétaro",
            "state": "Querétaro",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_3b5a7f33",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-06T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 2,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_036",
        "customerId": "customer_67891",
        "date": "2026-04-23T00:00:00Z",
        "amoutn": 1201.15,
        "currency": "MXN",
        "description": "Pago en Costco",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Costco",
        "merchantname": "Costco",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_f464767c",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-26T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 36,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_037",
        "customerId": "customer_67891",
        "date": "2026-04-06T00:00:00Z",
        "amoutn": 896.23,
        "currency": "MXN",
        "description": "Pago en Farmacias Guadalajara",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Farmacias Guadalajara",
        "merchantname": "Farmacias Guadalajara",
        "location": {
            "city": "Puebla",
            "state": "Puebla",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_067e2061",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-07T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 13,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_038",
        "customerId": "customer_67891",
        "date": "2026-04-16T00:00:00Z",
        "amoutn": 1297.8,
        "currency": "MXN",
        "description": "Pago en Cinépolis",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Crédito",
        "merchant": "Cinépolis",
        "merchantname": "Cinépolis",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_ebca709a",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-19T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 0,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_039",
        "customerId": "customer_67891",
        "date": "2026-04-05T00:00:00Z",
        "amoutn": 1393.88,
        "currency": "MXN",
        "description": "Pago en Costco",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Costco",
        "merchantname": "Costco",
        "location": {
            "city": "Guadalajara",
            "state": "Jalisco",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_cd59d786",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-06T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 7,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_040",
        "customerId": "customer_67891",
        "date": "2026-04-09T00:00:00Z",
        "amoutn": 911.08,
        "currency": "MXN",
        "description": "Pago en Cinépolis",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Cinépolis",
        "merchantname": "Cinépolis",
        "location": {
            "city": "Querétaro",
            "state": "Querétaro",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_c019b742",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-10T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 6,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_041",
        "customerId": "customer_67891",
        "date": "2026-04-10T00:00:00Z",
        "amoutn": 865.27,
        "currency": "MXN",
        "description": "Pago en The Home Depot",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "The Home Depot",
        "merchantname": "The Home Depot",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_f2bb8b8d",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-11T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 13,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_042",
        "customerId": "customer_67891",
        "date": "2026-04-06T00:00:00Z",
        "amoutn": 1813.03,
        "currency": "MXN",
        "description": "Pago en Oxxo",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Oxxo",
        "merchantname": "Oxxo",
        "location": {
            "city": "Puebla",
            "state": "Puebla",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_f084e3f0",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-07T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 50,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_043",
        "customerId": "customer_67891",
        "date": "2026-04-22T00:00:00Z",
        "amoutn": 860.66,
        "currency": "MXN",
        "description": "Pago en Cinépolis",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Transferencia",
        "merchant": "Cinépolis",
        "merchantname": "Cinépolis",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_a23cbd62",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-25T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 40,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_044",
        "customerId": "customer_67891",
        "date": "2026-04-25T00:00:00Z",
        "amoutn": 1952.29,
        "currency": "MXN",
        "description": "Pago en Soriana",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Soriana",
        "merchantname": "Soriana",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_1cbcdf9c",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-27T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 9,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_045",
        "customerId": "customer_67891",
        "date": "2026-04-06T00:00:00Z",
        "amoutn": 1641.19,
        "currency": "MXN",
        "description": "Pago en Starbucks",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Transferencia",
        "merchant": "Starbucks",
        "merchantname": "Starbucks",
        "location": {
            "city": "Puebla",
            "state": "Puebla",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_1b4a2af0",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-09T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 33,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_046",
        "customerId": "customer_67891",
        "date": "2026-04-27T00:00:00Z",
        "amoutn": 881.36,
        "currency": "MXN",
        "description": "Pago en Cinemex",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Cinemex",
        "merchantname": "Cinemex",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_c1268ca7",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-30T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 47,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_047",
        "customerId": "customer_67891",
        "date": "2026-04-25T00:00:00Z",
        "amoutn": 950.76,
        "currency": "MXN",
        "description": "Pago en Soriana",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Crédito",
        "merchant": "Soriana",
        "merchantname": "Soriana",
        "location": {
            "city": "Guadalajara",
            "state": "Jalisco",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_2e460c7b",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-26T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 18,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_048",
        "customerId": "customer_67891",
        "date": "2026-04-01T00:00:00Z",
        "amoutn": 1487.33,
        "currency": "MXN",
        "description": "Pago en Walmart",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Débito",
        "merchant": "Walmart",
        "merchantname": "Walmart",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_a8888da9",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-04T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 16,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_049",
        "customerId": "customer_67891",
        "date": "2026-04-28T00:00:00Z",
        "amoutn": 1753.12,
        "currency": "MXN",
        "description": "Pago en Uber",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "SPEI",
        "merchant": "Uber",
        "merchantname": "Uber",
        "location": {
            "city": "Ciudad de México",
            "state": "CDMX",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_b0467eba",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-30T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 21,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    },
    {
        "id": "txn_050",
        "customerId": "customer_67891",
        "date": "2026-04-11T00:00:00Z",
        "amoutn": 1506.21,
        "currency": "MXN",
        "description": "Pago en Farmacias Guadalajara",
        "category": "Gasolina",
        "status": "Completado",
        "paymentMethod": "Tarjeta de Crédito",
        "merchant": "Farmacias Guadalajara",
        "merchantname": "Farmacias Guadalajara",
        "location": {
            "city": "Monterrey",
            "state": "Nuevo León",
            "country": "México"
        },
        "tags": [
            "pago",
            "gasolina",
            "mxn"
        ],
        "metadata": {
            "orderId": "order_695879c5",
            "customerId": "customer_67891"
        },
        "mcc": "5541",
        "isFraudulent": false,
        "exchangeRate": 1.0,
        "settlementDate": "2026-04-13T00:00:00Z",
        "recurring": false,
        "installmentCount": 1,
        "originalTransactionId": null,
        "cashbackAmount": 0.0,
        "rewardsPoints": 26,
        "categoryHierarchy": [
            "Gasolina",
            "Gasolina General"
        ]
    }
]);