import React, { useEffect, useRef } from 'react';
import portfolioData from '../data/portfolioData';

const About = () => {
  const { paragraphs, highlights } = portfolioData.about;
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: observer.unobserve(entry.target) if we only want to reveal once
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0d0d14] text-slate-300 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        <div 
          className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0" 
          ref={addToRefs}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-slate-400 font-medium">A bit about my journey</p>
        </div>

        <div 
          className="flex flex-col gap-6 mb-20 max-w-4xl mx-auto reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200 [&.visible]:opacity-100 [&.visible]:translate-y-0" 
          ref={addToRefs}
        >
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-slate-300/90 text-center md:text-left">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className={`card bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-slate-600 transition-all duration-300 relative group overflow-hidden reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="text-4xl mb-6 text-indigo-400/90 group-hover:scale-110 group-hover:text-indigo-400 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-3 tracking-wide">
                {highlight.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
