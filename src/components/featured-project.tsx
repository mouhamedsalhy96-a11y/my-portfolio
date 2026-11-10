import Image from "next/image";
import Link from "next/link";
import { clinicProject as project, projectButton } from "@/lib/projects";

export function FeaturedProject() {
  return <section id="projects" aria-labelledby="projects-title" className="mx-auto mb-24 max-w-7xl scroll-mt-8">
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <h2 id="projects-title" className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">Selected work<span className="text-blue-700">.</span></h2>
      <span className="border-4 border-black bg-yellow-400 px-3 py-2 text-sm font-black uppercase">01 / Full-stack web app</span>
    </div>
    <article className="border-8 border-black bg-white shadow-[12px_12px_0_0_#000]">
      <div className="grid min-w-0 lg:grid-cols-[1.15fr_1fr]">
        <Link href={project.path} aria-label="Read the Clinic Enquiry Tracker case study" className="group relative flex min-w-0 items-center border-b-8 border-black bg-[#eaf2ed] p-4 sm:p-7 lg:border-r-8 lg:border-b-0">
          <div className="w-full border-4 border-black bg-white shadow-[6px_6px_0_0_#000] transition-transform group-hover:-translate-y-1">
            <div className="flex items-center gap-1.5 border-b-4 border-black bg-yellow-400 px-3 py-2" aria-hidden="true"><span className="h-2 w-2 bg-black"/><span className="h-2 w-2 bg-black"/><span className="h-2 w-2 bg-black"/><span className="ml-auto text-[10px] font-black uppercase sm:text-xs">Staff inbox / live project</span></div>
            <Image {...project.screenshots.inbox} alt={project.screenshots.inbox.alt} sizes="(max-width: 1023px) 90vw, 55vw" className="block h-auto w-full" />
          </div>
        </Link>
        <div className="min-w-0 p-6 sm:p-9">
          <p className="mb-4 text-sm font-black uppercase tracking-widest text-blue-700">From first enquiry to follow-up</p>
          <h3 className="mb-5 text-3xl leading-none font-black uppercase tracking-tighter sm:text-4xl">{project.title}</h3>
          <p className="mb-6 text-base leading-relaxed font-bold">{project.summary}</p>
          <ul aria-label="Project technologies" className="mb-7 flex flex-wrap gap-2">{project.stack.map(item => <li key={item} className="border-2 border-black bg-[#e5e5e5] px-2 py-1 text-xs font-bold">{item}</li>)}</ul>
          <div className="flex flex-wrap gap-4">
            <Link href={project.path} className={projectButton + " bg-yellow-400 hover:bg-white"}>Read case study →</Link>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={projectButton + " bg-white hover:bg-yellow-400"}>Live demo ↗</a>
          </div>
          <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-bold underline decoration-2 underline-offset-4 hover:text-blue-700">View source on GitHub ↗</a>
          <p className="mt-6 border-t-2 border-black pt-4 text-xs leading-relaxed font-bold">Portfolio demonstration. Fictional data only; no clinical records or appointment booking.</p>
        </div>
      </div>
    </article>
  </section>;
}
