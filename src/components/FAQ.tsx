import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What should I expect during my first visit?",
    answer: "Your first visit involves a comprehensive examination, digital scanning, and a thorough discussion of your dental health goals. We take the time to understand your needs and create a personalized plan."
  },
  {
    question: "Do you accept new patients?",
    answer: "Yes, we are currently welcoming new patients. You can easily schedule your initial consultation through our website or by calling the clinic directly."
  },
  {
    question: "How much does a consultation cost?",
    answer: "We offer a complimentary initial consultation for new patients to discuss cosmetic or complex restorative treatments. Standard checkups have transparent pricing we can provide over the phone."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we believe premium care should be accessible. We offer flexible, interest-free payment plans for comprehensive treatment courses."
  },
  {
    question: "Do you treat children?",
    answer: "Absolutely. We provide gentle, preventative care for patients of all ages in a welcoming environment that helps children feel comfortable."
  },
  {
    question: "Do you offer emergency appointments?",
    answer: "Yes, we keep dedicated time slots available every day for urgent dental needs to ensure you get prompt care when it matters most."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-secondary-bg/30 border-accent/20" : "bg-transparent border-black/5 hover:border-black/10"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-lg text-primary pr-8">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex flex-shrink-0 items-center justify-center transition-colors duration-300",
                    isOpen ? "bg-primary text-background" : "bg-secondary-bg text-primary"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
