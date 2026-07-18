import { useEffect, useState } from "react";
import api from "../api/axios";
import TicketCard from "../components/TicketCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { FaUserShield, FaSignOutAlt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

function Dashboard() {
    const [tickets, setTickets] = useState([]);
    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);

    // Pagination
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch tickets whenever filters or page change
    useEffect(() => {
        fetchTickets();
    }, [search, priority, category, page]);

    // Reset to page 1 when filters/search change
    useEffect(() => {
        setPage(1);
    }, [search, priority, category]);

    const fetchTickets = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const res = await api.get("/admin/tickets", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    search,
                    priority,
                    category,
                    page,
                    limit: 10,
                },
            });

            setTickets(res.data.data);
            setTotalPages(res.data.totalPages);

        } catch (error) {
            console.error(error);
            alert("Failed to fetch tickets");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div
            style={{
                padding: "40px",
                maxWidth: "1000px",
                margin: "auto",
                minHeight: "100vh",
                background: "#f5f7fb",
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "25px",
                }}
            >
                <div>
                    <h1
                        style={{
                            margin: 0,
                            color: "#212529",
                            fontSize: "36px",
                            fontWeight: "700",
                        }}
                    >
                        🛡 Admin Dashboard
                    </h1>

                    <p
                        style={{
                            marginTop: "8px",
                            color: "#6c757d",
                            fontSize: "16px",
                        }}
                    >
                        Manage and review customer support tickets.
                    </p>
                </div>

                <button
                    onClick={logout}
                    style={{
                        background: "#dc3545",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "15px",
                    }}
                >
                    <FaSignOutAlt style={{ marginRight: 6 }} />
                    Logout
                </button>
            </div>

            {/* Search */}
            <SearchBar search={search} setSearch={setSearch} />

            {/* Filters */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "10px",
                    color: "#495057",
                    fontWeight: "600",
                }}
            >
                <FaFilter />
                <span>Filters</span>
            </div>
            <FilterBar
                priority={priority}
                setPriority={setPriority}
                category={category}
                setCategory={setCategory}
            />

            {/* Ticket Count */}
            <h3
                style={{
                    marginBottom: "20px",
                    color: "#495057",
                    fontWeight: "600",
                }}
            >
                {tickets.length} Ticket{tickets.length !== 1 ? "s" : ""} Found
            </h3>

            {/* Tickets */}
            {loading ? (
                <div
                    style={{
                        textAlign: "center",
                        padding: "60px",
                    }}
                >
                    <FaSpinner
                        className="spinner"
                        size={40}
                        color="#0d6efd"
                    />

                    <p
                        style={{
                            marginTop: "15px",
                            color: "#6c757d",
                        }}
                    >
                        Loading tickets...
                    </p>
                </div>
            ) : tickets.length === 0 ? (
                <div
                    style={{
                        padding: "40px",
                        background: "#fff",
                        borderRadius: "10px",
                        textAlign: "center",
                        color: "#6c757d",
                    }}
                >
                    No tickets found.
                </div>
            ) : (
                tickets.map((ticket) => (
                    <TicketCard key={ticket._id} ticket={ticket} />
                ))
            )}
            <>
            
                {/* Pagination */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        marginTop: "30px",
                    }}
                >
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        style={{
                            padding: "10px 18px",
                            background: page === 1 ? "#adb5bd" : "#0d6efd",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            cursor: page === 1 ? "not-allowed" : "pointer",
                        }}
                    >
                        ← Previous
                    </button>

                    <span
                        style={{
                            fontWeight: "600",
                            color: "#495057",
                        }}
                    >
                        Page {page} of {totalPages}
                    </span>

                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages || totalPages === 0}
                        style={{
                            padding: "10px 18px",
                            background:
                                page === totalPages || totalPages === 0
                                    ? "#adb5bd"
                                    : "#0d6efd",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            cursor:
                                page === totalPages || totalPages === 0
                                    ? "not-allowed"
                                    : "pointer",
                        }}
                    >
                        Next →
                    </button>
                </div>
            </>
        </div>
    );
}

export default Dashboard;