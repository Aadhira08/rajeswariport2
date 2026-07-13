import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Send } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { personal } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-28 section-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          icon={<Mail size={14} />}
          label="Contact"
          title="Get in Touch"
          subtitle="Open for research collaborations, academic partnerships, and consultations."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              {
                icon: <Mail size={18} className="text-navy-600" />,
                label: 'Email Address',
                values: personal.email,
                href: (v: string) => `mailto:${v}`,
                bg: 'icon-navy',
              },
              {
                icon: <Phone size={18} className="text-teal-600" />,
                label: 'Phone',
                values: personal.phone,
                href: (v: string) => `tel:${v}`,
                bg: 'icon-teal',
              },
              {
                icon: <MapPin size={18} className="text-gold-600" />,
                label: 'Address',
                values: [personal.address],
                href: () => '#',
                bg: 'icon-gold',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(30,77,128,0.08)' }}
                className="bg-white rounded-2xl p-5 border border-cream-300 shadow-card flex gap-4 transition-all duration-250"
              >
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-warm-400 text-xs mb-1.5">{item.label}</div>
                  {item.values.map((v, j) => (
                    <a key={j} href={item.href(v)}
                      className="block text-warm-900 font-medium text-sm hover:text-navy-700 transition-colors leading-relaxed">
                      {v}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Scholar profiles */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="bg-white rounded-2xl p-5 border border-cream-300 shadow-card"
            >
              <h4 className="text-warm-900 font-semibold text-sm mb-4 flex items-center gap-2">
                <ExternalLink size={15} className="text-navy-500" /> Academic Profiles
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { label: 'Google Scholar', id: personal.googleScholarId, url: `https://scholar.google.com/citations?user=${personal.googleScholarId}` },
                  { label: 'ORCID',          id: personal.orcidId,          url: `https://orcid.org/${personal.orcidId}` },
                  { label: 'Scopus ID',      id: personal.scopusId,         url: '#' },
                  { label: 'Vidwan ID',      id: personal.vidwanId,         url: '#' },
                ].map((p, i) => (
                  <a key={i} href={p.url} target="_blank" rel="noreferrer"
                    className="card-inset rounded-xl p-3 border border-cream-300 hover:border-navy-300 transition-colors group"
                  >
                    <div className="text-warm-400 text-[11px]">{p.label}</div>
                    <div className="text-navy-600 font-mono text-xs mt-0.5 truncate group-hover:text-navy-800 font-semibold">
                      {p.id}
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Message form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl p-8 border border-cream-300 shadow-card"
          >
            <h3 className="text-lg font-bold text-warm-900 mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-warm-500 text-xs font-medium mb-1.5 block">Full Name</label>
                  <input type="text" placeholder="Your name" className="input" />
                </div>
                <div>
                  <label className="text-warm-500 text-xs font-medium mb-1.5 block">Email</label>
                  <input type="email" placeholder="your@email.com" className="input" />
                </div>
              </div>
              <div>
                <label className="text-warm-500 text-xs font-medium mb-1.5 block">Subject</label>
                <input type="text" placeholder="Research Collaboration / Inquiry" className="input" />
              </div>
              <div>
                <label className="text-warm-500 text-xs font-medium mb-1.5 block">Message</label>
                <textarea rows={5} placeholder="Your message..." className="input resize-none" />
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 10px 28px rgba(30,77,128,0.28)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 rounded-xl gradient-navy text-white font-semibold flex items-center justify-center gap-2 shadow-navy text-sm transition-all"
              >
                <Send size={15} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
