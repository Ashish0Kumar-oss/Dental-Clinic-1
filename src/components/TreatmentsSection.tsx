import { motion } from "motion/react";
import { ArrowRight, Sparkles, Activity, ShieldCheck, HeartPulse, Stethoscope, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const treatments = [
  {
    title: "General Dentistry",
    description: "Cleanings, examinations, preventative care.",
    icon: ShieldCheck,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Smile design, whitening, veneers.",
    icon: Sparkles,
  },
  {
    title: "Restorative Dentistry",
    description: "Crowns, bridges, fillings.",
    icon: Activity,
  },
  {
    title: "Dental Implants",
    description: "Natural-looking replacement teeth.",
    icon: HeartPulse,
  },
  {
    title: "Invisalign",
    description: "Modern clear aligner treatment.",
    icon: Stethoscope,
  },
  {
    title: "Emergency Dentistry",
    description: "Prompt care when you need it.",
    icon: Clock,
  },
];

export function TreatmentsSection() {
  return (
    <section id="treatments" className="py-24 bg-secondary-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">
            Complete care for every smile.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From preventative care to advanced cosmetic and restorative treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group bg-background rounded-3xl p-8 transition-all duration-300",
                  "hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5",
                  "border border-transparent hover:border-accent/20"
                )}
              >
                <div className="w-12 h-12 rounded-full bg-secondary-bg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">
                  {treatment.title}
                </h3>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  {treatment.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
