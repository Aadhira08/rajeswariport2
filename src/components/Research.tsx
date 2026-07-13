import { motion } from 'framer-motion';
import { FlaskConical, BookOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { researchAreas, subjectsHandled } from '../data/portfolio';

export default function Research() {
  return (
    <section id="research" className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          icon={<FlaskConical size={14} />}
          label="Research & Teaching"
          title="Areas of Expertise"
          subtitle="Bridging theoretical research with practical engineering education."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Research interests */}
          <AnimatedCard className="p-7" delay={0}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl icon-navy flex items-center justify-center">
                <FlaskConical size={17} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-warm-900">Research Interests</h3>
            </div>
            <div className="grid gap-2.5">
              {researchAreas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl card-inset hover:border-navy-200 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-navy-500 flex-shrink-0" />
                  <span className="text-warm-800 text-sm font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>

          {/* Subjects */}
          <div className="space-y-6">
            <AnimatedCard className="p-7" delay={0.1}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl icon-teal flex items-center justify-center">
                  <BookOpen size={17} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-warm-900">PG Subjects Handled</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {subjectsHandled.pg.map((s, i) => (
                  <span key={i} className="badge tag-teal text-xs">{s}</span>
                ))}
              </div>
            </AnimatedCard>

            <AnimatedCard className="p-7" delay={0.2}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl icon-navy flex items-center justify-center">
                  <BookOpen size={17} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-warm-900">UG Subjects Handled</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {subjectsHandled.ug.map((s, i) => (
                  <span key={i} className="badge tag-navy text-xs">{s}</span>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
