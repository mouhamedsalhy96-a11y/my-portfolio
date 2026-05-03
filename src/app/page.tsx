export default function Home() {
  
  // Replace this with your actual Upwork Profile URL
  const upworkLink = "https://www.upwork.com/freelancers/~0169de29d821388266";

  // 1. Add your new projects and links here!
  const projects = [
    {
      name: "MarketSpark AI",
      description: "An AI-powered marketing engine leveraging Gemini 2.5 Flash. It ingests product features and autonomously generates high-converting LinkedIn posts, X threads, and email newsletters.",
      tags: ["Next.js", "Gemini 2.5 API", "AI Automation"],
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/MarketSpark-AI", // Replace with real link
      live: "https://market-spark-ai-indol.vercel.app/" // Replace with real link
    },
    {
      name: "CabinetFlow",
      description: "A comprehensive management system designed to streamline workflows, handle complex data, and boost operational efficiency.",
      tags: ["SaaS", "Full-Stack"],
      gridClass: "col-span-1",
      github: "https://github.com/mouhamedsalhy96-a11y/cabinetflow-tunisie",
      live: "https://cabinetflow-tunisie.vercel.app/" // Leave empty if there is no live demo
    },
    {
      name: "Mon Tbib",
      description: "A healthcare platform connecting patients with doctors, making medical appointments and patient management entirely seamless.",
      tags: ["Healthcare Tech"],
      gridClass: "col-span-1",
      github: "https://github.com/mouhamedsalhy96-a11y/mon-tbib",
      live: "https://mon-tbib.vercel.app/"
    },
    {
      name: "Covoiturage TN",
      description: "A dedicated ride-sharing application for Tunisia. Helps users find reliable carpooling options, split costs, and reduce their carbon footprint.",
      tags: ["Mobile-Responsive", "Routing"],
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
      github: "https://github.com/mouhamedsalhy96-a11y/covoiturage-tn",
      live: "https://covoiturage-tn.vercel.app/"
    },
    // ADD NEW PROJECTS BELOW
    {
      name: "IronWorks Gym",
      description: "Modern, dark‑themed fitness website with responsive UI, clear membership pricing (day pass, monthly, annual), Stripe checkout flow, a personal training enquiry form, and a location map embed.",
      tags: ["Tailwind", "Next.js", "Stripe"],
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2", // Adjust span to fit grid
      github: "https://github.com/mouhamedsalhy96-a11y/ironworks-gym",
      live: "https://ironworks-gym-gamma.vercel.app/"
    },
    {
      name: "LoopPilot",
      description: "mobile fitness route-planning and activity-tracking MVP. The app helps runners and cyclists generate loop routes, choose custom distances, save routes, track activities with GPS, review workout history, view statistics, and export completed activities as GPX files.",
      tags: ["React Native", "Expo", "TypeScript"],
      gridClass: "col-span-1",
      github: "https://github.com/mouhamedsalhy96-a11y/looppilot",
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans p-6 md:p-12 lg:p-24 selection:bg-cyan-500/30">
      
      {/* Navbar */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center mb-16 md:mb-24">
        <div className="text-xl font-bold tracking-tight text-white">
          Mohamed <span className="text-cyan-400">Salhi</span>
        </div>
        <a 
          href={upworkLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
        >
          Hire Me on Upwork
        </a>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-medium tracking-wide">
          Available for Work
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Hi, I&apos;m Mohamed. <br className="hidden md:block" />
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">intelligent</span> web apps.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-8">
          Versatile Full-Stack Developer specializing in scalable systems, AI integrations, and high-performance user experiences.
        </p>
        <a 
          href={upworkLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95"
        >
          Start a Project
        </a>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto mb-32">
        <h2 className="text-2xl font-semibold mb-8 text-slate-200 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-cyan-500"></span> Featured Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              // 2. We add "group relative overflow-hidden" here to make the curtain work
              className={`group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 transition-all overflow-hidden ${project.gridClass}`}
            >
              
              {/* Background Glow for Featured */}
              {project.isFeatured && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none z-0"></div>
              )}
              
              {/* Standard Card Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{project.name}</h3>
                <p className="text-slate-400 mb-6 text-sm md:text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-slate-950 border border-slate-800 text-cyan-400 text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. The "Falling Curtain" Overlay */}
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all duration-500 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-20">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2 px-6 rounded-full transition-transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                  >
                    View Live Demo
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-6 rounded-full border border-slate-700 transition-transform hover:scale-105"
                  >
                    View GitHub
                  </a>
                )}

                {/* Fallback if no links are provided */}
                {!project.live && !project.github && (
                  <span className="text-slate-400 font-medium">Internal / NDA Project</span>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto text-center pb-20">
        <div className="p-12 border border-slate-800 bg-slate-900/50 rounded-[3rem] backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let&apos;s build something great together.</h2>
          <p className="text-slate-400 mb-10 text-lg">
            I am currently accepting new projects on Upwork. Click the button below to view my profile and start a conversation.
          </p>
          <a 
            href={upworkLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-cyan-500/20"
          >
            Hire Me on Upwork
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </a>
        </div>
      </section>

    </main>
  );
}