import React from 'react';
import portfolioData from '../data/portfolioData';

const Hero = () => {
  const { personal, hero } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6 sm:px-12 md:px-24">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="hero-bg-gradient absolute inset-0 opacity-50"></div>
        <div className="bg-grid absolute inset-0 opacity-20"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* LEFT SIDE - Text Content */}
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start space-y-6 text-left">
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-cyan-400 text-lg md:text-xl font-medium tracking-wide">
                {hero.greeting}
              </span>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-2">
                <span className="gradient-text">{personal.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-2xl font-medium text-slate-400 mt-2">
                {personal.title}
              </h2>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                {hero.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              {personal.resumeFile && (
                <a 
                  href={personal.resumeFile} 
                  download="Amit_Singh_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                >
                  <svg className="w-4 h-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {personal.github && (
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              )}
              {personal.linkedin && (
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              )}
              {personal.email && (
                <a 
                  href={`mailto:${personal.email}`} 
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              )}
            </div>
            
          </div>

          {/* RIGHT SIDE - Image Content */}
          <div className="w-full md:w-2/5 flex justify-center items-center relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* Animated Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative max-w-[320px] md:max-w-[400px] w-full aspect-square animate-float">
              {/* Gradient border container */}
              <div className="absolute inset-[1px] -z-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-slate-800 to-cyan-500 opacity-70 blur-[3px]"></div>
              
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 relative z-10 h-full w-full p-1">
                <img 
                  src={personal.profileImage || "https://via.placeholder.com/400"} 
                  alt={personal.name} 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105 filter brightness-90 hover:brightness-100"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
