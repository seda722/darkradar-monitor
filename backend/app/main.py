from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine
from app import models

from app.routers import keyword_router
from app.routers import forum_router
from app.routers import mention_router
from app.routers import dashboard_router

# Veritabanındaki tabloları oluştur
models.Base.metadata.create_all(bind=engine)

# FastAPI uygulaması
app = FastAPI(
    title="DarkRadar Monitor API",
    description="Cyber Threat Intelligence Monitoring Platform",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Router'ları ekle
app.include_router(keyword_router.router)
app.include_router(forum_router.router)
app.include_router(mention_router.router)
app.include_router(dashboard_router.router)
# Ana sayfa
@app.get("/")
def home():
    return {
        "status": "success",
        "message": "DarkRadar API is running 🚀"
    }

