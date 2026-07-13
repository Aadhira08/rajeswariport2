import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { skills } from '../data/portfolio';

const categories = [
  { key: 'technical',  label: 'Technical',  emoji: '⚙️', tagClass: 'tag-navy',  iconClass: 'icon-navy' },
  { key: 'research',   label: 'Research',   emoji: '🔬', tagClass: 'tag-teal',  iconClass: 'icon-teal' },
  { key: 'leadership', label: 'Leadership', emoji: '🎯', tagClass: 'tag-gold',  iconClass: 'icon-gold' },
  { key: 'teaching',   label: 'Teaching',   emoji: '📚', tagClass: 'tag-warm',  iconClass: 'icon-warm' },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-28 section-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          icon={<Zap size={14} />}
          label="Expertise"
          title="Skills & Competencies"
          subtitle="A versatile skill set spanning technical research, academic leadership, and pedagogy."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map(({ key, label, emoji, tagClass, iconClass }, ci) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.09 }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(30,77,128,0.09)' }}
              className="bg-white rounded-2xl p-7 border border-cream-300 shadow-card transition-all duration-250"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${iconClass} flex items-center justify-center text-lg`}>
                  {emoji}
                </div>
                <h3 className="text-base font-bold text-warm-900">{label} Skills</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {(skills[key] as string[]).map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.035 }}
                    className={`badge ${tagClass} text-xs`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
