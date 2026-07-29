function StatCard({ title, value, color }) {

    return (

        <div
            style={{
                background: "#1f2937",
                color: "white",
                padding: "20px",
                borderRadius: "15px",
                borderLeft: `6px solid ${color}`,
                boxShadow: "0 8px 20px rgba(0,0,0,.35)",
                textAlign: "center",
                transition: ".3s"
            }}
        >

            <h3
                style={{
                    color: "#94a3b8",
                    marginBottom: "15px"
                }}
            >
                {title}
            </h3>

            <h1
                style={{
                    fontSize: "48px",
                    margin: 0
                }}
            >
                {value}
            </h1>

        </div>

    );

}

export default StatCard;