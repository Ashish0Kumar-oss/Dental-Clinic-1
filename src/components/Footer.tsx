export function Footer() {
  return (
    <footer className="bg-primary text-background py-16 lg:py-24 px-6 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        <div className="space-y-6 lg:col-span-1">
          <a href="#" className="text-3xl font-serif tracking-tight text-white inline-block">
            The Clinic.
          </a>
          <p className="text-white/70 max-w-sm leading-relaxed">
            Thoughtful dentistry, delivered with precision and care in a welcoming environment.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-medium text-white mb-6">Navigation</h4>
          <ul className="space-y-4">
            {["Home", "Treatments", "About", "Team", "Patient Stories", "FAQs"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/70 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-white mb-6">Contact</h4>
          <ul className="space-y-4 text-white/70">
            <li>+1 (555) 123-4567</li>
            <li>hello@theclinic.com</li>
            <li>123 Premium Medical Blvd,<br />Suite 400<br />New York, NY 10001</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-white mb-6">Hours</h4>
          <ul className="space-y-4 text-white/70">
            <li className="flex justify-between">
              <span>Monday - Thursday</span>
              <span>8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Friday</span>
              <span>8:00 AM - 4:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Weekend</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
        <p>&copy; {new Date().getFullYear()} The Clinic. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
