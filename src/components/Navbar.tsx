import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Education',    href: '#education' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Research',     href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Awards',       href: '#awards' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-cream-300 shadow-[0_1px_16px_rgba(15,27,45,0.07)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.a href="#hero" className="flex items-center gap-2.5" whileHover={{ scale: 1.03 }}>
            <div className="w-9 h-9 rounded-xl icon-navy flex items-center justify-center shadow-navy">
              <GraduationCap size={17} className="text-white" />
            </div>
            <span className="font-bold text-warm-900 text-[1.05rem] tracking-tight">
              Dr. <span className="text-gradient-navy">Rajeswari</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  whileHover={{ scale: 1.04 }}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    active === link.href
                      ? 'text-navy-600 bg-navy-50'
                      : 'text-warm-700 hover:text-navy-700 hover:bg-cream-200'
                  }`}
                >
                  {link.label}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(30,77,128,0.28)' }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-navy text-white text-sm font-semibold shadow-navy transition-all"
          >
            Get in Touch
          </motion.a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg border border-cream-300 bg-white text-warm-700"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white border-b border-cream-300 shadow-card p-5 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-warm-800 hover:text-navy-700 hover:bg-cream-100 font-medium text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
