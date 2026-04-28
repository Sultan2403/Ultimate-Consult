import { useEffect, useMemo } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

export default function AdminConsultationDetailsPage() {
  const { consultationId } = useParams();
  const { data, loading, error, getConsultations } = useAdmin();

  useEffect(() => {
    getConsultations();
  }, [getConsultations]);

  const consultation = useMemo(() => {
    if (!data?.customers?.length) {
      return null;
    }

    return data.customers.find((item) => item.id === consultationId) || null;
  }, [consultationId, data]);

  return (
    <main className="min-h-screen bg-[#f7f9fb] px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-3xl space-y-5">
        <Link to="/admin/consultations">
          <Button
            variant="text"
            startIcon={<ArrowLeft className="h-4 w-4" />}
            sx={{ textTransform: "none", color: "#006c49", fontWeight: 600 }}
          >
            Back to consultations
          </Button>
        </Link>

        {loading ? (
          <div className="flex min-h-56 items-center justify-center rounded-xl border border-[#d8dbe2] bg-white">
            <CircularProgress size={28} />
          </div>
        ) : error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : !consultation ? (
          <div className="rounded-xl border border-[#d8dbe2] bg-white px-5 py-8 text-center text-[#5f6168]">
            Consultation not found.
          </div>
        ) : (
          <article className="space-y-5 rounded-xl border border-[#d8dbe2] bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.04)] sm:p-7">
            <header className="space-y-1">
              <h1 className="text-2xl font-semibold text-[#191c1e]">
                {consultation.firstName} {consultation.lastName}
              </h1>
              <p className="text-sm text-[#006c49]">{consultation.businessName}</p>
            </header>

            <dl className="grid gap-4 rounded-lg bg-[#f7f9fb] p-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wide text-[#76777d]">Email</dt>
                <dd className="mt-1 text-sm font-medium text-[#191c1e]">{consultation.email}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[#76777d]">Status</dt>
                <dd className="mt-1 text-sm font-medium text-[#191c1e]">
                  {consultation.consultationStatus || "Pending"}
                </dd>
              </div>
            </dl>

            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#76777d]">
                Consultation message
              </h2>
              <p className="whitespace-pre-wrap text-sm leading-6 text-[#2d2f32]">
                {consultation.message}
              </p>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}
