function AISummary({ threatScore, mentions, critical, high, low }) {

    let level = "LOW";
    let color = "#22c55e";

    if (threatScore >= 80) {
        level = "CRITICAL";
        color = "#ef4444";
    } else if (threatScore >= 50) {
        level = "HIGH";
        color = "#f97316";
    }

    return (

        <div
            style={{
                background: "#1f2937",
                borderRadius: "18px",
                padding: "25px",
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
                🤖 AI Threat Summary
            </h2>

            <div
                style={{
                    display: "inline-block",
                    background: color,
                    color: "white",
                    padding: "8px 18px",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    marginBottom: "20px"
                }}
            >
                {level}
            </div>

            <div
                style={{
                    color: "#d1d5db",
                    lineHeight: "30px",
                    fontSize: "16px"
                }}
            >

                <p>
                    • Toplam <b>{mentions}</b> mention tespit edildi.
                </p>

                <p>
                    • <b>{critical}</b> kritik,
                    <b> {high}</b> yüksek,
                    <b> {low}</b> düşük riskli kayıt bulundu.
                </p>

                <p>
                    • Hesaplanan Threat Score:
                    <b style={{ color }}>
                        {" "}{threatScore}
                    </b>
                </p>

                <p>
                    • AI değerlendirmesine göre bu anahtar kelime için
                    tehdit seviyesi <b>{level}</b> olarak değerlendirildi.
                </p>

            </div>

            <hr
                style={{
                    border: "1px solid #374151",
                    margin: "25px 0"
                }}
            />

            <h3
                style={{
                    color: "white"
                }}
            >
                📌 Öneriler
            </h3>

            <ul
                style={{
                    color: "#d1d5db",
                    lineHeight: "30px",
                    paddingLeft: "20px"
                }}
            >
                <li>Çok faktörlü kimlik doğrulamayı (MFA) etkinleştirin.</li>
                <li>Parolaları düzenli olarak güncelleyin.</li>
                <li>Dark Web ve forum takibini artırın.</li>
                <li>Kritik mentionlar için SOC ekibini bilgilendirin.</li>
            </ul>

        </div>

    );

}

export default AISummary;