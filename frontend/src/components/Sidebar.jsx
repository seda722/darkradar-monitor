function Sidebar() {

    const menuItems = [
        {
            icon: "📊",
            title: "Dashboard",
            active: true
        },
        {
            icon: "🔍",
            title: "Keywords"
        },
        {
            icon: "💬",
            title: "Mentions"
        },
        {
            icon: "⚠️",
            title: "Threat Intelligence"
        },
        {
            icon: "🤖",
            title: "AI Summary"
        },
        {
            icon: "📈",
            title: "Reports"
        },
        {
            icon: "⚙️",
            title: "Settings"
        }
    ];

    return (

        <div
            style={{
                width: "260px",
                background: "#0B1220",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRight: "1px solid #1F2937"
            }}
        >

            <div>

                <div
                    style={{
                        padding: "30px 25px",
                        borderBottom: "1px solid #1F2937"
                    }}
                >

                    <h2
                        style={{
                            color: "white",
                            margin: 0,
                            fontSize: "28px"
                        }}
                    >
                        🛡 DarkRadar
                    </h2>

                    <p
                        style={{
                            color: "#94A3B8",
                            marginTop: "8px",
                            fontSize: "14px"
                        }}
                    >
                        Cyber Threat Intelligence
                    </p>

                </div>

                <div
                    style={{
                        padding: "20px"
                    }}
                >

                    {menuItems.map((item, index) => (

                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                padding: "14px 18px",
                                marginBottom: "10px",
                                borderRadius: "12px",
                                background: item.active ? "#1E293B" : "transparent",
                                color: item.active ? "white" : "#CBD5E1",
                                cursor: "pointer",
                                transition: "0.3s"
                            }}
                        >

                            <span
                                style={{
                                    fontSize: "22px"
                                }}
                            >
                                {item.icon}
                            </span>

                            <span
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "500"
                                }}
                            >
                                {item.title}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

            <div
                style={{
                    padding: "25px",
                    borderTop: "1px solid #1F2937"
                }}
            >

                <div
                    style={{
                        background: "#111827",
                        borderRadius: "12px",
                        padding: "18px"
                    }}
                >

                    <h4
                        style={{
                            color: "white",
                            marginTop: 0
                        }}
                    >
                        🚀 DarkRadar v2
                    </h4>

                    <p
                        style={{
                            color: "#94A3B8",
                            fontSize: "13px",
                            lineHeight: "20px",
                            marginBottom: 0
                        }}
                    >
                        AI destekli Cyber Threat Intelligence Platformu
                    </p>

                </div>

            </div>

        </div>

    );

}

export default Sidebar;