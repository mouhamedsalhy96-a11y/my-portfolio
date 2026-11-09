export default function Home() {
  // Replace these two placeholders with your real contact details.
  const email = "mo.dev.hamed@gmail.com";
  const phone = "+44 7576 982999";
  const emailLink = `mailto:${email}`;
  const phoneLink = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <main className="min-h-screen bg-[#e5e5e5] text-black font-mono p-4 md:p-8 lg:p-12 selection:bg-black selection:text-yellow-400">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-16 border-b-8 border-black pb-6 gap-6">
        <div className="text-4xl font-black tracking-tighter uppercase bg-black text-white px-4 py-2 shadow-[8px_8px_0px_0px_rgba(250,204,21,1)]">
          MOHAMED<br />SALHI
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href={emailLink}
            className="text-xl font-black uppercase bg-white text-black px-6 py-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 hover:bg-yellow-400 transition-all"
          >
            EMAIL ME ↗
          </a>
          <a
            href={phoneLink}
            className="text-xl font-black uppercase bg-yellow-400 text-black px-6 py-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 hover:bg-white transition-all"
          >
            CALL ME ↗
          </a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto mb-24 border-8 border-black bg-blue-600 text-white p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 min-w-0">
          <div className="inline-block px-4 py-2 mb-8 bg-yellow-400 border-4 border-black text-black text-lg font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            [ STOREFRONT OPEN ]
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
            APP<br />MARKETPLACE.
          </h1>

          <p className="text-xl md:text-2xl text-black bg-white border-4 border-black p-6 max-w-3xl leading-snug mb-8 font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            &gt; CUSTOM WEB APPLICATIONS, FULL-STACK DEVELOPMENT, AND AI INTEGRATIONS.
          </p>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-black text-yellow-400 border-4 border-white p-6 font-black text-2xl uppercase transform rotate-3 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            STATUS: AVAILABLE
            <br /><br />
            SPECIALTY: FULL-STACK & AI
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-yellow-400 border-4 border-black text-black font-black uppercase px-8 py-6 text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 hover:bg-white transition-all transform -rotate-1"
          >
            DISCUSS YOUR PROJECT ➔
          </a>
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto text-center pb-24">
        <div className="p-6 sm:p-10 md:p-20 border-8 border-black bg-red-500 shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
          <div className="bg-black text-white px-6 py-2 text-xl font-black uppercase mb-8 border-4 border-white -rotate-2">
            GET IN TOUCH
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-black uppercase tracking-tighter bg-white inline-block border-4 border-black px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
            LET&apos;S BUILD IT.
          </h2>
          <p className="text-white bg-black border-4 border-black p-6 mb-12 text-lg md:text-xl font-bold max-w-2xl mx-auto uppercase">
            Have a project in mind? Email me or give me a call to discuss your idea.
          </p>
          <div className="grid w-full min-w-0 gap-6">
            <a
              href={emailLink}
              className="min-w-0 bg-yellow-400 text-black font-black py-5 px-4 sm:px-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 hover:bg-white transition-all"
            >
              <span className="block text-xl uppercase mb-2">EMAIL ME ↗</span>
              <span className="block break-all text-sm sm:text-lg">{email}</span>
            </a>
            <a
              href={phoneLink}
              className="min-w-0 bg-white text-black font-black py-5 px-4 sm:px-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 hover:bg-yellow-400 transition-all"
            >
              <span className="block text-xl uppercase mb-2">CALL ME ↗</span>
              <span className="block break-words text-sm sm:text-lg">{phone}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
