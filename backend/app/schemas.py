from pydantic import BaseModel


class KeywordCreate(BaseModel):
    keyword: str


class KeywordResponse(BaseModel):
    id: int
    keyword: str

    model_config = {
        "from_attributes": True
    }




class MentionBase(BaseModel):
    keyword: str
    forum: str
    title: str
    content: str
    date: str
    risk_level: str


class MentionResponse(MentionBase):
    id: int

    class Config:
        from_attributes = True