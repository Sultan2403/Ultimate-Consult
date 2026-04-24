const featureImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBySPNkkf_WhIAyidn_6qxqxjx8cZF6JNDKwDQsMZB5eYWKsoGrgYuJ9h0URP63zeWnX5EhOxY3Irze4BqanzF8bL6pkN78eTb8ors8OLAxHK0QmoNH3lv2BKkkFy8z9g4S30ySppciyxHPiKXTjq_35kzDPqLh4qUq5WahhU7E9sYbV93yvdntIfkc3_ZlAgtr3osrg6QPV3JTxbZKOHy1qbFwuyQgrateRoc5eJGDsBJBgeBnSKtb4i8y7nVE8chs0vyabQXOy7Y";

export default function FeatureBanner() {
  return (
    <section className="bg-slate-100 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto h-[220px] w-full max-w-7xl overflow-hidden rounded-[24px] shadow-xl sm:h-[280px] lg:h-[360px]">
        <div className="relative h-full">
          <img src={featureImage} alt="Financial Planning" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/55 px-8 text-center">
            <div className="max-w-2xl text-white">
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Expertise You Can Bank On</h2>
              <p className="text-sm text-white/85 md:text-base">
                We use the latest financial tools and industry insights to keep your business ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
