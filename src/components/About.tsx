import { User, MapPin, Phone, Mail, BookOpen, FlaskConical } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { personal } from '../data/portfolio';

const highlights = [
  { icon: <BookOpen size={17} />, title: 'Teaching Experience', value: '17+ Years', color: 'text-navy-600', bg: 'icon-navy' },
  { icon: <FlaskConical size={17} />, title: 'Research Domain', value: 'Antenna & WSN', color: 'text-teal-600', bg: 'icon-teal' },
  { icon: <MapPin size={17} />, title: 'Location', value: 'Perambalur, TN', color: 'text-gold-600', bg: 'icon-gold' },
];

export default function About() {
  return (
    <section id="about" className="py-28 section-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          icon={<User size={14} />}
          label="About Me"
          title="Who I Am"
          subtitle="A passionate educator and researcher dedicated to advancing Electronics & Communication Engineering."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bio card */}
          <AnimatedCard className="lg:col-span-2 p-8" delay={0}>
            <h3 className="text-lg font-semibold text-warm-900 mb-5">Professional Summary</h3>
            <p className="text-warm-600 leading-relaxed mb-4">
              Dr. P. Rajeswari is an accomplished academician with over{' '}
              <strong className="text-warm-900 font-semibold">17 years of teaching experience</strong> at
              UG and PG levels. She holds a PhD from{' '}
              <strong className="text-warm-900 font-semibold">Anna University, Chennai</strong> and
              specialises in Microstrip Antenna Analysis, Wireless Sensor Networks, and Mobile Application Development.
            </p>
            <p className="text-warm-600 leading-relaxed mb-4">
              Currently serving as{' '}
              <strong className="text-warm-900 font-semibold">Associate Professor & Head of ECE</strong>{' '}
              at Dhanalakshmi Srinivasan Engineering College (Autonomous), Perambalur — she has been
              instrumental in achieving <strong className="text-warm-900 font-semibold">NBA Re-Accreditation (Tier II)</strong>,
              NAAC A Grade, and establishing a Centre of Excellence in IoT.
            </p>
            <p className="text-warm-600 leading-relaxed">
              With <strong className="text-warm-900 font-semibold">26 journal publications</strong>{' '}
              (including 2 SCI-indexed in Elsevier) and{' '}
              <strong className="text-warm-900 font-semibold">51 conference papers</strong>, her research
              spans antenna design tools to 6G IoT networks and blockchain security.
            </p>

            <div className="mt-7 pt-6 border-t border-cream-300 grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Mail size={15} className="text-navy-500" />, label: personal.email[0] },
                { icon: <Phone size={15} className="text-teal-600" />, label: personal.phone[0] },
                { icon: <MapPin size={15} className="text-gold-600" />, label: 'Perambalur, Tamil Nadu' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-warm-700 text-sm">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedCard>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            {highlights.map((h, i) => (
              <AnimatedCard key={i} delay={0.1 * (i + 1)} className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg ${h.bg} flex items-center justify-center`}>
                    <span className="text-white">{h.icon}</span>
                  </div>
                  <span className="text-warm-500 text-sm">{h.title}</span>
                </div>
                <div className={`text-xl font-bold ${h.color}`}>{h.value}</div>
              </AnimatedCard>
            ))}

            <AnimatedCard delay={0.45} className="p-5">
              <h4 className="text-xs font-semibold text-warm-500 uppercase tracking-widest mb-3">Scholar IDs</h4>
              <div className="space-y-2.5">
                {[
                  { label: 'Scopus', val: personal.scopusId },
                  { label: 'ORCID',  val: personal.orcidId },
                  { label: 'Vidwan', val: personal.vidwanId },
                ].map((id, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-warm-500">{id.label}</span>
                    <span className="text-navy-600 font-mono text-xs bg-cream-100 px-2 py-0.5 rounded-md border border-cream-300">
                      {id.val}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
