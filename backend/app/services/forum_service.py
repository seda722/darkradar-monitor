import json
from pathlib import Path
from rapidfuzz import fuzz

DATA_FILE = Path(__file__).parent.parent / "data" / "forum_posts.json"


def load_posts():
    """Forum verilerini JSON dosyasından okur."""
    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def search_keyword(keyword: str):
    """Anahtar kelimeyi typo toleranslı olarak forum kayıtlarında arar."""

    posts = load_posts()
    keyword = keyword.lower().strip()

    results = []

    for post in posts:
        title = post["title"].lower()
        content = post["content"].lower()

        # Birebir eşleşme
        if keyword in title or keyword in content:
            results.append(post)
            continue

        # RapidFuzz ile benzerlik kontrolü
        title_score = fuzz.partial_ratio(keyword, title)
        content_score = fuzz.partial_ratio(keyword, content)

        if title_score >= 80 or content_score >= 80:
            results.append(post)

    return results