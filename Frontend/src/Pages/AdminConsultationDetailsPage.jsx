import { useEffect, useMemo } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

export default function AdminConsultationDetailsPage() {
  const { consultationId } = useParams();
  const { data, loading, error, getConsultations } = useAdmin();

  useEffect(() => {
    getConsultations();
  }, []);

  const consultation = useMemo(() => {
    if (!data?.customers?.length) return null;
    return data.customers.find((item) => item.id === consultationId) || null;
  }, [consultationId, data]);

  return (
    <main className="min-h-screen bg-[#f7f9fb] px-4 py-8 sm:px-6 lg:px-10">
      <section className="mx-auto w-full max-w-3xl space-y-6">
        {/* Back */}
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
            Back to consultations
          </Button>
        </Link>

        {/* Loading */}
        {loading && (
          <div className="flex h-64 items-center justify-center rounded-xl bg-white border border-[#c6c6cd] shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <CircularProgress size={28} />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && !consultation && (
          <div className="rounded-xl border border-[#c6c6cd] bg-white px-6 py-10 text-center text-[#76777d] shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            Consultation not found
          </div>
        )}

        {/* CARD */}
        {consultation && (
          <article className="overflow-hidden rounded-xl border border-[#c6c6cd] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            {/* HEADER */}
            <header className="border-b border-[#e6e6ea] bg-gradient-to-r from-white to-[#f7f9fb] p-6">
              <h1 className="text-xl font-semibold text-[#191c1e]">
                {consultation.firstName} {consultation.lastName}
              </h1>

              <p className="mt-1 text-sm font-medium text-[#006c49]">
                {consultation.businessName}
              </p>
            </header>

            {/* INFO */}
            <div className="grid gap-4 p-6 sm:grid-cols-2">
              {/* Email */}
              <div className="rounded-lg bg-[#f7f9fb] p-4">
                <p className="text-xs uppercase tracking-wide text-[#76777d]">
                  Email
                </p>

                <a
                  href={`mailto:${consultation.email}`}
                  className="mt-2 flex items-center gap-2 text-sm font-medium text-[#191c1e] hover:text-[#006c49]"
                >
                  <Mail className="h-4 w-4 text-[#76777d]" />
                  {consultation.email}
                </a>
              </div>

              {/* Phone */}
              <div className="rounded-lg bg-[#f7f9fb] p-4">
                <p className="text-xs uppercase tracking-wide text-[#76777d]">
                  Phone
                </p>

                {consultation.phoneNumber ? (
                  <a
                    href={`tel:${consultation.phoneNumber}`}
                    className="mt-2 flex items-center gap-2 text-sm font-medium text-[#191c1e] hover:text-[#006c49]"
                  >
                    <Phone className="h-4 w-4 text-[#76777d]" />
                    {consultation.phoneNumber}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-[#76777d]">Not provided</p>
                )}
              </div>

              {/* STATUS */}
              <div className="sm:col-span-2 rounded-lg bg-[#f7f9fb] p-4">
                <p className="text-xs uppercase tracking-wide text-[#76777d]">
                  Status
                </p>

                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    consultation.consultationStatus === "Completed"
                      ? "bg-green-100 text-green-700"
                      : consultation.consultationStatus === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {consultation.consultationStatus || "Pending"}
                </span>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="border-t border-[#e6e6ea] p-6">
              <p className="text-xs uppercase tracking-wide text-[#76777d]">
                Message
              </p>

              <div className="mt-3 rounded-lg bg-[#f7f9fb] p-4">
                <p className="whitespace-pre-wrap text-sm leading-6 text-[#2d2f32]">
                  {consultation.message}
                </p>
              </div>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}
