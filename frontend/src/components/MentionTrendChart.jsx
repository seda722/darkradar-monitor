import { useEffect, useState } from "react";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

import api from "../services/api";

function MentionTrendChart() {

    const [data, setData] = useState([]);

    useEffect(() => {

        api.get("/dashboard/trend")
            .then((response) => {

                setData(response.data);

            })
            .catch((error) => {

                console.error(error);

            });

    }, []);

    return (

        <div
            style={{
                background: "#1f2937",
                borderRadius: "18px",
                padding: "20px",
                marginTop: "35px",
                boxShadow: "0 10px 25px rgba(0,0,0,.35)"
            }}
        >

            <h2
                style={{
                    color: "white",
                    marginTop: 0,
                    marginBottom: "20px"
                }}
            >
                📈 Mention Trend
            </h2>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <LineChart data={data}>

                    <CartesianGrid
                        stroke="#374151"
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="day"
                        stroke="#cbd5e1"
                    />

                    <YAxis
                        stroke="#cbd5e1"
                    />

                    <Tooltip
                        contentStyle={{
                            background: "#111827",
                            border: "none",
                            color: "white"
                        }}
                    />

                    <Line
                        type="monotone"
                        dataKey="mentions"
                        stroke="#3b82f6"
                        strokeWidth={4}
                        dot={{ r: 6 }}
                        activeDot={{ r: 8 }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default MentionTrendChart;