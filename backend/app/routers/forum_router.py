from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.services.forum_service import load_posts, search_keyword
from app import crud

router = APIRouter(
    prefix="/forums",
    tags=["Forums"]
)


# Veritabanı bağlantısı
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Tüm forum kayıtlarını getir
@router.get("/")
def get_posts():
    return load_posts()


# Anahtar kelime ara
@router.get("/search/{keyword}")
def search(keyword: str):
    return search_keyword(keyword)


# Forumları tara ve bulunan kayıtları veritabanına kaydet
@router.post("/scan/{keyword}")
def scan_keyword(keyword: str, db: Session = Depends(get_db)):

    print(f"SCAN ÇALIŞTI -> {keyword}")

    posts = search_keyword(keyword)

    print(f"Bulunan kayıt sayısı: {len(posts)}")

    crud.create_mentions(db, keyword, posts)

    return {
        "keyword": keyword,
        "mentions_found": len(posts),
        "status": "completed"
    }