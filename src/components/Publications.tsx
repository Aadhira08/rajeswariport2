import { motion } from 'framer-motion';
import { BookOpenCheck, ExternalLink, BarChart3 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { sciPublications, publicationStats, ieeeConferences, patents } from '../data/portfolio';

const pubBadge: Record<string, string> = {
  SCI:    'badge-red',
  WOS:    'badge-red',
  Scopus: 'badge-green',
  IEEE:   'badge-navy',
};

export default function Publications() {
  return (
    <section id="publications" className="py-28 section-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          icon={<BookOpenCheck size={14} />}
          label="Publications & Patents"
          title="Research Output"
          subtitle="Contributing to the global knowledge base through rigorous peer-reviewed research."
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {[
            { label: 'Total Journals', value: publicationStats.journals.total, icon: '📄', accent: 'border-t-4 border-t-navy-500' },
            { label: 'SCI Indexed',    value: publicationStats.journals.sci,   icon: '⭐', accent: 'border-t-4 border-t-red-500' },
            { label: 'Scopus Indexed', value: 4,                               icon: '🔬', accent: 'border-t-4 border-t-green-500' },
            { label: 'Conferences',    value: publicationStats.conferences.total, icon: '🎤', accent: 'border-t-4 border-t-gold-500' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(30,77,128,0.10)' }}
              className={`bg-white rounded-2xl p-6 border border-cream-300 shadow-card text-center transition-all duration-250 ${s.accent}`}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="text-4xl font-bold text-gradient-navy">{s.value}</div>
              <div className="text-warm-500 text-sm mt-1.5">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured publications */}
        <h3 className="text-xl font-bold text-warm-900 mb-6 flex items-center gap-2">
          <BarChart3 size={19} className="text-navy-500" /> Featured Publications
        </h3>
        <div className="space-y-4 mb-14">
          {sciPublications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(30,77,128,0.08)' }}
              className="bg-white rounded-2xl p-6 border border-cream-300 shadow-card transition-all duration-250"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className={`badge text-xs ${pubBadge[pub.type] ?? 'badge-warm'}`}>{pub.type}</span>
                <span className="text-warm-400 text-xs">{pub.year}</span>
              </div>
              <p className="text-warm-900 font-semibold leading-snug mb-2 text-sm">{pub.title}</p>
              <p className="text-warm-500 text-xs mb-1.5">{pub.venue}</p>
              {pub.authors && <p className="text-warm-400 text-xs italic">{pub.authors}</p>}
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-navy-600 text-xs mt-2 hover:text-navy-800 transition-colors font-medium"
                >
                  <ExternalLink size={11} /> {pub.doi}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* IEEE Conferences */}
        <h3 className="text-xl font-bold text-warm-900 mb-6 flex items-center gap-2">
          <span className="w-5 h-5 rounded bg-navy-600 text-white text-[10px] font-bold flex items-center justify-center">IE</span>
          IEEE Conference Papers
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {ieeeConferences.map((c, i) => (
            <AnimatedCard key={i} className="p-6" delay={i * 0.09}>
              <span className="badge badge-navy text-xs mb-3 inline-block">IEEE</span>
              <p className="text-warm-900 text-sm font-semibold leading-snug mb-2">{c.title}</p>
              <p className="text-warm-400 text-xs">{c.venue}</p>
            </AnimatedCard>
          ))}
        </div>

        {/* Patents */}
        <h3 className="text-xl font-bold text-warm-900 mb-6">Patents Filed</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {patents.map((p, i) => (
            <AnimatedCard key={i} className="p-6" delay={i * 0.1}>
              <div className="w-10 h-10 rounded-xl icon-gold flex items-center justify-center mb-4">
                <span className="text-lg">💡</span>
              </div>
              <p className="text-warm-900 font-semibold text-sm leading-snug mb-3">{p.title}</p>
              <p className="text-warm-500 text-xs">
                App. No: <span className="text-gold-600 font-mono font-semibold">{p.applicationNo}</span>
              </p>
              <p className="text-warm-400 text-xs mt-0.5">{p.date}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
