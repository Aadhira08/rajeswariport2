import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { personal } from '../data/portfolio';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Education',    href: '#education' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Awards',       href: '#awards' },
  { label: 'Contact',      href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-300 bg-warm-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <GraduationCap size={17} className="text-cream-200" />
              </div>
              <span className="font-bold text-white text-[1.05rem]">Dr. Rajeswari</span>
            </div>
            <p className="text-warm-400 text-sm leading-relaxed">
              Associate Professor & Head, ECE<br />
              Dhanalakshmi Srinivasan Engineering College<br />
              Perambalur, Tamil Nadu
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-cream-300 font-semibold mb-4 text-xs uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-warm-400 text-sm hover:text-cream-200 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream-300 font-semibold mb-4 text-xs uppercase tracking-widest">Contact</h4>
            <div className="space-y-3">
              <a href={`mailto:${personal.email[0]}`}
                className="flex items-center gap-2 text-warm-400 text-sm hover:text-cream-200 transition-colors">
                <Mail size={13} className="text-cream-400" /> {personal.email[0]}
              </a>
              <a href={`tel:${personal.phone[0]}`}
                className="flex items-center gap-2 text-warm-400 text-sm hover:text-cream-200 transition-colors">
                <Phone size={13} className="text-cream-400" /> {personal.phone[0]}
              </a>
              <div className="flex items-start gap-2 text-warm-400 text-sm">
                <MapPin size={13} className="text-cream-400 flex-shrink-0 mt-0.5" /> Perambalur, Tamil Nadu
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warm-600 text-sm">
            &copy; {year} Dr. P. Rajeswari. All rights reserved.
          </p>
          <p className="text-warm-700 text-xs">Built with precision and passion.</p>
        </div>
      </div>
    </footer>
  );
}
