import { useEffect, useMemo, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import {
  LogOut,
  Search,
  UserRound,
  Mail,
  BriefcaseBusiness,
  Phone,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { clearAuthTokens } from "../Helpers/Auth/tokens";

export default function AdminConsultationsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error, getConsultations } = useAdmin();

  useEffect(() => {
    getConsultations();
  }, []);

  const consultations = useMemo(() => data?.customers || [], [data]);

  const filtered = useMemo(() => {
    if (!searchTerm) return consultations;

    const q = searchTerm.toLowerCase();

    return consultations.filter((c) => {
      const name = `${c.firstName || ""} ${c.lastName || ""}`;
      return (
        name.toLowerCase().includes(q) ||
        c.email?.toLowerCase().includes(q) ||
        c.businessName?.toLowerCase().includes(q) ||
        c.message?.toLowerCase().includes(q)
      );
    });
  }, [consultations, searchTerm]);

  const handleLogout = () => {
    clearAuthTokens();
    navigate("/admin/login");
  };

  return (
    <main className="min-h-screen bg-[#eef2f6] px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-5">
        {/* HEADER */}
        <header className="flex flex-col gap-4 rounded-2xl bg-[#191c1e] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Admin Dashboard
            </p>
            <h1 className="text-2xl font-semibold">Consultations</h1>
            <p className="text-sm text-white/70">View all incoming requests</p>
          </div>

          <Button
            variant="contained"
            onClick={handleLogout}
            startIcon={<LogOut className="h-4 w-4" />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "0.65rem",
              backgroundColor: "#fff",
              color: "#191c1e",
              boxShadow: "none",
              "&:hover": { backgroundColor: "#f2f4f8" },
            }}
          >
            Logout
          </Button>
        </header>

        {/* SEARCH */}
        <div className="rounded-2xl border bg-white p-4">
          <TextField
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, email, business..."
            InputProps={{
              startAdornment: (
                <Search className="mr-2 h-4 w-4 text-[#76777d]" />
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.75rem",
                backgroundColor: "#f8fafc",
              },
            }}
          />
        </div>

        {/* ERROR */}
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* LOADING */}
        {loading ? (
          <div className="flex min-h-48 items-center justify-center rounded-2xl border bg-white">
            <CircularProgress size={26} />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((c) => {
              return (
                <article
                  key={c.id}
                  className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
                >
                  {/* STATUS + ID */}
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold
          ${
            c.consultationStatus === "Completed"
              ? "bg-green-100 text-green-700"
              : c.consultationStatus === "Cancelled"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
          }`}
                    >
                      {c.consultationStatus || "Pending"}
                    </span>

                    <span className="text-xs text-[#9ca3af]">
                      ID: {c.id?.slice(-6)}
                    </span>
                  </div>

                  {/* NAME + BUSINESS */}
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-[#191c1e] leading-tight flex items-center gap-2">
                      <UserRound className="h-5 w-5 text-[#607084]" />
                      {c.firstName || c.lastName
                        ? `${c.firstName || ""} ${c.lastName || ""}`.trim()
                        : "Unknown User"}
                    </h2>

                    <p className="mt-1 text-sm text-[#6b7280] flex items-center gap-2">
                      <BriefcaseBusiness className="h-4 w-4 text-[#607084]" />
                      {c.businessName || "No business provided"}
                    </p>
                  </div>

                  {/* CONTACT BLOCK */}
                  <div className="mb-4 space-y-2 rounded-xl bg-[#f8fafc] p-3 text-sm">
                    {/* EMAIL */}
                    <p className="flex items-center gap-2 text-[#28313d]">
                      <Mail className="h-4 w-4 text-[#607084]" />
                      <span className="font-medium text-[#6b7280]">Email:</span>
                      <a
                        href={`mailto:${c.email}`}
                        className="text-[#006c49] font-medium hover:underline"
                      >
                        {c.email || "N/A"}
                      </a>
                    </p>

                    {/* PHONE */}
                    <p className="flex items-center gap-2 text-[#28313d]">
                      <Phone className="h-4 w-4 text-[#607084]" />
                      <span className="font-medium text-[#6b7280]">Phone:</span>

                      {c.phoneNumber ? (
                        <a
                          href={`http://wa.me/${c.phoneNumber}`}
                          className="text-[#006c49] font-medium hover:underline"
                        >
                          {c.phoneNumber}
                        </a>
                      ) : (
                        <span className="text-[#9ca3af]">N/A</span>
                      )}
                    </p>
                  </div>

                  {/* MESSAGE */}
                  <div className="mb-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#9ca3af]">
                      Message preview
                    </p>

                    <p className="text-sm text-[#364152] line-clamp-4 leading-relaxed border-l-2 border-[#e5e7eb] pl-3">
                      {c.message || "No message provided"}
                    </p>
                  </div>

                  {/* ACTION */}
                  <Link to={`/admin/consultations/${c.id}`}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        borderRadius: "0.65rem",
                        fontWeight: 500,
                        backgroundColor: "#006c49",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#00553a",
                          boxShadow: "none",
                        },
                      }}
                    >
                      View Full Details
                    </Button>
                  </Link>
                </article>
              );
            })}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed bg-white py-10 text-center text-sm text-[#607084]">
            No consultations found
          </div>
        )}
      </section>
    </main>
  );
}
