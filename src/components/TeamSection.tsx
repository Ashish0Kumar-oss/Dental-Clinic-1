import { motion } from "motion/react";

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Dentist",
    specialty: "Cosmetic & Restorative Dentistry",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Dr. James Chen",
    role: "Specialist Orthodontist",
    specialty: "Invisalign & Clear Aligners",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2864&auto=format&fit=crop",
  },
  {
    name: "Emma Davis",
    role: "Lead Hygienist",
    specialty: "Preventative Care",
    image: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=2815&auto=format&fit=crop",
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">
            Meet the people behind your care.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our team is dedicated to providing exceptional care with a focus on your comfort and long-term health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
              </div>
              <h3 className="text-2xl font-serif text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-text-secondary font-medium mb-1">{member.role}</p>
              <p className="text-sm text-accent uppercase tracking-wider">
                {member.specialty}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
