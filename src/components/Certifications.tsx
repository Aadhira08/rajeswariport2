import { BookMarked, Globe } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { fdpAttended, onlineCourses } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          icon={<BookMarked size={14} />}
          label="Development"
          title="FDP & Certifications"
          subtitle="Continuous learning through faculty development programs and online certifications."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* FDP */}
          <div>
            <h3 className="text-base font-bold text-warm-900 mb-5 flex items-center gap-2">
              <BookMarked size={17} className="text-teal-600" /> Faculty Development Programs
            </h3>
            <div className="space-y-3">
              {fdpAttended.map((fdp, i) => (
                <AnimatedCard key={i} className="p-4" delay={i * 0.045}>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-warm-900 text-sm font-medium leading-snug">{fdp.title}</p>
                      <p className="text-warm-500 text-xs mt-0.5">{fdp.org}</p>
                      <span className="badge badge-teal text-[10px] mt-1.5 inline-block">{fdp.year}</span>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Online courses */}
          <div>
            <h3 className="text-base font-bold text-warm-900 mb-5 flex items-center gap-2">
              <Globe size={17} className="text-navy-600" /> Online Courses & Certifications
            </h3>
            <div className="space-y-3">
              {onlineCourses.map((course, i) => (
                <AnimatedCard key={i} className="p-4" delay={i * 0.045}>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-navy-500 rounded-full flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-warm-900 text-sm font-medium leading-snug">{course.title}</p>
                      <p className="text-warm-500 text-xs mt-0.5">{course.org}</p>
                      <span className="badge badge-navy text-[10px] mt-1.5 inline-block">{course.year}</span>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
