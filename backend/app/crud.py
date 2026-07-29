from fastapi import HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from sqlalchemy import func, case

from app import models
from app.ai.risk_analyzer import calculate_risk


# ==========================
# KEYWORDS
# ==========================

def create_keyword(db: Session, keyword: str):

    db_keyword = models.Keyword(keyword=keyword)

    db.add(db_keyword)

    try:

        db.commit()
        db.refresh(db_keyword)

        return db_keyword

    except IntegrityError:

        db.rollback()

        raise HTTPException(
            status_code=400,
            detail="Bu anahtar kelime zaten kayıtlı."
        )


def get_keywords(db: Session):

    return db.query(models.Keyword).all()


# ==========================
# MENTIONS
# ==========================

def create_mention(db: Session, mention_data):

    mention = models.Mention(**mention_data)

    db.add(mention)

    db.commit()

    db.refresh(mention)

    return mention


def get_mentions(db):

    return db.query(models.Mention).all()


def create_mentions(db, keyword, posts):

    saved_mentions = []

    for post in posts:

        mention = models.Mention(

            keyword=keyword,
            forum=post["forum"],
            title=post["title"],
            content=post["content"],
            date=post["date"],

            risk_level=calculate_risk(
                post["title"] + " " + post["content"]
            )

        )

        db.add(mention)

        saved_mentions.append(mention)

    db.commit()

    for mention in saved_mentions:

        db.refresh(mention)

    return saved_mentions


# ==========================
# DASHBOARD
# ==========================

def get_dashboard(db):

    return (

        db.query(

            models.Mention.keyword,

            func.count(models.Mention.id).label("mentions"),

            func.sum(

                case(

                    (models.Mention.risk_level == "CRITICAL", 1),

                    else_=0

                )

            ).label("critical"),

            func.sum(

                case(

                    (models.Mention.risk_level == "HIGH", 1),

                    else_=0

                )

            ).label("high"),

            func.sum(

                case(

                    (models.Mention.risk_level == "LOW", 1),

                    else_=0

                )

            ).label("low")

        )

        .group_by(models.Mention.keyword)

        .all()

    )


# ==========================
# TREND
# ==========================

def get_mention_trend(db):

    trend = (

        db.query(

            models.Mention.date.label("day"),

            func.count(models.Mention.id).label("mentions")

        )

        .group_by(models.Mention.date)

        .order_by(models.Mention.date)

        .all()

    )

    return [

        {

            "day": item.day,

            "mentions": item.mentions

        }

        for item in trend

    ]