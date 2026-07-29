import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

const COLORS = [
    "#dc2626",
    "#f97316",
    "#22c55e"
];

function RiskChart({ critical, high, low }) {

    const data = [
        {
            name: "Kritik",
            value: critical
        },
        {
            name: "Yüksek",
            value: high
        },
        {
            name: "Düşük",
            value: low
        }
    ];

    return (

        <div
            style={{
                background: "#1f2937",
                borderRadius: "15px",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >

            <h2
                style={{
                    color: "white"
                }}
            >
                Risk Dağılımı
            </h2>

            <PieChart width={350} height={320}>

                <Pie
                    data={data}
                    dataKey="value"
                    outerRadius={110}
                    label
                >

                    {data.map((entry, index) => (

                        <Cell
                            key={index}
                            fill={COLORS[index]}
                        />

                    ))}

                </Pie>

                <Tooltip />

                <Legend />

            </PieChart>

        </div>

    );

}

export default RiskChart;