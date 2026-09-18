import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-background py-2 px-4 text-center text-xs sm:text-sm font-sans flex items-center justify-center gap-2">
      <span className="font-medium tracking-wide">New patients welcome · Complimentary consultation available</span>
      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
    </div>
  );
}
