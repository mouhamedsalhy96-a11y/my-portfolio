import ContactForm from "@/components/ContactForm";
export default function Home() {
  
  // THE DATA: When you build a new project, just add it to this list!
  const projects = [
    {
      name: "MarketSpark AI",
      description: "An AI-powered marketing engine leveraging Gemini 2.5 Flash. It ingests product features and autonomously generates high-converting LinkedIn posts, X threads, and email newsletters.",
      tags: ["Next.js", "Gemini 2.5 API", "AI Automation"],
      // We use gridClass to make this card bigger (Bento Box style)
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2 group relative border-slate-800 hover:border-cyan-500/50 overflow-hidden",
      isFeatured: true
    },
    {
      name: "CabinetFlow",
      description: "A comprehensive management system designed to streamline workflows, handle complex data, and boost operational efficiency.",
      tags: ["SaaS", "Full-Stack"],
      gridClass: "col-span-1 border-slate-800 hover:border-slate-600"
    },
    {
      name: "Mon Tbib",
      description: "A healthcare platform connecting patients with doctors, making medical appointments and patient management entirely seamless.",
      tags: ["Healthcare Tech"],
      gridClass: "col-span-1 border-slate-800 hover:border-slate-600"
    },
    {
      name: "Covoiturage TN",
      description: "A dedicated ride-sharing application for Tunisia. Helps users find reliable carpooling options, split costs, and reduce their carbon footprint.",
      tags: ["Mobile-Responsive", "Routing"],
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2 border-slate-800 hover:border-slate-600"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans p-6 md:p-12 lg:p-24 selection:bg-cyan-500/30">
      
      {/* Navbar */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center mb-16 md:mb-24">
        <div className="text-xl font-bold tracking-tight text-white">
          Mohamed <span className="text-cyan-400">Salhi</span>
        </div>
        <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
          Contact Me
        </a>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-medium tracking-wide">
          Available for Work on Upwork
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Hi, I&apos;m Mohamed. <br className="hidden md:block" />
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">intelligent</span> web apps.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
          Versatile Full-Stack Developer specializing in scalable systems, AI integrations, and high-performance user experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-8 text-slate-200 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-cyan-500"></span> Featured Work
        </h2>
        
        {/* The Grid automatically maps over your projects array */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`bg-slate-900 border rounded-3xl p-8 transition-colors ${project.gridClass}`}>
              
              {/* Optional glowing effect for featured projects */}
              {project.isFeatured && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              )}
              
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white relative z-10">{project.name}</h3>
              <p className="text-slate-400 mb-6 relative z-10 text-sm md:text-lg">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-slate-950 border border-slate-800 text-cyan-400 text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section Placeholder */}
      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto text-center pb-20">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to start your project?</h2>
        <p className="text-slate-400 mb-8">Send me a message and let&apos;s discuss how I can help.</p>
        
        {/* We use the new component here */}
        <ContactForm />
        
      </section>

    </main>
  );
}