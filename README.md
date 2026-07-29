# 🛡️ DarkRadar Monitor

## Cyber Threat Intelligence (CTI) Dashboard

DarkRadar Monitor is a Cyber Threat Intelligence (CTI) dashboard developed as part of a technical assessment.

The application monitors cyber threat mentions collected from forums, evaluates their potential impact using an AI-assisted risk analysis module, calculates an overall Threat Score, and visualizes the results through an interactive React dashboard.

The project demonstrates a modular architecture for collecting, processing, classifying, and presenting cyber threat intelligence data.

---

# 📌 Project Overview

The objective of this project is to build a lightweight Cyber Threat Intelligence (CTI) platform capable of:

- Monitoring cyber threat mentions
- Managing monitored keywords
- Performing AI-assisted risk classification
- Calculating a Threat Score
- Visualizing threat trends
- Providing analysts with meaningful insights through a modern dashboard

The project was developed with scalability, maintainability, and clean architecture principles in mind.

---

# 🚀 Features

- Dashboard with real-time threat statistics
- AI-based Threat Score calculation
- AI-assisted Risk Analysis
- Risk Classification (Critical / High / Low)
- Mention Trend Visualization
- AI Threat Summary
- Keyword Management
- Mention Management
- REST API with FastAPI
- Interactive React Dashboard
- Swagger API Documentation

---

# 🛠 Technologies

## Backend

- Python
- FastAPI
- SQLAlchemy
- SQLite
- Uvicorn

## Frontend

- React
- Vite
- Axios
- Recharts

## AI / NLP

- Rule-based Risk Analyzer
- Threat Score Calculation
- Keyword Detection

---

# 🏗️ System Architecture

```text
               Forum Mentions
                      │
                      ▼
             FastAPI REST API
                      │
                      ▼
              Data Processing
                      │
                      ▼
            AI Risk Analyzer
                      │
                      ▼
            Threat Score Engine
                      │
                      ▼
             React Dashboard
```

---

# 📂 Project Structure

```text
darkradar-monitor/
│
├── backend/
│   ├── app/
│   │   ├── ai/
│   │   ├── routers/
│   │   ├── services/
│   │   ├── models.py
│   │   ├── crud.py
│   │   ├── database.py
│   │   └── main.py
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/seda722/darkradar-monitor.git

cd darkradar-monitor
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend

```
http://127.0.0.1:8000
```

Swagger UI

```
http://127.0.0.1:8000/docs
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend

```
http://localhost:5173
```

---

# 📊 Dashboard Modules

The dashboard consists of several monitoring components:

- Threat Score Card
- Mention Statistics
- Risk Distribution Chart
- Mention Trend Visualization
- Latest Mentions Table
- AI Threat Summary

---

# 📡 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /dashboard | Dashboard statistics |
| GET | /dashboard/trend | Mention trend analysis |
| GET | /mentions | Retrieve all mentions |
| POST | /mentions | Create a new mention |
| GET | /keywords | Retrieve keywords |
| POST | /keywords | Create a new keyword |

---

# 🤖 AI Module

The application includes a lightweight AI-assisted threat analysis engine.

Each collected mention is evaluated according to predefined cyber security indicators and classified into one of three risk categories:

- 🔴 Critical
- 🟠 High
- 🟢 Low

These classifications are used to calculate the overall Threat Score displayed on the dashboard.

---

# 🎯 Project Purpose

This project demonstrates how cyber threat intelligence data can be:

- Collected
- Normalized
- Processed
- Classified
- Visualized

through a modern full-stack application using React and FastAPI.

The primary focus is software architecture, API development, dashboard visualization, and AI-assisted threat classification.

---

# 📷 Dashboard Preview

The dashboard includes:

- Threat Score
- Risk Distribution
- Mention Trend
- AI Threat Summary
- Latest Mentions

> Dashboard screenshots can be added here.

---

# 🔮 Future Improvements

Possible future enhancements include:

- Elasticsearch Integration
- PostgreSQL Support
- Docker Deployment
- Authentication & Authorization
- Real-time WebSocket Monitoring
- Advanced NLP Models
- Automatic Anomaly Detection
- Email Notifications
- Slack Integration
- Dark Web Monitoring

---

# 👩‍💻 Developer

**Seda Yaman**

Computer Programming Student

GitHub

https://github.com/seda722

---

# 📄 License

This project was developed for educational purposes as part of a technical assessment and portfolio project.
