import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const filters = ["All", "Cosmetic", "Restorative", "Invisalign"];

const gallery = [
  {
    id: 1,
    type: "Cosmetic",
    title: "Smile Design & Veneers",
    before: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2940&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2938&auto=format&fit=crop",
  },
  {
    id: 2,
    type: "Restorative",
    title: "Full Mouth Rehabilitation",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2940&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1534608176107-b67f671733b3?q=80&w=2944&auto=format&fit=crop",
  },
  {
    id: 3,
    type: "Invisalign",
    title: "Clear Aligner Therapy",
    before: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2936&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2864&auto=format&fit=crop",
  }
];

export function BeforeAfterGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGallery = activeFilter === "All" 
    ? gallery 
    : gallery.filter(item => item.type === activeFilter);

  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
              Real transformations. <br />
              <span className="italic text-accent">Thoughtfully achieved.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === filter 
                    ? "bg-primary text-background" 
                    : "bg-secondary-bg text-primary hover:bg-black/5"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6 flex bg-secondary-bg/30 aspect-[4/3]">
                  {/* Using standard images as placeholders since real before/after teeth photos can be jarring. 
                      In production, these would be controlled clinical photos. */}
                  <div className="w-1/2 h-full relative border-r border-white">
                     <img src={item.before} alt="Before" className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-80" />
                     <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Before</div>
                  </div>
                  <div className="w-1/2 h-full relative">
                     <img src={item.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
                     <div className="absolute top-4 right-4 bg-primary/80 text-background backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">After</div>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-primary mb-1">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.type}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
