import { useEffect, useState } from "react";
import api from "../services/api";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import RiskChart from "../components/RiskChart";
import MentionTable from "../components/MentionTable";
import MentionTrendChart from "../components/MentionTrendChart";
import AISummary from "../components/AISummary";

function Dashboard() {

    const [dashboard, setDashboard] = useState([]);
    const [mentions, setMentions] = useState([]);

    useEffect(() => {
        loadDashboard();
        loadMentions();
    }, []);

    const loadDashboard = async () => {
        try {
            const response = await api.get("/dashboard/");
            setDashboard(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadMentions = async () => {
        try {
            const response = await api.get("/mentions/");
            setMentions(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    if (dashboard.length === 0) {
        return (
            <div
                style={{
                    background: "#111827",
                    color: "white",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "28px"
                }}
            >
                DarkRadar yükleniyor...
            </div>
        );
    }

    const stats = dashboard[0];

    return (
        <div
            style={{
                display: "flex",
                background: "#111827",
                minHeight: "100vh"
            }}
        >

            <Sidebar />

            <div
                style={{
                    flex: 1,
                    padding: "35px"
                }}
            >

                <h1
                    style={{
                        color: "white",
                        marginBottom: "35px"
                    }}
                >
                    🛡 DarkRadar Dashboard
                </h1>

                {/* İstatistik Kartları */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, minmax(180px,1fr))",
                        gap: "20px",
                        marginBottom: "30px"
                    }}
                >

                    <StatCard
                        title="Threat Score"
                        value={stats.threat_score}
                        color="#ef4444"
                    />

                    <StatCard
                        title="Mentions"
                        value={stats.mentions}
                        color="#3b82f6"
                    />

                    <StatCard
                        title="Critical"
                        value={stats.critical}
                        color="#dc2626"
                    />

                    <StatCard
                        title="High"
                        value={stats.high}
                        color="#f97316"
                    />

                    <StatCard
                        title="Low"
                        value={stats.low}
                        color="#22c55e"
                    />

                </div>

                {/* Risk Chart + Mention Table */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "380px 1fr",
                        gap: "25px",
                        marginBottom: "30px",
                        alignItems: "start"
                    }}
                >

                    <RiskChart
                        critical={stats.critical}
                        high={stats.high}
                        low={stats.low}
                    />

                    <MentionTable
                        mentions={mentions}
                    />

                </div>

                {/* Trend */}

                <div
                    style={{
                        marginBottom: "30px"
                    }}
                >

                    <MentionTrendChart />

                </div>

                {/* AI Summary */}

                <AISummary
                    threatScore={stats.threat_score}
                    mentions={stats.mentions}
                    critical={stats.critical}
                    high={stats.high}
                    low={stats.low}
                />

            </div>

        </div>
    );

}

export default Dashboard;