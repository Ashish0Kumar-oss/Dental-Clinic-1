import { motion } from "motion/react";

export function FinalCTA({ onBook }: { onBook: () => void }) {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary-bg/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
            Ready to feel better <br /> about your smile?
          </h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
            Schedule a consultation and discover a more thoughtful approach to dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBook}
              className="bg-primary text-background px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-all hover:-translate-y-1"
            >
              Book a Consultation
            </button>
            <a
              href="tel:+15551234567"
              className="bg-transparent border border-primary text-primary px-8 py-4 rounded-full text-base font-medium hover:bg-black/5 transition-all hover:-translate-y-1 text-center"
            >
              Call the Clinic
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
