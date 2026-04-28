import { useEffect, useMemo, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import {
  LogOut,
  Search,
  UserRound,
  Mail,
  BriefcaseBusiness,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { clearAuthTokens } from "../Helpers/Auth/tokens";

const consultationStatuses = ["Pending", "Completed", "Cancelled"];

export default function AdminConsultationsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusOverrides, setStatusOverrides] = useState({});

  const {
    data: consultationsData,
    loading: loadingConsultations,
    error: consultationsError,
    getConsultations,
  } = useAdmin();

  const {
    loading: updatingStatus,
    error: updateStatusError,
    updateConsultationStatus,
  } = useAdmin();

  useEffect(() => {
    getConsultations();
  }, [getConsultations]);

  const consultations = useMemo(
    () => consultationsData?.customers || [],
    [consultationsData],
  );

  const filteredConsultations = useMemo(() => {
    if (!searchTerm) {
      return consultations;
    }

    const searchValue = searchTerm.toLowerCase();

    return consultations.filter((consultation) => {
      const fullName = `${consultation.firstName || ""} ${consultation.lastName || ""}`;

      return [
        fullName,
        consultation.businessName,
        consultation.email,
        consultation.message,
      ].some((fieldValue) =>
        String(fieldValue || "")
          .toLowerCase()
          .includes(searchValue),
      );
    });
  }, [consultations, searchTerm]);

  const handleLogout = () => {
    clearAuthTokens();
    navigate("/admin/login");
  };

  const handleStatusUpdate = async ({ consultationId, consultationStatus }) => {
    try {
      await updateConsultationStatus({ consultationId, consultationStatus });

      setStatusOverrides((prevState) => ({
        ...prevState,
        [consultationId]: consultationStatus,
      }));
    } catch (error) {
      return error;
    }
  };

  return (
    <main className="min-h-screen bg-[#eef2f6] px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-5">
        <header className="flex flex-col gap-4 rounded-2xl bg-[#191c1e] p-5 text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Ultimate Consult
            </p>
            <h1 className="mt-1 text-2xl font-semibold sm:text-[1.8rem]">
              Consultation Requests
            </h1>
            <p className="mt-1 text-sm text-white/75">
              View and manage consultation statuses.
            </p>
          </div>

          <Button
            variant="contained"
            onClick={handleLogout}
            startIcon={<LogOut className="h-4 w-4" />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "0.65rem",
              px: 2,
              py: 1,
              color: "#191c1e",
              backgroundColor: "#ffffff",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#f2f4f8",
                boxShadow: "none",
              },
            }}
          >
            Logout
          </Button>
        </header>

        <div className="rounded-2xl border border-[#d3dbe5] bg-white p-4 shadow-[0_6px_18px_rgba(15,23,42,0.04)] sm:p-5">
          <TextField
            fullWidth
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search consultations"
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

        {consultationsError && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {consultationsError}
          </div>
        )}

        {updateStatusError && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {updateStatusError}
          </div>
        )}

        {loadingConsultations ? (
          <div className="flex min-h-44 items-center justify-center rounded-2xl border border-[#d3dbe5] bg-white">
            <CircularProgress size={26} />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredConsultations.map((consultation) => {
              const fullName =
                `${consultation.firstName || ""} ${consultation.lastName || ""}`.trim();
              const currentStatus =
                statusOverrides[consultation.id] ||
                consultation.consultationStatus ||
                "Pending";

              return (
                <article
                  className="flex h-full flex-col justify-between rounded-2xl border border-[#d3dbe5] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5"
                  key={consultation.id}
                >
                  <div className="space-y-4">
                    <div className="inline-flex rounded-full bg-[#ecfdf5] px-3 py-1 text-xs font-semibold text-[#006c49]">
                      {currentStatus}
                    </div>

                    <div className="space-y-2 rounded-xl bg-[#f8fafc] p-3">
                      <p className="flex items-start gap-2 text-sm text-[#28313d]">
                        <UserRound className="mt-0.5 h-4 w-4 text-[#607084]" />
                        <span>
                          <span className="font-semibold">Name:</span>{" "}
                          {fullName || "N/A"}
                        </span>
                      </p>
                      <p className="flex items-start gap-2 text-sm text-[#28313d]">
                        <Mail className="mt-0.5 h-4 w-4 text-[#607084]" />
                        <span>
                          <span className="font-semibold">Email:</span>{" "}
                          {consultation.email || "N/A"}
                        </span>
                      </p>
                      <p className="flex items-start gap-2 text-sm text-[#28313d]">
                        <BriefcaseBusiness className="mt-0.5 h-4 w-4 text-[#607084]" />
                        <span>
                          <span className="font-semibold">Business:</span>{" "}
                          {consultation.businessName || "N/A"}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#697586]">
                        Message preview
                      </p>
                      <p className="line-clamp-3 text-sm leading-6 text-[#364152]">
                        {consultation.message}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <TextField
                      select
                      fullWidth
                      size="small"
                      disabled={updatingStatus}
                      value={currentStatus}
                      onChange={(event) =>
                        handleStatusUpdate({
                          consultationId: consultation.id,
                          consultationStatus: event.target.value,
                        })
                      }
                      label="Consultation Status"
                    >
                      {consultationStatuses.map((statusOption) => (
                        <MenuItem key={statusOption} value={statusOption}>
                          {statusOption}
                        </MenuItem>
                      ))}
                    </TextField>

                    <Link
                      className="block"
                      to={`/admin/consultations/${consultation.id}`}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          borderRadius: "0.65rem",
                          py: 1.1,
                          fontWeight: 600,
                          backgroundColor: "#006c49",
                          boxShadow: "none",
                          "&:hover": {
                            backgroundColor: "#00553a",
                            boxShadow: "none",
                          },
                        }}
                      >
                        View More Details
                      </Button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {!loadingConsultations && filteredConsultations.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#c4ceda] bg-white px-5 py-10 text-center">
            <p className="text-sm text-[#607084]">
              No consultations match your search.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
