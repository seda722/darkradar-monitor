from sqlalchemy import Column, Integer, String
from app.database import Base


class Keyword(Base):
    __tablename__ = "keywords"

    id = Column(Integer, primary_key=True, index=True)
    keyword = Column(String, unique=True, nullable=False)


class Mention(Base):
    __tablename__ = "mentions"

    id = Column(Integer, primary_key=True, index=True)
    keyword = Column(String, index=True)
    forum = Column(String)
    title = Column(String)
    content = Column(String)
    date = Column(String)
    risk_level = Column(String, default="LOW")