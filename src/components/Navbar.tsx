import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar({ onBook }: { onBook: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Treatments", href: "#treatments" },
    { label: "About", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Patient Stories", href: "#testimonials" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/80 backdrop-blur-md py-4 border-black/5"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex-1">
            <a href="#" className="text-2xl font-serif tracking-tight text-primary">
              The Clinic.
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex flex-1 justify-end">
            <button
              onClick={onBook}
              className="bg-primary text-background px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-primary p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-primary"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBook();
              }}
              className="mt-4 bg-primary text-background px-8 py-4 rounded-full text-lg font-medium"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
}
