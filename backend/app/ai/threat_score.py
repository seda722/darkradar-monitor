def calculate_score(critical, high, low):

    score = (
        critical * 30 +
        high * 15 +
        low * 5
    )

    if score > 100:
        score = 100

    return score


def calculate_status(score):

    if score >= 80:
        return "CRITICAL"

    elif score >= 50:
        return "HIGH"

    elif score >= 20:
        return "MEDIUM"

    return "LOW"