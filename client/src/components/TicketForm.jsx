import { useState } from "react";
import api from "../api/axios";

function TicketForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ced4da",
    borderRadius: "8px",
    fontSize: "15px",
    boxSizing: "border-box",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/tickets", formData);

      setSuccess(res.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccess("");
      }, 3000);

    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ fontWeight: "600" }}>Name</label>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label style={{ fontWeight: "600" }}>Email</label>

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label style={{ fontWeight: "600" }}>Message</label>

      <textarea
        name="message"
        placeholder="Describe your issue..."
        rows="6"
        value={formData.message}
        onChange={handleChange}
        style={{
          ...inputStyle,
          resize: "vertical",
        }}
        required
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.8 : 1,
        }}
      >
        {loading ? "Submitting..." : "Submit Ticket"}
      </button>

      {success && (
        <div
          style={{
            marginTop: "20px",
            padding: "12px",
            background: "#d1e7dd",
            color: "#0f5132",
            borderRadius: "8px",
            border: "1px solid #badbcc",
          }}
        >
          ✅ {success}
        </div>
      )}
    </form>
  );
}

export default TicketForm;