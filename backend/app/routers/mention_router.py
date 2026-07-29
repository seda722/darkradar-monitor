from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app import crud, schemas

router = APIRouter(
    prefix="/mentions",
    tags=["Mentions"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/", response_model=list[schemas.MentionResponse])
def get_mentions(db: Session = Depends(get_db)):
    return crud.get_mentions(db)