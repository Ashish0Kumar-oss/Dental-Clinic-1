import { motion } from "motion/react";
import { Users, Scan, MessageCircleHeart, Coffee } from "lucide-react";

const reasons = [
  {
    title: "Experienced Clinicians",
    description: "Experienced professionals focused on evidence-based treatment.",
    icon: Users,
  },
  {
    title: "Advanced Technology",
    description: "Digital scanning, imaging, and modern treatment planning.",
    icon: Scan,
  },
  {
    title: "Patient-First Care",
    description: "Clear communication and personalized treatment plans.",
    icon: MessageCircleHeart,
  },
  {
    title: "Calm Environment",
    description: "A welcoming clinic designed to make every visit more comfortable.",
    icon: Coffee,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
            Modern dentistry. <br className="hidden sm:block" />
            <span className="italic text-accent">A more human experience.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary-bg/50 flex items-center justify-center mb-6 text-primary border border-black/5">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-primary mb-3">
                  {reason.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
