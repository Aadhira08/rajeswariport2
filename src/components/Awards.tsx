import { motion } from 'framer-motion';
import { Trophy, Gift, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { awards, grants, affiliations } from '../data/portfolio';

export default function Awards() {
  return (
    <section id="awards" className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          icon={<Trophy size={14} />}
          label="Honours"
          title="Awards & Recognition"
          subtitle="Acknowledgements of academic excellence and contributions to research and teaching."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Awards */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-bold text-warm-900 mb-5 flex items-center gap-2">
              <Trophy size={17} className="text-gold-600" /> Awards
            </h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <AnimatedCard key={i} className="p-5" delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl icon-gold flex items-center justify-center flex-shrink-0 text-xl">🏆</div>
                    <div>
                      <h4 className="text-warm-900 font-semibold text-sm mb-1">{award.title}</h4>
                      <p className="text-warm-500 text-xs leading-relaxed">{award.org}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Grants */}
          <div>
            <h3 className="text-base font-bold text-warm-900 mb-5 flex items-center gap-2">
              <Gift size={17} className="text-teal-600" /> Research Grants
            </h3>
            {grants.map((grant, i) => (
              <AnimatedCard key={i} className="p-5" delay={0.3}>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl icon-teal flex items-center justify-center flex-shrink-0 text-xl">💰</div>
                  <div>
                    <h4 className="text-warm-900 font-semibold text-sm mb-1">{grant.title}</h4>
                    <p className="text-warm-600 text-xs font-medium">{grant.org}</p>
                    <p className="text-warm-400 text-xs mt-1">{grant.purpose}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Memberships */}
          <div>
            <h3 className="text-base font-bold text-warm-900 mb-5 flex items-center gap-2">
              <Users size={17} className="text-navy-600" /> Professional Memberships
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {affiliations.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(30,77,128,0.08)' }}
                  className="bg-white rounded-xl p-4 border border-cream-300 shadow-card text-center transition-all"
                >
                  <div className="text-navy-700 font-bold text-base">{m.body}</div>
                  <div className="text-warm-500 text-xs">{m.designation}</div>
                  {m.membershipNo !== '-' && (
                    <div className="text-warm-300 text-[10px] font-mono mt-0.5 truncate">{m.membershipNo}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
