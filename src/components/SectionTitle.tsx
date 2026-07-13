import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ icon, label, title, subtitle, light }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="text-center mb-14"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-navy mb-5 text-xs uppercase tracking-widest font-semibold"
      >
        <span className="w-3.5 h-3.5 text-navy-600 flex-shrink-0">{icon}</span>
        {label}
      </motion.div>

      <h2 className={`text-4xl md:text-[2.75rem] font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-warm-900'}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-warm-200' : 'text-warm-600'}`}>
          {subtitle}
        </p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 h-px max-w-[80px] mx-auto rounded-full"
        style={{ background: 'linear-gradient(90deg, #1E4D80, #C8881A)' }}
      />
    </motion.div>
  );
}
