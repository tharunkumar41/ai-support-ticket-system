import "./TicketCard.css";
function TicketCard({ ticket }) {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case "High":
                return "#dc3545";
            case "Medium":
                return "#fd7e14";
            case "Low":
                return "#198754";
            default:
                return "#6c757d";
        }
    };

    return (
        <div
            className="ticket-card"
            style={{
                borderLeft: `6px solid ${getPriorityColor(ticket.priority)}`,
            }}
            style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                borderLeft: `6px solid ${getPriorityColor(ticket.priority)}`,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                }}
            >
                <h2
                    style={{
                        margin: 0,
                        color: "#212529",
                        fontWeight: "700",
                    }}
                >
                    {ticket.name}
                </h2>

                <span
                    className="priority-badge"
                    style={{
                        background: getPriorityColor(ticket.priority),
                        color: "white",
                        padding: "5px 12px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        fontSize: "14px",
                    }}
                >
                    {ticket.priority}
                </span>
            </div>

            <p>
                <strong>📧 Email:</strong> {ticket.email}
            </p>

            <p>
                <strong>📂 Category:</strong> {ticket.category}
            </p>

            <p>
                <strong>💬 Message:</strong>
            </p>

            <div
                style={{
                    background: "#f8f9fa",
                    padding: "12px",
                    borderRadius: "8px",
                }}
            >
                {ticket.message}
            </div>

            <p style={{ marginTop: "15px" }}>
                <strong>🤖 AI Suggested Reply:</strong>
            </p>

            <div
                style={{
                    background: "#eef6ff",
                    padding: "12px",
                    borderRadius: "8px",
                }}
            >
                {ticket.suggestedReply}
            </div>

            <div
                style={{
                    marginTop: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <span>
                    <strong>AI Status:</strong>{" "}
                    {ticket.aiStatus === "SUCCESS" ? "✅ Success" : "❌ Failed"}
                </span>

                <small>
                    {new Date(ticket.createdAt).toLocaleString()}
                </small>
            </div>
        </div>
    );
}

export default TicketCard;