import React, { useEffect, useRef } from 'react';
import portfolioData from '../data/portfolioData';

const Education = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="education" className="py-20 bg-[#0d0d14] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Education
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Academic background</p>
        </div>

        <div 
          ref={sectionRef}
          className="transition-all duration-1000 ease-out opacity-0 translate-y-10 flex justify-center"
        >
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="card-gradient rounded-2xl p-1 w-full max-w-3xl">
              <div className="bg-slate-800 rounded-2xl p-6 md:p-10 h-full backdrop-blur-sm bg-opacity-90 flex flex-col relative overflow-hidden group">
                
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl" role="img" aria-label="graduation cap">🎓</span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                    </div>
                    <h4 className="text-xl text-indigo-400 font-medium ml-11">
                      {edu.field}
                    </h4>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end z-10">
                    <span className="inline-block bg-slate-700/50 text-slate-300 py-1 px-3 rounded-full text-sm font-medium border border-slate-600 mb-2">
                      {edu.duration}
                    </span>
                    <span className="text-slate-300 font-semibold bg-indigo-500/20 text-indigo-300 py-1 px-3 rounded-lg border border-indigo-500/30">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                </div>

                <div className="mb-8 z-10 ml-0 md:ml-11">
                  <h5 className="text-lg text-slate-200 font-semibold mb-1 flex items-center gap-2">
                    <span role="img" aria-label="institution">🏛️</span> {edu.institution}
                  </h5>
                </div>

                <div className="mt-auto z-10">
                  <h6 className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-3">Relevant Coursework</h6>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span 
                        key={i} 
                        className="bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 text-sm py-1.5 px-3 rounded-md transition-colors duration-200 border border-slate-600/50"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
