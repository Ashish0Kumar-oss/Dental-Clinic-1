export function TrustBar() {
  const stats = [
    { label: "Patient Rating", value: "4.9/5" },
    { label: "Happy Patients", value: "500+" },
    { label: "Years Experience", value: "10+" },
    { label: "Modern Digital Dentistry", value: "Certified" },
    { label: "Appointments", value: "Same-week" },
  ];

  return (
    <section className="py-12 bg-secondary-bg/50 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-full sm:w-auto sm:flex-1 pt-6 sm:pt-0 first:pt-0"
            >
              <span className="text-3xl font-serif text-primary mb-1">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-text-secondary font-medium text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
