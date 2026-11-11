import Image from "next/image";
import Link from "next/link";
import { clinicProject, jibliProject, projectButton } from "@/lib/projects";

const projects = [
  { ...jibliProject, cover: jibliProject.screenshots.home, coverLabel: "Jibli / Quote & order prototype", eyebrow: "From product links to an agreed quote", scope: "French-language prototype. Saved quotes and customer/admin workflows; payments and delivery are simulated.", imageBackground: "bg-[#f0ecfc]" },
  { ...clinicProject, cover: clinicProject.screenshots.inbox, coverLabel: "Staff inbox / Live project", eyebrow: "From first enquiry to follow-up", scope: "Portfolio demonstration. Fictional data only; no clinical records or appointment booking.", imageBackground: "bg-[#eaf2ed]" },
];

export function FeaturedProject() {
  return <section id="projects" aria-labelledby="projects-title" className="mx-auto mb-24 max-w-7xl scroll-mt-8">
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <h2 id="projects-title" className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">Selected work<span className="text-blue-700">.</span></h2>
      <span className="border-4 border-black bg-yellow-400 px-3 py-2 text-sm font-black uppercase">02 / Full-stack projects</span>
    </div>
    <div className="grid gap-10 sm:gap-12">{projects.map((project,index) => <article key={project.path} className="border-8 border-black bg-white shadow-[12px_12px_0_0_#000]">
      <div className="grid min-w-0 lg:grid-cols-[1.15fr_1fr]">
        <Link href={project.path} aria-label={`Read the ${project.title} case study`} className={"group relative flex min-w-0 items-center border-b-8 border-black p-4 sm:p-7 lg:border-r-8 lg:border-b-0 " + project.imageBackground}>
          <div className="w-full border-4 border-black bg-white shadow-[6px_6px_0_0_#000] transition-transform group-hover:-translate-y-1">
            <div className="flex items-center gap-1.5 border-b-4 border-black bg-yellow-400 px-3 py-2" aria-hidden="true"><span className="h-2 w-2 shrink-0 bg-black"/><span className="h-2 w-2 shrink-0 bg-black"/><span className="h-2 w-2 shrink-0 bg-black"/><span className="ml-auto text-right text-[10px] font-black uppercase sm:text-xs">{project.coverLabel}</span></div>
            <div className="relative aspect-[4/3] overflow-hidden"><Image src={project.cover.src} alt={project.cover.alt} fill sizes="(max-width: 1023px) 90vw, 55vw" className="object-cover object-top" /></div>
          </div>
        </Link>
        <div className="min-w-0 p-6 sm:p-9">
          <p className="mb-4 text-sm font-black uppercase tracking-widest text-blue-700">{String(index+1).padStart(2,"0")} / {project.eyebrow}</p>
          <h3 className="mb-5 text-3xl leading-none font-black uppercase tracking-tighter sm:text-4xl">{project.title}</h3>
          <p className="mb-6 text-base leading-relaxed font-bold">{project.summary}</p>
          <ul aria-label="Project technologies" className="mb-7 flex flex-wrap gap-2">{project.stack.map(item => <li key={item} className="border-2 border-black bg-[#e5e5e5] px-2 py-1 text-xs font-bold">{item}</li>)}</ul>
          <div className="flex flex-wrap gap-4">
            <Link href={project.path} className={projectButton + " bg-yellow-400 hover:bg-white"}>Read case study →</Link>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={projectButton + " bg-white hover:bg-yellow-400"}>Live demo ↗</a>
          </div>
          <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-bold underline decoration-2 underline-offset-4 hover:text-blue-700">View source on GitHub ↗</a>
          <p className="mt-6 border-t-2 border-black pt-4 text-xs leading-relaxed font-bold">{project.scope}</p>
        </div>
      </div>
    </article>)}</div>
  </section>;
}
