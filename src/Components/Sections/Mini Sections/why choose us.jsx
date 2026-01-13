import { Check } from "lucide-react";

export default function Why_Choose_Us() {
  return (
    <>
      {/* WHY CHOOSE US */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          Why Choose Us?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[
            "Accurate and dependable",
            "Quick turnaround",
            "Friendly support",
            "Affordable packages",
            "Peace of mind for your business",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-5  border-gray-400 border-[2px] border-solid bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="p-3 rounded-full border-gray-400 border-[1px] bg-gray-300 text-primary flex items-center justify-center">
                <Check size={20} strokeWidth={3} />
              </div>
              <p className="text-gray-900 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
