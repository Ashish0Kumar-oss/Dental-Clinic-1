import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FeaturedTreatment() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs font-semibold tracking-widest uppercase mb-6 text-accent">
            Smile Design
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-8 leading-tight">
            A more confident smile, <br /> designed naturally.
          </h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            Using advanced digital analysis and an artistic approach, we create
            smiles that perfectly complement your facial features. Every smile
            design is unique, focusing on natural aesthetics and lasting health.
          </p>

          <ul className="space-y-4 mb-12">
            {[
              "Personalized planning",
              "Digital smile analysis",
              "Natural-looking results",
              "Conservative approach",
            ].map((feature, i) => (
              <li key={i} className="flex items-center text-primary font-medium">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4"></span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href="#treatments"
            className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-all hover:-translate-y-1"
          >
            Explore Smile Design
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-[2rem] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1534608176107-b67f671733b3?q=80&w=2944&auto=format&fit=crop"
            alt="Smile design process"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
