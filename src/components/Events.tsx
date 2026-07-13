import { CalendarDays, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { eventsOrganized } from '../data/portfolio';

export default function Events() {
  return (
    <section id="events" className="py-28 section-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          icon={<CalendarDays size={14} />}
          label="Events & Activities"
          title="Events Organized"
          subtitle="Spearheading academic conferences, workshops, and cultural events for holistic student development."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {eventsOrganized.map((ev, i) => (
            <AnimatedCard key={i} className="p-5" delay={i * 0.055}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl icon-navy flex items-center justify-center flex-shrink-0">
                  <Users size={17} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="badge badge-navy text-[11px]">{ev.role}</span>
                    <span className="text-warm-400 text-xs">{ev.year}</span>
                  </div>
                  <p className="text-warm-900 text-sm font-medium leading-snug">{ev.event}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
