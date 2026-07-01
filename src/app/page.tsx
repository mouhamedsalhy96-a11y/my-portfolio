export default function Home() {
  const upworkLink = "https://www.upwork.com/freelancers/~0169de29d821388266";

  const projects = [
    {
      name: "MedEcho AI",
      description: "A powerful clinical case generator and medical simulation platform. Leverages OpenAI for dynamic cases, ElevenLabs for voice, and automated clinical scoring.",
      tags: ["Python", "Django", "OpenAI"],
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/medecho-ai",
      live: "https://medecho-ai.onrender.com",
      color: "bg-violet-400"
    },
    {
      name: "UI/UX AI Auditor",
      description: "An automated design telemetry platform. Leverages OpenAI Vision to detect UI flaws, featuring an interactive workspace, an AI mentor chat, and client-ready PDF report generation.",
      tags: ["SvelteKit", "OpenAI Vision", "TypeScript"],
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/ui-auditor",
      live: "https://ui-auditor.vercel.app/",
      color: "bg-blue-400"
    },
    {
      name: "MarketSpark AI",
      description: "An AI marketing engine leveraging Gemini 2.5 Flash. Ingests product features and autonomously generates high-converting LinkedIn posts, X threads, and newsletters.",
      tags: ["Next.js", "Gemini API", "Automation"],
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/MarketSpark-AI",
      live: "https://market-spark-ai-indol.vercel.app/",
      color: "bg-green-400"
    },
    {
      name: "Nexus Studio",
      description: "A premium AI image generation application. Features complex async state management and seamless integration with the Replicate API and Stable Diffusion XL.",
      tags: ["Next.js", "Tailwind CSS", "Replicate API"],
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/nexus-studio",
      live: "https://nexus-studio-delta.vercel.app/",
      color: "bg-purple-400"
    },
    {
      name: "Snay3i-tn",
      description: "A professional handyman marketplace. Features custom user dashboards, robust search functionality, and secure Stripe payment integration.",
      tags: ["Next.js", "Prisma", "Stripe"],
      isFeatured: false,
      github: "",
      live: "",
      color: "bg-orange-400"
    },
    {
      name: "CabinetFlow",
      description: "A comprehensive management SaaS designed to streamline workflows, handle complex data, and boost operational efficiency for large-scale operations.",
      tags: ["SaaS", "Full-Stack", "PostgreSQL"],
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/cabinetflow-tunisie",
      live: "https://cabinetflow-tunisie.vercel.app/",
      color: "bg-red-400"
    },
    {
      name: "Mon Tbib",
      description: "A streamlined healthcare CRM connecting patients with doctors. Designed for everyday clinics to make medical appointments and patient management entirely seamless.",
      tags: ["Healthcare Tech", "CRM"],
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/mon-tbib",
      live: "https://mon-tbib.vercel.app/",
      color: "bg-cyan-400"
    },
    {
      name: "Tunisia Rent",
      description: "A comprehensive real estate marketplace tailored for the Tunisian market. Features advanced filtering for housing, optimized location search, and instant WhatsApp agent routing.",
      tags: ["Next.js", "Supabase", "PostgreSQL"],
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/TunisiaRent",
      live: "https://tunisia-rent.vercel.app/",
      color: "bg-yellow-400"
    },
    {
      name: "Covoiturage TN",
      description: "A dedicated ride-sharing application for Tunisia. Helps users find reliable carpooling options, split costs, and reduce their carbon footprint.",
      tags: ["Mobile-Responsive", "Routing"],
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/covoiturage-tn",
      live: "https://covoiturage-tn.vercel.app/",
      color: "bg-pink-400"
    },
    {
      name: "LoopPilot",
      description: "Mobile fitness route-planning MVP. Helps runners and cyclists generate loop routes, track activities with GPS, review workout history, and export activities as GPX files.",
      tags: ["React Native", "Expo", "TypeScript"],
      isFeatured: true,
      github: "https://github.com/mouhamedsalhy96-a11y/looppilot",
      live: "",
      color: "bg-emerald-400"
    },
    {
      name: "TechMend",
      description: "A full-stack lead-generation site for a local tech repair business. Features a custom automated quote system integrated with a secure database and real-time emails.",
      tags: ["Next.js", "Supabase", "Tailwind"],
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/techmend",
      live: "https://techmend.vercel.app/",
      color: "bg-indigo-400"
    },
    {
      name: "Ulverston Sweets",
      description: "A digital storefront for a traditional local sweet shop. Designed to showcase their collection to the local community.",
      tags: ["Next.js", "Tailwind CSS", "UI/UX"],
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/ulverston-sweets",
      live: "https://ulverston-sweets.vercel.app/",
      color: "bg-rose-400"
    },
    {
      name: "IronWorks Gym",
      description: "Modern fitness website with responsive UI, clear membership pricing, Stripe checkout flow, a personal training enquiry form, and a location map embed.",
      tags: ["Front-End", "Next.js", "Stripe"],
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/ironworks-gym",
      live: "https://ironworks-gym-gamma.vercel.app/",
      color: "bg-slate-400"
    },
    {
      name: "WOW Vapes & Snacks",
      description: "A high-energy website for a modern retail store. Features responsive product grids, and a sleek layout.",
      tags: ["Next.js", "Tailwind CSS", "Front-End"],
      isFeatured: false,
      github: "https://github.com/mouhamedsalhy96-a11y/wow-vape",
      live: "https://wow-vape.vercel.app/",
      color: "bg-teal-400"
    }
  ];

  return (
    <main className="min-h-screen bg-[#e5e5e5] text-black font-mono p-4 md:p-8 lg:p-12 selection:bg-black selection:text-yellow-400">
      
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-16 border-b-8 border-black pb-6 gap-6">
        <div className="text-4xl font-black tracking-tighter uppercase bg-black text-white px-4 py-2 shadow-[8px_8px_0px_0px_rgba(250,204,21,1)]">
          MOHAMED<br/>SALHI
        </div>
        <a 
          href={upworkLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xl font-black uppercase bg-white text-black px-6 py-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 hover:bg-yellow-400 transition-all"
        >
          HIRE ME ON UPWORK
        </a>
      </nav>

      <section className="max-w-7xl mx-auto mb-24 border-8 border-black bg-blue-600 text-white p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <div className="inline-block px-4 py-2 mb-8 bg-yellow-400 border-4 border-black text-black text-lg font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            [ STOREFRONT OPEN ]
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
            APP<br/>MARKETPLACE.
          </h1>
          
          <p className="text-xl md:text-2xl text-black bg-white border-4 border-black p-6 max-w-3xl leading-snug mb-8 font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            &gt; BROWSE MY COLLECTION OF INTELLIGENT, SCALABLE WEB APPLICATIONS BUILT FOR HIGH PERFORMANCE.
          </p>
        </div>
        
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-black text-yellow-400 border-4 border-white p-6 font-black text-2xl uppercase transform rotate-3 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            STATUS: AVAILABLE
            <br/><br/>
            SPECIALTY: FULL-STACK & AI
          </div>
          <a 
            href={upworkLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-yellow-400 border-4 border-black text-black font-black uppercase px-8 py-6 text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 hover:bg-white transition-all transform -rotate-1"
          >
            ORDER CUSTOM APP ➔
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-32">
        <div className="flex justify-between items-end border-b-8 border-black pb-4 mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter inline-block">
            PRODUCTS_
          </h2>
          <span className="text-2xl font-black bg-black text-white px-4 py-1">
            {projects.length} ITEMS
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative bg-white border-8 border-black flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group h-full"
            >
              {project.isFeatured && (
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black border-4 border-black font-black px-3 py-1 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12 z-20">
                  BEST SELLER ⭐
                </div>
              )}

              <div className={`h-48 border-b-8 border-black flex items-center justify-center p-6 ${project.color} overflow-hidden relative`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
                <span className="text-3xl font-black uppercase text-center bg-black text-white px-4 py-2 transform -rotate-3 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] z-10">
                  {project.name.split(' ')[0]}
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-white group-hover:bg-gray-100 transition-colors">
                <h3 className="text-2xl font-black mb-3 text-black uppercase">
                  {project.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-black text-white font-bold px-2 py-0.5 uppercase text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-black font-bold mb-8 text-sm leading-snug flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-col gap-3 pt-6 border-t-4 border-black border-dashed">
                  {project.live ? (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-blue-600 text-white font-black uppercase py-3 px-4 border-4 border-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-blue-500 transition-all flex justify-center items-center gap-2"
                    >
                      VIEW LIVE DEMO ↗
                    </a>
                  ) : (
                    <div className="bg-gray-200 text-gray-500 font-black uppercase py-3 px-4 border-4 border-gray-400 text-center line-through cursor-not-allowed">
                      LIVE DEMO OFF-MARKET
                    </div>
                  )}
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white text-black font-black uppercase py-3 px-4 border-4 border-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-yellow-400 transition-all flex justify-center items-center gap-2"
                    >
                      VIEW SOURCE CODE ⎇
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section id="contact" className="max-w-5xl mx-auto text-center pb-24">
        <div className="p-10 md:p-20 border-8 border-black bg-red-500 shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
          <div className="bg-black text-white px-6 py-2 text-xl font-black uppercase mb-8 border-4 border-white -rotate-2">
            CHECKOUT COUNTER
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-black uppercase tracking-tighter bg-white inline-block border-4 border-black px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
            LET&apos;S BUILD IT.
          </h2>
          <p className="text-white bg-black border-4 border-black p-6 mb-12 text-lg md:text-xl font-bold max-w-2xl mx-auto uppercase">
            Ready to add a custom application to your stack? Click below to start the transaction on Upwork.
          </p>
          <a 
            href={upworkLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-yellow-400 text-black font-black uppercase py-6 px-12 text-2xl border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 hover:bg-white transition-all"
          >
            PROCEED TO CHECKOUT ➔
          </a>
        </div>
      </section>
    </main>
  );
}