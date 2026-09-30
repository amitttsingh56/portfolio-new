import React, { useEffect, useRef } from 'react';
import portfolioData from '../data/portfolioData';

const Achievements = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.reveal-element');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="achievements" className="py-20 bg-[#0a0a0f] text-slate-300" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 reveal-element opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
            Achievements & Activities
          </h2>
          <p className="text-lg text-slate-400">
            Hackathons, certifications, and community involvement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Hackathons Sub-section */}
          <div className="reveal-element opacity-0 translate-y-10 transition-all duration-700 delay-100 ease-out">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <svg className="w-6 h-6 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Hackathons
            </h3>
            
            <div className="space-y-6">
              {portfolioData.hackathons.map((hackathon, index) => (
                <div 
                  key={index} 
                  className="relative group rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 hover:bg-slate-800 transition-all duration-300 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {hackathon.name}
                        </h4>
                        <p className="text-sm font-medium text-indigo-400 mt-1">
                          {hackathon.type} • {hackathon.organizer}
                        </p>
                      </div>
                      <div className="p-2 bg-slate-900/50 rounded-lg text-yellow-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v1a7 7 0 01-14 0v-1a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 mb-6 line-clamp-3">
                      {hackathon.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {hackathon.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900/50 text-slate-300 border border-slate-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    {hackathon.certificateUrl && (
                      <a 
                        href={hackathon.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                      >
                        View Certificate 
                        <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community & Volunteering Sub-section */}
          <div className="reveal-element opacity-0 translate-y-10 transition-all duration-700 delay-200 ease-out">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Community & Volunteering
            </h3>
            
            <div className="space-y-6">
              {portfolioData.extracurricular.map((activity, index) => (
                <div 
                  key={index}
                  className="rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 p-6 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl">
                        {activity.icon || '🤝'}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-white">
                        {activity.title}
                      </h4>
                      <p className="text-sm font-medium text-blue-400 mb-2">
                        {activity.organization}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
