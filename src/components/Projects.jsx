import React, { useEffect, useRef } from 'react';
import portfolioData from '../data/portfolioData';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Projects = () => {
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

  const featuredProjects = portfolioData.projects.filter(p => p.featured);
  const otherProjects = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header */}
        <div className="mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4 inline-block">
            Projects
          </h2>
          <p className="text-slate-400 text-lg font-medium">Things I have built</p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={project.id || index} className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100">
              <div className="card-gradient p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/50 to-cyan-500/50 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500">
                <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-slate-700/50 h-full flex flex-col md:flex-row gap-10">
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-2 block">
                          Featured Project
                        </span>
                        <h3 className="text-3xl font-bold text-slate-100">{project.title}</h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium border border-slate-600">
                          {project.category}
                        </span>
                        <span className="text-slate-400 text-sm">{project.date}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-lg leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                      {project.description}
                    </p>

                    {project.features && project.features.length > 0 && (
                      <div>
                        <h4 className="text-slate-200 font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-slate-400">
                              <span className="text-cyan-400 mr-3 mt-1">▹</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies?.map((tech, i) => (
                        <span key={i} className="tech-badge px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs font-mono border border-indigo-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 shadow-md group/btn"
                        >
                          <GithubIcon />
                          <span>GitHub</span>
                          <span className="text-xs text-indigo-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/40 hover:border-indigo-400 transition-all duration-300 shadow-md group/btn"
                        >
                          <ExternalLinkIcon />
                          <span>Live Demo</span>
                          <span className="text-xs text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={project.id || index} className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200 h-full">
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:-translate-y-2 hover:bg-slate-800/80 transition-all duration-300 h-full flex flex-col group hover:shadow-xl hover:shadow-indigo-900/20 hover:border-slate-600">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-700/30 rounded-lg group-hover:bg-indigo-500/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-indigo-500/40 transition-colors" 
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon />
                          <span>GitHub</span>
                          <span className="text-[10px] text-indigo-400">↗</span>
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/40 hover:border-indigo-300 transition-colors" 
                          aria-label="Live Demo"
                        >
                          <ExternalLinkIcon />
                          <span>Live Demo</span>
                          <span className="text-[10px] text-cyan-400">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    <span className="text-xs text-slate-500">{project.date}</span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies?.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
