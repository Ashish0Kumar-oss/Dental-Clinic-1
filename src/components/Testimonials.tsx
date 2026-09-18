import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The entire experience felt completely different from any dental visit I'd had before. Everything was explained clearly and the team made me feel genuinely comfortable.",
    name: "Sarah M.",
    treatment: "Smile Design",
  },
  {
    quote: "I've always been anxious about the dentist, but from the moment I walked in, I felt at ease. The technology they use makes everything so much faster and less stressful.",
    name: "Michael T.",
    treatment: "General Care",
  },
  {
    quote: "Incredible attention to detail. The results of my Invisalign treatment exceeded my expectations. I can't stop smiling.",
    name: "Elena R.",
    treatment: "Invisalign",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary-bg/30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">
            Trusted by our patients.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 lg:p-10 rounded-[2rem] border border-black/5 flex flex-col h-full"
            >
              <div className="flex text-highlight mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-primary leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-serif text-lg text-primary">{testimonial.name}</p>
                <p className="text-sm text-text-secondary">{testimonial.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
