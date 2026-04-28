import { useEffect, useMemo, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import { LogOut, Search } from "lucide-react";
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
        String(fieldValue || "").toLowerCase().includes(searchValue),
      );
    });
  }, [consultations, searchTerm]);

  const handleLogout = () => {
    clearAuthTokens();
    navigate("/admin/login");
  };

  const handleStatusUpdate = async (consultationId, consultationStatus) => {
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
    <main className="min-h-screen bg-[#f7f9fb] px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="flex flex-col gap-4 rounded-xl border border-[#d8dbe2] bg-white p-4 shadow-[0_6px_20px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <h1 className="text-2xl font-semibold text-[#191c1e]">Ultimate Consult</h1>
            <p className="text-sm text-[#5f6168]">Consultations</p>
          </div>

          <Button
            variant="outlined"
            onClick={handleLogout}
            startIcon={<LogOut className="h-4 w-4" />}
            sx={{
              borderColor: "#c6c6cd",
              color: "#191c1e",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                borderColor: "#76777d",
                backgroundColor: "#f7f9fb",
              },
            }}
          >
            Logout
          </Button>
        </header>

        <div className="rounded-xl border border-[#d8dbe2] bg-white p-4 sm:p-5">
          <TextField
            fullWidth
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by name, business, email, or message"
            InputProps={{
              startAdornment: <Search className="mr-2 h-4 w-4 text-[#76777d]" />,
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.65rem",
                backgroundColor: "#f7f9fb",
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
          <div className="flex min-h-44 items-center justify-center rounded-xl border border-[#d8dbe2] bg-white">
            <CircularProgress size={26} />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredConsultations.map((consultation) => {
              const fullName = `${consultation.firstName || ""} ${consultation.lastName || ""}`.trim();
              const currentStatus =
                statusOverrides[consultation._id] ||
                consultation.consultationStatus ||
                "Pending";

              return (
                <article
                  className="flex h-full flex-col justify-between rounded-xl border border-[#d8dbe2] bg-white p-4 shadow-[0_3px_15px_rgba(15,23,42,0.03)]"
                  key={consultation._id}
                >
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#191c1e]">{fullName}</h2>
                    <p className="text-sm font-medium text-[#006c49]">{consultation.businessName}</p>
                    <p className="text-sm text-[#5f6168]">{consultation.email}</p>
                    <p className="line-clamp-3 text-sm text-[#45464d]">{consultation.message}</p>
                  </div>

                  <div className="mt-4 space-y-3">
                    <TextField
                      select
                      fullWidth
                      size="small"
                      disabled={updatingStatus}
                      value={currentStatus}
                      onChange={(event) =>
                        handleStatusUpdate(consultation._id, event.target.value)
                      }
                      label="Status"
                    >
                      {consultationStatuses.map((statusOption) => (
                        <MenuItem key={statusOption} value={statusOption}>
                          {statusOption}
                        </MenuItem>
                      ))}
                    </TextField>

                    <Link
                      className="inline-flex items-center text-sm font-semibold text-[#006c49] transition hover:underline"
                      to={`/admin/consultations/${consultation._id}`}
                    >
                      View details →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
