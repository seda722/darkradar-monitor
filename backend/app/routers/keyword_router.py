from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud, schemas

router = APIRouter(
    prefix="/keywords",
    tags=["Keywords"]
)


@router.post("/", response_model=schemas.KeywordResponse)
def create_keyword(
    keyword: schemas.KeywordCreate,
    db: Session = Depends(get_db)
):
    return crud.create_keyword(db, keyword.keyword)


@router.get("/", response_model=list[schemas.KeywordResponse])
def get_keywords(db: Session = Depends(get_db)):
    return crud.get_keywords(db)