import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";

export function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-background w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="flex justify-between items-center p-6 sm:p-8 border-b border-black/5 shrink-0">
                <h3 id="modal-title" className="text-2xl font-serif text-primary">Book a Consultation</h3>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-secondary-bg flex items-center justify-center text-primary hover:bg-black/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-serif text-primary mb-2">Request Received</h4>
                    <p className="text-text-secondary">
                      Thank you. Our team will contact you shortly to confirm your appointment time.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">First Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Jane" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Last Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Email</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="jane@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Phone</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Treatment Interest</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none">
                        <option value="">Select a treatment (optional)</option>
                        <option value="general">General Checkup & Cleaning</option>
                        <option value="cosmetic">Smile Design / Cosmetic</option>
                        <option value="invisalign">Invisalign</option>
                        <option value="implants">Dental Implants</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-background py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 flex justify-center items-center h-14"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        "Request Appointment"
                      )}
                    </button>
                    <p className="text-xs text-center text-text-secondary mt-4">
                      We'll contact you to confirm the final appointment date and time.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
