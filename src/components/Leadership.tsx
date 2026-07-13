import { Star, ShieldCheck } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { leadershipRoles } from '../data/portfolio';

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          icon={<Star size={14} />}
          label="Leadership"
          title="Leadership & Governance"
          subtitle="Steering academic departments, driving accreditations, and shaping institutional excellence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadershipRoles.map((role, i) => (
            <AnimatedCard key={i} className="p-5" delay={i * 0.055}>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl icon-navy flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={15} className="text-white" />
                </div>
                <span className="badge-gold badge text-[11px] leading-tight">{role.year}</span>
              </div>
              <h4 className="text-warm-900 font-semibold text-sm leading-snug mb-2">{role.role}</h4>
              {role.achievement && (
                <p className="text-warm-500 text-xs leading-relaxed">{role.achievement}</p>
              )}
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
