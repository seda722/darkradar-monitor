# 🛡️ DarkRadar Monitor

## Cyber Threat Intelligence (CTI) Dashboard

DarkRadar Monitor is a Cyber Threat Intelligence (CTI) MVP developed as part of a technical assessment project.

The platform monitors keyword mentions collected from forums, analyzes their risk levels using AI-based classification, calculates an overall Threat Score, and visualizes the results through an interactive React dashboard.

The goal of the project is to provide a simple but scalable architecture for monitoring cyber threat intelligence data and presenting meaningful insights to analysts.

---

# 🚀 Features

- Dashboard with real-time threat statistics
- Threat Score calculation
- AI-based Risk Analysis
- Risk Level Classification (Critical / High / Low)
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

# 📂 Project Structure

```text
darkradar-monitor/
│
├── backend/
│   ├── app/
│   │   ├── ai/
│   │   ├── routers/
│   │   ├── models.py
│   │   ├── crud.py
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── darkradar.db
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙ Installation

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend:

```
http://127.0.0.1:8000
```

Swagger UI:

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

Frontend:

```
http://localhost:5173
```

---

# 📊 Dashboard Modules

- Threat Score
- Mention Statistics
- Risk Distribution Chart
- Mention Trend Chart
- AI Threat Summary
- Latest Mentions Table

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /dashboard | Dashboard statistics |
| GET | /dashboard/trend | Mention trend analysis |
| GET | /mentions | List all mentions |
| POST | /mentions | Create a new mention |
| GET | /keywords | List keywords |
| POST | /keywords | Create a keyword |

---

# 🤖 AI Features

The project includes a lightweight AI-based risk analysis module.

The analyzer evaluates collected forum mentions and classifies them into three different threat levels:

- 🔴 Critical
- 🟠 High
- 🟢 Low

The dashboard calculates an overall Threat Score according to these classifications and presents the results visually.

---

# 🎯 Project Purpose

This project was developed as a Cyber Threat Intelligence (CTI) MVP.

The main objective is to demonstrate how cyber threat mentions collected from different sources can be normalized, analyzed, classified according to risk levels, and presented through a modern dashboard.

The project focuses on software architecture, API design, frontend visualization, and AI-assisted threat classification rather than production-scale data collection.

---

# 📷 Dashboard

The dashboard includes:

- Threat Score Cards
- Risk Distribution Pie Chart
- Mention Trend Graph
- Latest Mention Table
- AI Threat Summary

---

# 🔮 Future Improvements

Possible future enhancements include:

- Real-time monitoring
- Elasticsearch integration
- Advanced NLP models
- Automatic anomaly detection
- User authentication
- Docker support
- PostgreSQL integration
- Dark Web monitoring
- Email / Slack notifications

---

# 👩‍💻 Developer

**Seda Yaman**

Computer Programming Student

GitHub:
https://github.com/seda722

---

# 📄 License

This project was developed for educational purposes as part of a technical assessment and portfolio project.