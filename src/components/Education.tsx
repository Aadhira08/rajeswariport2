import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { education } from '../data/portfolio';

const gradeColor = (g: string) => {
  if (g.toLowerCase().includes('distinction')) return 'badge-gold';
  if (g.toLowerCase().includes('highly'))      return 'badge-teal';
  if (g.toLowerCase().includes('first'))       return 'badge-navy';
  return 'badge-warm';
};

export default function Education() {
  return (
    <section id="education" className="py-28 section-alt">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          icon={<GraduationCap size={14} />}
          label="Education"
          title="Academic Qualifications"
          subtitle="A strong academic foundation from reputed institutions affiliated with Anna University."
        />

        <div className="relative">
          {/* Rail */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-rail -translate-x-1/2" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -36 : 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className={`relative flex gap-6 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-start`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-5 z-10">
                <div className="w-4 h-4 rounded-full bg-white border-2 border-navy-500 shadow-[0_0_0_4px_rgba(30,77,128,0.12)]" />
              </div>

              {/* Hidden spacer */}
              <div className="hidden md:block flex-1" />

              {/* Card */}
              <div className="flex-1 ml-14 md:ml-0 md:max-w-[calc(50%-32px)]">
                <motion.div
                  whileHover={{ y: -3, boxShadow: '0 8px 32px rgba(30,77,128,0.10)' }}
                  className="bg-white rounded-2xl p-6 border border-cream-300 shadow-card transition-all duration-250"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl icon-navy flex items-center justify-center">
                      <GraduationCap size={17} className="text-white" />
                    </div>
                    <div className="flex items-center gap-1 text-warm-400 text-xs">
                      <Calendar size={11} /> {edu.year}
                    </div>
                  </div>

                  <div className="text-base font-bold text-warm-900 mb-0.5">
                    {edu.degree}
                    {edu.field !== '-' && (
                      <span className="text-navy-500 font-medium text-sm"> — {edu.field}</span>
                    )}
                  </div>
                  <div className="text-warm-700 text-sm mb-0.5">{edu.college}</div>
                  <div className="text-warm-400 text-xs mb-3">{edu.university}</div>

                  <span className={`badge text-xs ${gradeColor(edu.grade)}`}>
                    <Star size={10} /> {edu.grade}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
