from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app import crud
from app.ai.threat_score import calculate_score, calculate_status

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def dashboard(db: Session = Depends(get_db)):

    data = crud.get_dashboard(db)

    result = []

    for item in data:

        score = calculate_score(
            item.critical,
            item.high,
            item.low
        )

        status = calculate_status(score)

        result.append(
            {
                "keyword": item.keyword,
                "mentions": item.mentions,
                "critical": item.critical,
                "high": item.high,
                "low": item.low,
                "threat_score": score,
                "status": status
            }
        )

    return result


@router.get("/trend")
def trend(db: Session = Depends(get_db)):

    data = crud.get_mention_trend(db)

    return data