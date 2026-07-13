import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-28 section-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle
          icon={<Briefcase size={14} />}
          label="Experience"
          title="Professional Journey"
          subtitle="Over 17 years of academic leadership, research, and teaching excellence."
        />

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 timeline-rail" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.52, delay: i * 0.07 }}
              className="relative flex gap-8 mb-7 pl-14"
            >
              {/* Node */}
              <div className={`absolute left-[13px] top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 ${
                i === 0
                  ? 'bg-navy-600 border-navy-500 shadow-[0_0_0_4px_rgba(30,77,128,0.15)]'
                  : 'bg-white border-sand-400'
              }`}>
                {i === 0 && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(30,77,128,0.09)' }}
                className="flex-1 bg-white rounded-2xl p-6 border border-cream-300 shadow-card transition-all duration-250"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-warm-900">{exp.role}</h3>
                    <div className="text-navy-600 text-sm font-medium">Dept. of {exp.dept}</div>
                    <div className="text-warm-500 text-sm mt-0.5">{exp.college}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="flex items-center gap-1.5 text-warm-400 text-xs badge-warm">
                      <Calendar size={10} /> {exp.from} — {exp.to}
                    </div>
                    {i === 0 && (
                      <span className="badge-green badge text-xs">Current Role</span>
                    )}
                  </div>
                </div>

                {exp.highlights.length > 0 && (
                  <ul className="mt-4 space-y-1.5 border-t border-cream-200 pt-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-warm-600">
                        <CheckCircle2 size={14} className="text-teal-600 flex-shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
