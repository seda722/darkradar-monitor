HIGH_WORDS = [
    "hesap satışı",
    "satılık",
    "hack",
    "database",
    "db",
    "çalıntı",
    "dump"
]

CRITICAL_WORDS = [
    "veri sızıntısı",
    "müşteri bilgileri",
    "şifre",
    "kimlik",
    "tc",
    "kredi kartı",
    "leak"
]


def calculate_risk(text: str):
    text = text.lower()

    for word in CRITICAL_WORDS:
        if word in text:
            return "CRITICAL"

    for word in HIGH_WORDS:
        if word in text:
            return "HIGH"

    return "LOW"


print(calculate_risk("Garanti hesap satışı"))
print(calculate_risk("Garanti veri sızıntısı"))