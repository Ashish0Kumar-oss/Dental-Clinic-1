import { motion } from "motion/react";
import { Check } from "lucide-react";

export function TechnologySection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-background px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs font-semibold tracking-widest uppercase mb-6 text-accent">
            Innovation
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif mb-8 leading-tight">
            Technology that makes <br /> care simpler.
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            We invest in the latest dental technology not just for clinical
            precision, but because it significantly improves your experience. Less
            time in the chair, more comfortable procedures, and better, more
            predictable results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Digital scanning",
              "3D imaging",
              "Digital treatment planning",
              "Modern sterilization",
              "Advanced diagnostic equipment",
              "Laser dentistry",
            ].map((feature, i) => (
              <div key={i} className="flex items-center text-white/90">
                <Check className="w-5 h-5 text-accent mr-3" />
                {feature}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2936&auto=format&fit=crop"
            alt="Modern digital dental equipment"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-background/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-xl font-medium mb-2">Precision Diagnostics</h4>
              <p className="text-sm text-white/70">
                Our 3D imaging systems provide comprehensive views for accurate
                treatment planning with minimal radiation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
