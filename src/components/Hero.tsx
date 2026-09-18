import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-3 py-1 border border-primary/20 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 text-text-secondary"
          >
            Modern Dentistry · Personal Care
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-6 text-primary"
          >
            Your smile, <br />
            <span className="italic text-accent">thoughtfully</span> transformed.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed"
          >
            Exceptional dental care combining advanced technology, clinical
            expertise, and a calmer approach to every visit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onBook}
              className="bg-primary text-background px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-all hover:-translate-y-1"
            >
              Book a Consultation
            </button>
            <a
              href="#treatments"
              className="bg-secondary-bg text-primary px-8 py-4 rounded-full text-base font-medium hover:bg-secondary-bg/80 transition-all hover:-translate-y-1 text-center"
            >
              Explore Treatments
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[700px] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2940&auto=format&fit=crop"
            alt="Modern dental clinic interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/5"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-8 right-8 sm:right-auto sm:w-72 bg-background/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-highlight">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-primary">4.9/5</span>
            </div>
            <p className="text-sm text-text-secondary font-medium">
              Patient rating based on 500+ reviews
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
