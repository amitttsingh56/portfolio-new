import React, { useEffect, useRef } from 'react';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-[#0a0a0f] relative" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-500/50 hover:shadow-xl hover:shadow-blue-900/20 group relative overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Subtle gradient top border effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/50 to-cyan-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl" role="img" aria-label={skillGroup.category}>
                  {skillGroup.icon}
                </span>
                <h3 className="text-xl font-semibold text-slate-100">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium text-slate-300 bg-slate-700/50 rounded-full border border-slate-600/50 hover:bg-slate-600 hover:text-white hover:border-slate-400 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
