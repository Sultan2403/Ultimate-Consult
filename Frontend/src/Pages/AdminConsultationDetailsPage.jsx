import { useEffect } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import {
  ArrowLeft,
  Mail,
  Phone,
  CalendarClock,
  UserRound,
  Building2,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

function formatDate(date) {
  if (!date) return "N/A";
  return new Date(date).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminConsultationDetailsPage() {
  const { consultationId } = useParams();
  const { data: consultation, loading, error, updateConsultationStatus, getOneConsultation } = useAdmin();

  useEffect(() => {
    getOneConsultation(consultationId);
  }, [consultationId]);

  const handleStatusChange = (status)=>{
    if(status === consultation.consultationStatus) return; // no change

    updateConsultationStatus({ consultationId, consultationStatus: status })
  }

  return (
    <main className="min-h-screen relative bg-[#f6f8fc] overflow-hidden">
      {/* FULL-WIDTH BACKGROUND LAYER */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#006c49]/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-[#0ea5e9]/10 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#6366f1]/10 blur-3xl" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative w-full px-4 py-8 sm:px-6 lg:px-10">
        {/* responsive container */}
        <section className="mx-auto w-full max-w-3xl space-y-6">
          {/* BACK */}
          <Link to="/admin/consultations">
            <Button
              variant="text"
              startIcon={<ArrowLeft className="h-4 w-4" />}
              sx={{
                textTransform: "none",
                color: "#006c49",
                fontWeight: 600,
                paddingLeft: 0,
              }}
            >
              Back to list
            </Button>
          </Link>

          {/* STATES */}
          {loading && (
            <div className="flex h-64 items-center justify-center rounded-2xl bg-white shadow-sm border">
              <CircularProgress size={28} />
            </div>
          )}

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {!loading && !error && !consultation && (
            <div className="rounded-2xl border bg-white px-6 py-10 text-center text-[#6b7280] shadow-sm">
              Consultation not found
            </div>
          )}

          {/* MAIN CARD */}
          {consultation && (
            <article className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-[#e6e8ee] overflow-hidden">
              {/* HEADER */}
              <header className="p-6 border-b bg-gradient-to-r from-white to-[#f7f9fb]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  {/* IDENTITY BLOCK */}
                  <div className="space-y-3">
                    {/* NAME */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#9ca3af]">
                        Full Name
                      </p>

                      <h1 className="text-2xl sm:text-3xl font-semibold text-[#111827] flex items-center gap-2">
                        <UserRound className="h-5 w-5 text-[#607084]" />
                        {`${consultation.firstName || ""} ${consultation.lastName || ""}`.trim() ||
                          "Unknown User"}
                      </h1>
                    </div>

                    {/* BUSINESS */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#9ca3af]">
                        Business
                      </p>

                      <p className="text-sm sm:text-base font-medium text-[#374151] flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-[#607084]" />
                        {consultation.businessName || "No business provided"}
                      </p>
                    </div>
                  </div>

                  {/* STATUS */}
                  <div className="flex flex-col sm:items-end gap-2">
                    <p className="text-xs uppercase tracking-widest text-[#9ca3af]">
                      Status
                    </p>

                    <div className="flex gap-2 flex-wrap sm:justify-end">
                      {["Pending", "Completed", "Cancelled"].map((status) => {
                        const isActive =
                          consultation.consultationStatus === status;

                        const color =
                          status === "Completed"
                            ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                            : status === "Cancelled"
                              ? "border-red-200 bg-red-100 text-red-700"
                              : "border-amber-200 bg-amber-100 text-amber-800";

                        return (
                          <button
                            key={status}
                            onClick={() => handleStatusChange(status)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold border transition
            ${isActive ? color : "bg-white text-[#6b7280] border-[#e5e7eb] hover:bg-[#f9fafb]"}`}
                          >
                            {status}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </header>
              {/* CONTACT GRID */}
              <div className="p-6 grid gap-4 sm:grid-cols-2">
                {/* EMAIL CARD */}
                <div className="rounded-xl border bg-[#f9fafb] p-4 shadow-sm hover:shadow-md transition">
                  <p className="text-xs uppercase tracking-wide text-[#6b7280]">
                    Email
                  </p>

                  <a
                    href={`mailto:${consultation.email}`}
                    className="mt-2 flex items-center justify-between rounded-lg bg-white border px-3 py-2 text-sm font-medium text-[#111827] hover:border-[#006c49] hover:text-[#006c49] transition"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#607084]" />
                      {consultation.email || "N/A"}
                    </span>

                    <span className="text-xs text-[#9ca3af]">
                      Send an Email
                    </span>
                  </a>
                </div>

                {/* PHONE CARD */}
                <div className="rounded-xl border bg-[#f9fafb] p-4 shadow-sm hover:shadow-md transition">
                  <p className="text-xs uppercase tracking-wide text-[#6b7280]">
                    Phone
                  </p>

                  {consultation.phoneNumber ? (
                    <a
                      href={`tel:${consultation.phoneNumber}`}
                      className="mt-2 flex items-center justify-between rounded-lg bg-white border px-3 py-2 text-sm font-medium text-[#111827] hover:border-[#006c49] hover:text-[#006c49] transition"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-[#607084]" />
                        {consultation.phoneNumber}
                      </span>

                      <span className="text-xs text-[#9ca3af]">Call</span>
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-[#9ca3af]">Not provided</p>
                  )}
                </div>

                {/* CREATED */}
                <div className="rounded-xl border bg-[#f9fafb] p-4">
                  <p className="text-xs uppercase tracking-wide text-[#6b7280]">
                    Created
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-sm text-[#111827]">
                    <CalendarClock className="h-4 w-4 text-[#607084]" />
                    {formatDate(consultation.createdAt)}
                  </p>
                </div>

                {/* UPDATED */}
                <div className="rounded-xl border bg-[#f9fafb] p-4">
                  <p className="text-xs uppercase tracking-wide text-[#6b7280]">
                    Last Updated
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-sm text-[#111827]">
                    <CalendarClock className="h-4 w-4 text-[#607084]" />
                    {formatDate(consultation.updatedAt)}
                  </p>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="border-t bg-[#f7f9fb] p-6">
                <p className="text-xs uppercase tracking-wide text-[#6b7280]">
                  Message
                </p>

                <div className="mt-3 rounded-xl bg-white border p-4 shadow-sm">
                  <p className="whitespace-pre-wrap text-sm leading-6 text-[#2d2f32]">
                    {consultation.message}
                  </p>
                </div>
              </div>
            </article>
          )}
        </section>
      </div>
    </main>
  );
}
