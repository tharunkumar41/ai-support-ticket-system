import TicketForm from "../components/TicketForm";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            marginBottom: "10px",
            color: "#212529",
          }}
        >
          AI Support Ticket System
        </h1>

        <p
          style={{
            color: "#6c757d",
            marginBottom: "30px",
          }}
        >
          Submit your support request and our AI will classify it and suggest a response.
        </p>

        <TicketForm />
      </div>
    </div>
  );
}

export default Home;