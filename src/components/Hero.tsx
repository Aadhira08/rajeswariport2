import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Mail, Award, GraduationCap } from 'lucide-react';
import { stats } from '../data/portfolio';
import { useEffect, useRef, useState } from 'react';

const profilePhoto = '/rajeswarimam.png';

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let val = 0;
        const step = Math.ceil(end / 55);
        const timer = setInterval(() => {
          val += step;
          if (val >= end) { setCount(end); clearInterval(timer); }
          else setCount(val);
        }, 24);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">

      {/* Decorative geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #A3B8DC 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #F0C97A 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06] border border-warm-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08] border border-warm-400" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #57514A 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* ── Text ─────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 badge-navy mb-8 text-xs uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to Research Collaborations
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-[4.25rem] font-bold text-warm-900 leading-[1.1] mb-5"
            >
              Dr. P.{' '}
              <span className="text-gradient-navy">Rajeswari</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mb-6"
            >
              <p className="text-xl md:text-2xl font-semibold text-gradient-gold mb-1">
                Associate Professor & Head — ECE
              </p>
              <p className="text-warm-600 text-base md:text-lg">
                Dhanalakshmi Srinivasan Engineering College (Autonomous), Perambalur
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-warm-600 text-base md:text-lg leading-relaxed max-w-xl mb-10"
            >
              Shaping the future through research, innovation, and education. PhD in ECE
              with expertise in Antenna Design, Wireless Sensor Networks, and Mobile Computing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-14"
            >
              <motion.a
                href="#publications"
                whileHover={{ scale: 1.04, boxShadow: '0 10px 28px rgba(30,77,128,0.28)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-navy text-white text-sm font-semibold shadow-navy transition-all"
              >
                <BookOpen size={16} /> View Publications
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-cream-400 text-warm-800 text-sm font-semibold shadow-card hover:border-navy-300 hover:text-navy-700 transition-all"
              >
                <Mail size={16} /> Contact Me
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gradient-navy">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-warm-500 text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Photo ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="flex-shrink-0 flex flex-col items-center gap-6"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full scale-[1.08]"
                style={{ background: 'conic-gradient(from 0deg, #1E4D80, #C8881A, #0D7377, #1E4D80)', filter: 'blur(12px)', opacity: 0.25 }} />

              {/* Photo frame */}
              <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-[0_12px_48px_rgba(30,77,128,0.18)] border-4 border-white">
                <img
                  src={profilePhoto}
                  alt="Dr. P. Rajeswari"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = 'https://ui-avatars.com/api/?name=Dr+Rajeswari&background=1E4D80&color=ffffff&size=320&bold=true&font-size=0.28';
                  }}
                />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-3 -right-5 bg-white border border-cream-300 shadow-card-md rounded-2xl px-4 py-2.5 text-center"
              >
                <div className="text-xl font-bold text-gradient-navy">17+</div>
                <div className="text-xs text-warm-500 font-medium">Yrs Exp</div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut', delay: 0.4 }}
                className="absolute -bottom-3 -left-5 bg-white border border-cream-300 shadow-card-md rounded-2xl px-4 py-2.5 text-center"
              >
                <div className="text-xl font-bold text-gradient-gold">PhD</div>
                <div className="text-xs text-warm-500 font-medium">Anna Univ.</div>
              </motion.div>
            </div>

            {/* Role badges */}
            <div className="flex gap-2.5 flex-wrap justify-center">
              {[
                { icon: <GraduationCap size={13} />, text: 'Research Supervisor' },
                { icon: <Award size={13} />, text: 'NBA Accreditor' },
              ].map((b, i) => (
                <span key={i} className="badge badge-warm text-xs">
                  {b.icon} {b.text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="text-warm-400 hover:text-navy-600 transition-colors"
          >
            <ArrowDown size={22} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
