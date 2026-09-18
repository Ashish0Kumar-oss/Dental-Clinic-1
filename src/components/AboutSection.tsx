import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-[2rem] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2940&auto=format&fit=crop"
            alt="Dentist and patient smiling"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-xs font-semibold tracking-widest uppercase mb-6 text-accent">
            The Clinic
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-8 leading-tight">
            Dentistry designed <br /> around you.
          </h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            We believe exceptional dentistry should feel personal, comfortable,
            and uncomplicated. Our clinic combines modern technology with
            thoughtful clinical care to create an experience that puts patients
            first.
          </p>
          <a
            href="#team"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group"
          >
            Learn About Our Clinic
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-16 pt-8 border-t border-black/10">
            <p className="font-serif text-2xl text-primary italic">
              Dr. Sarah Mitchell
            </p>
            <p className="text-sm text-text-secondary uppercase tracking-widest mt-2">
              Lead Clinician
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
