export default function Home() {
  
  // Replace this with your actual Upwork Profile URL
  const upworkLink = "https://www.upwork.com/freelancers/~0169de29d821388266";

  const projects = [
    // --- ROW 1: The AI Powerhouses ---
    {
      name: "Nexus Studio",
      description: "A premium AI image generation application. Features a custom glassmorphism interface, complex async state management, and seamless integration with the Replicate API and Stable Diffusion XL for high-fidelity synthesis.",
      tags: ["Next.js", "Tailwind CSS", "Replicate API"],
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2", // Takes up 2/3 of the row
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/nexus-studio", 
      live: "https://nexus-studio-delta.vercel.app/"    
    },
    {
      name: "MarketSpark AI",
      description: "An AI marketing engine leveraging Gemini 2.5 Flash. Ingests product features and autonomously generates high-converting LinkedIn posts, X threads, and newsletters.",
      tags: ["Next.js", "Gemini API", "Automation"],
      gridClass: "col-span-1", // Takes up 1/3 of the row
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/MarketSpark-AI",
      live: "https://market-spark-ai-indol.vercel.app/"
    },

    // --- ROW 2: Complex SaaS & CRM ---
    {
      name: "CabinetFlow",
      description: "A comprehensive management SaaS designed to streamline workflows, handle complex data, and boost operational efficiency for large-scale operations.",
      tags: ["SaaS", "Full-Stack", "PostgreSQL"],
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2", 
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/cabinetflow-tunisie",
      live: "https://cabinetflow-tunisie.vercel.app/"
    },
    {
      name: "Mon Tbib",
      description: "A streamlined healthcare CRM connecting patients with doctors. Designed for everyday clinics to make medical appointments and patient management entirely seamless.",
      tags: ["Healthcare Tech", "CRM"],
      gridClass: "col-span-1",
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/mon-tbib",
      live: "https://mon-tbib.vercel.app/"
    },

    // --- ROW 3: Regional Marketplaces ---
    {
      name: "Tunisia Rent",
      description: "A comprehensive real estate marketplace tailored for the Tunisian market. Features advanced filtering for housing, optimized location search, and instant WhatsApp agent routing.",
      tags: ["Next.js", "Supabase", "PostgreSQL"],
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/TunisiaRent", 
      live: "https://tunisia-rent.vercel.app/" 
    },
    {
      name: "Snay3i-tn",
      description: "A professional handyman marketplace. Features custom user dashboards, robust search functionality, and secure Stripe payment integration.",
      tags: ["Next.js", "Prisma", "Stripe"],
      gridClass: "col-span-1", 
      isFeatured: false,
      github: "", 
      live: ""    
    },

    // --- ROW 4: Mobile Apps & Lead Generation (Rhythm Switch: 1 + 2) ---
    {
      name: "TechMend",
      description: "A full-stack lead-generation site for a local tech repair business. Features a custom automated quote system integrated with a secure database and real-time emails.",
      tags: ["Next.js", "Supabase", "Tailwind CSS"],
      gridClass: "col-span-1",
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/techmend", 
      live: "https://techmend.vercel.app/"    
    },
    {
      name: "LoopPilot",
      description: "Mobile fitness route-planning MVP. Helps runners and cyclists generate loop routes, track activities with GPS, review workout history, and export activities as GPX files.",
      tags: ["React Native", "Expo", "TypeScript"],
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/looppilot",
      live: ""
    },

    // --- ROW 5: Front-End E-Commerce Masterclasses ---
    {
      name: "Ulverston Sweets",
      description: "A vintage-themed digital storefront for a traditional local sweet shop. Designed with classic typography and rich, nostalgic styling to showcase their collection.",
      tags: ["Next.js", "Tailwind CSS", "UI/UX"],
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/ulverston-sweets", 
      live: "https://ulverston-sweets.vercel.app/"    
    },
    {
      name: "IronWorks Gym",
      description: "Modern fitness website with responsive UI, clear membership pricing, Stripe checkout flow, a personal training enquiry form, and a location map embed.",
      tags: ["Front-End", "Next.js", "Stripe"],
      gridClass: "col-span-1", 
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/ironworks-gym",
      live: "https://ironworks-gym-gamma.vercel.app/"
    },

    // --- ROW 6: Transit & Retail ---
    {
      name: "WOW Vapes & Snacks",
      description: "A high-energy, dark-mode website for a modern retail store. Features glowing neon accents, responsive product grids, and a sleek layout.",
      tags: ["Next.js", "Tailwind CSS", "Front-End"],
      gridClass: "col-span-1",
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/wow-vape", 
      live: "https://wow-vape.vercel.app/"    
    },
    {
      name: "Covoiturage TN",
      description: "A dedicated ride-sharing application for Tunisia. Helps users find reliable carpooling options, split costs, and reduce their carbon footprint.",
      tags: ["Mobile-Responsive", "Routing"],
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/covoiturage-tn",
      live: "https://covoiturage-tn.vercel.app/"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans p-6 md:p-12 lg:p-24 selection:bg-cyan-500/30">
      
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16 md:mb-24">
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
      <section className="max-w-6xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
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
          className="inline-block bg-white text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
        >
          Start a Project
        </a>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-2xl font-semibold mb-8 text-slate-200 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-cyan-500 rounded-full"></span> Featured Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 transition-all overflow-hidden flex flex-col ${project.gridClass}`}
            >
              
              {/* Background Glow for Featured */}
              {project.isFeatured && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none z-0"></div>
              )}
              
              {/* Standard Card Content (Flex-Col ensures perfect tag alignment) */}
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{project.name}</h3>
                
                {/* flex-grow pushes the tags to the very bottom */}
                <p className="text-slate-400 mb-6 text-sm md:text-base leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* mt-auto locks the tags to the bottom line */}
                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-slate-950 border border-slate-800 text-cyan-400 text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* The "Falling Curtain" Overlay */}
              <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center gap-4 transition-all duration-500 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-20">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2"
                  >
                    View Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-8 rounded-full border border-slate-700 transition-transform hover:scale-105 flex items-center gap-2"
                  >
                    View GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                )}

                {!project.live && !project.github && (
                  <span className="text-slate-400 font-medium px-4 py-2 border border-slate-800 rounded-full bg-slate-900/50">Internal / NDA Project</span>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto text-center pb-20">
        <div className="p-12 border border-slate-800 bg-slate-900/50 rounded-[3rem] backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let&apos;s build something great together.</h2>
          <p className="text-slate-400 mb-10 text-lg">
            I am currently accepting new projects on Upwork. Click the button below to view my profile and start a conversation.
          </p>
          <a 
            href={upworkLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95"
          >
            Hire Me on Upwork
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </a>
        </div>
      </section>

    </main>
  );
}