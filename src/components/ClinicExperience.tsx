import { motion } from "motion/react";
import { Check } from "lucide-react";

export function ClinicExperience() {
  return (
    <section className="relative h-[600px] lg:h-[800px] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2936&auto=format&fit=crop"
          alt="Premium clinic interior waiting area"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl lg:text-6xl font-serif text-white mb-8">
          Your comfort matters.
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed font-light">
          From the moment you arrive, every detail has been considered to make
          your visit feel calm, welcoming, and effortless.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {["Private treatment rooms", "Comfortable waiting area", "Modern equipment"].map((item, i) => (
            <div key={i} className="flex items-center text-white text-sm sm:text-base font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Check className="w-4 h-4 mr-2" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
