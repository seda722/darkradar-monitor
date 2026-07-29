function MentionTable({ mentions }) {

    return (

        <div
            style={{
                background: "#1f2937",
                borderRadius: "15px",
                padding: "20px",
                overflowX: "auto"
            }}
        >

            <h2
                style={{
                    color: "white",
                    marginBottom: "20px"
                }}
            >
                📝 Son Mentionlar
            </h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    color: "white"
                }}
            >

                <thead>

                    <tr>

                        <th>Forum</th>

                        <th>Başlık</th>

                        <th>Risk</th>

                        <th>Tarih</th>

                    </tr>

                </thead>

                <tbody>

                    {mentions.map((item, index) => (

                        <tr key={index}>

                            <td
                                style={{
                                    padding: "10px"
                                }}
                            >
                                {item.forum}
                            </td>

                            <td
                                style={{
                                    padding: "10px"
                                }}
                            >
                                {item.title}
                            </td>

                            <td
                                style={{
                                    padding: "10px"
                                }}
                            >

                                <span
                                    style={{
                                        padding: "5px 10px",
                                        borderRadius: "8px",
                                        background:

                                            item.risk_level === "CRITICAL"

                                                ? "#dc2626"

                                                : item.risk_level === "HIGH"

                                                ? "#f97316"

                                                : "#22c55e",

                                        color: "white"
                                    }}
                                >

                                    {item.risk_level}

                                </span>

                            </td>

                            <td
                                style={{
                                    padding: "10px"
                                }}
                            >
                                {item.date}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default MentionTable;