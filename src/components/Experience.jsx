import React from 'react';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 bg-[#0d0d14] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional internships and training
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-800 timeline-line"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="relative flex flex-col md:flex-row gap-8 md:gap-12 group reveal-stagger"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-900 timeline-dot z-10 mt-1.5 transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-500 shadow-lg group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

                {/* Content Card */}
                <div className="md:ml-16 w-full glass bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-slate-600/50">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-slate-300 font-medium mb-3">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {exp.organization}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block"></span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/30 text-sm text-blue-300 font-medium whitespace-nowrap self-start shadow-inner">
                      <svg className="w-4 h-4 mr-1.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-slate-300 group/item">
                        <svg className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5 group-hover/item:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="tech-badge px-3 py-1 text-xs font-medium rounded-full bg-slate-900/50 border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {exp.certificateUrl && (
                      <a 
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-800/80 border border-slate-600 rounded-lg hover:bg-slate-700 hover:border-blue-500 hover:text-blue-300 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 group/btn"
                      >
                        View Certificate
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
