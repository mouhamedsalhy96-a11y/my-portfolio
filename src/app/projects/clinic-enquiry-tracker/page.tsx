import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicProject as project, projectButton } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Clinic Enquiry Tracker | Mohamed Salhi",
  description: "A clinic enquiry workflow built with Next.js, TypeScript and Supabase: public submissions, staff authentication, status tracking and private notes.",
  alternates: { canonical: "https://my-portfolio-delta-seven-49.vercel.app/projects/clinic-enquiry-tracker" },
  openGraph: {
    title: "Clinic Enquiry Tracker — Mohamed Salhi",
    description: project.summary,
    type: "article",
    images: [{ url: "https://my-portfolio-delta-seven-49.vercel.app" + project.screenshots.inbox.src, width: project.screenshots.inbox.width, height: project.screenshots.inbox.height, alt: project.screenshots.inbox.alt }],
  },
};

const workflow = [
  { number: "01", title: "Receive", description: "A visitor submits an administrative enquiry through a validated form protected by Turnstile and receives a confirmation reference." },
  { number: "02", title: "Review", description: "Authorised staff sign in, search and filter their clinic’s inbox, and open an enquiry to review its contact details and message." },
  { number: "03", title: "Follow up", description: "Staff update the enquiry’s status and add internal notes. Both are saved in Supabase and remain after a refresh." },
];

export default function ClinicEnquiryTrackerPage() {
  return <main className="min-h-screen bg-[#e5e5e5] p-4 font-mono text-black selection:bg-black selection:text-yellow-400 md:p-8 lg:p-12">
    <nav aria-label="Project navigation" className="mx-auto mb-12 flex max-w-7xl flex-wrap items-center justify-between gap-5 border-b-8 border-black pb-6">
      <Link href="/" className="bg-black px-4 py-2 text-xl leading-tight font-black uppercase tracking-tighter text-white shadow-[5px_5px_0_0_#facc15]">Mohamed<br/>Salhi</Link>
      <Link href="/#projects" className="font-black uppercase underline decoration-4 underline-offset-8 hover:text-blue-700">← Back to projects</Link>
    </nav>

    <header className="mx-auto mb-14 max-w-7xl border-8 border-black bg-blue-600 p-6 text-white shadow-[12px_12px_0_0_#000] sm:p-10 lg:p-14">
      <p className="mb-7 inline-block border-4 border-black bg-yellow-400 px-3 py-2 text-sm font-black uppercase text-black">Case study / Full-stack web app</p>
      <h1 className="mb-7 max-w-5xl text-[clamp(2.3rem,6vw,5.7rem)] leading-[.96] font-black uppercase tracking-tighter">Clinic enquiry<br/>tracker.</h1>
      <p className="mb-8 max-w-3xl text-lg leading-relaxed font-bold sm:text-xl">{project.summary}</p>
      <div className="flex flex-wrap gap-4">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={projectButton + " bg-yellow-400 hover:bg-white"}>Explore live demo ↗</a>
        <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className={projectButton + " bg-white hover:bg-yellow-400"}>View GitHub ↗</a>
      </div>
    </header>

    <div className="mx-auto max-w-7xl">
      <aside className="mb-12 border-4 border-black bg-yellow-400 p-5 text-sm leading-relaxed font-bold" aria-label="Project scope">
        <strong className="mb-1 block uppercase">Fictional-data demonstration</strong>
        Built to demonstrate an administrative workflow. It does not provide medical care, store clinical records, send emails, or schedule appointments. Use fictional details when trying the live app.
      </aside>

      <section aria-labelledby="context-title" className="mb-14 grid gap-6 md:grid-cols-2">
        <div className="border-4 border-black bg-white p-6 sm:p-8"><p className="mb-3 text-sm font-black uppercase text-blue-700">The problem</p><h2 id="context-title" className="mb-5 text-2xl font-black uppercase tracking-tight sm:text-3xl">Keep the next step clear.</h2><p className="leading-relaxed">A reception team needs a clear view of incoming administrative requests: what is new, what needs follow-up, and what has been resolved. I built a focused inbox that connects each enquiry to its status and internal notes.</p></div>
        <div className="border-4 border-black bg-black p-6 text-white sm:p-8"><p className="mb-3 text-sm font-black uppercase text-yellow-400">My role</p><h2 className="mb-5 text-2xl font-black uppercase tracking-tight sm:text-3xl">Design, build, verify.</h2><p className="leading-relaxed">I built the interface, database schema, authentication, access policies, and server endpoints, then tested and deployed the app. I used an AI-assisted development workflow and checked the results through automated tests, database checks, and the complete browser workflow.</p></div>
      </section>

      <section aria-labelledby="workflow-title" className="mb-14">
        <h2 id="workflow-title" className="mb-7 text-3xl font-black uppercase tracking-tighter sm:text-4xl">One request. A clear workflow.</h2>
        <ol className="grid gap-5 lg:grid-cols-3">{workflow.map(step => <li key={step.number} className="border-4 border-black bg-white p-6 shadow-[5px_5px_0_0_#000]"><span className="mb-5 inline-block bg-black px-3 py-2 text-xl font-black text-yellow-400">{step.number}</span><h3 className="mb-3 text-2xl font-black uppercase">{step.title}</h3><p className="text-sm leading-relaxed">{step.description}</p></li>)}</ol>
      </section>

      <section aria-labelledby="screens-title" className="mb-14">
        <h2 id="screens-title" className="mb-7 text-3xl font-black uppercase tracking-tighter sm:text-4xl">Inside the app.</h2>
        <figure className="mb-7 border-4 border-black bg-white p-3 shadow-[7px_7px_0_0_#000] sm:p-6">
          <Image {...project.screenshots.inbox} alt={project.screenshots.inbox.alt} sizes="(max-width: 1280px) 95vw, 1200px" className="h-auto w-full" preload />
          <figcaption className="mt-5 border-t-4 border-black pt-4 text-sm leading-relaxed"><strong className="block font-black uppercase">01 / Staff inbox</strong>Search enquiries, filter by category and date, and see each request’s workflow status.</figcaption>
        </figure>
        <div className="grid items-start gap-7 md:grid-cols-[1.3fr_1fr]">
          <figure className="border-4 border-black bg-white p-3 shadow-[7px_7px_0_0_#000] sm:p-6">
            <div className="bg-[#f4f7f5] p-2 sm:p-5"><Image {...project.screenshots.form} alt={project.screenshots.form.alt} sizes="(max-width: 767px) 90vw, 55vw" className="mx-auto h-auto w-full max-w-[570px]" /></div>
            <figcaption className="mt-5 border-t-4 border-black pt-4 text-sm leading-relaxed"><strong className="block font-black uppercase">02 / Public form</strong>Validated contact fields, a fictional-data acknowledgement, and a Turnstile security check before saving.</figcaption>
          </figure>
          <figure className="border-4 border-black bg-white p-3 shadow-[7px_7px_0_0_#000] sm:p-6">
            <div className="bg-[#f4f7f5] p-2 sm:p-5"><Image {...project.screenshots.details} alt={project.screenshots.details.alt} sizes="(max-width: 767px) 90vw, 395px" className="mx-auto h-auto w-full max-w-[395px]" /></div>
            <figcaption className="mt-5 border-t-4 border-black pt-4 text-sm leading-relaxed"><strong className="block font-black uppercase">03 / Enquiry details</strong>A sample enquiry marked In progress, with its saved follow-up note. Internal notes are not sent to the enquirer.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="build-title" className="mb-14 grid gap-6 lg:grid-cols-2">
        <div className="border-4 border-black bg-white p-6 sm:p-8"><h2 id="build-title" className="mb-6 text-2xl font-black uppercase tracking-tight sm:text-3xl">Built around the workflow.</h2>
          <ul className="space-y-5 text-sm leading-relaxed">
            <li><strong className="block font-black">Staff access</strong>Supabase Auth identifies the user. Server checks and database row-level security restrict records to their assigned clinic.</li>
            <li><strong className="block font-black">Reliable submissions</strong>Server validation, Turnstile checks, and database limits protect the submission path. A request reference prevents duplicate records when a save is retried.</li>
            <li><strong className="block font-black">Private follow-up</strong>Note authorship comes from the signed-in account. Public confirmations return a reference rather than exposing staff records.</li>
          </ul>
        </div>
        <div className="border-4 border-black bg-yellow-400 p-6 sm:p-8"><h2 className="mb-6 text-2xl font-black uppercase tracking-tight sm:text-3xl">Checked beyond the UI.</h2>
          <dl className="mb-7 grid grid-cols-2 gap-5"><div><dt className="text-sm font-black uppercase">Automated tests</dt><dd className="mt-2 text-5xl font-black">46</dd></div><div><dt className="text-sm font-black uppercase">Database checks</dt><dd className="mt-2 text-5xl font-black">58</dd></div></dl>
          <p className="mb-5 text-sm leading-relaxed">Tests cover validation, authentication, origins, bot-verification failures, access isolation, duplicate prevention, and submission limits. The database checks include permitted staff saves and rejected anonymous, non-staff, and cross-clinic requests.</p>
          <p className="border-t-4 border-black pt-4 text-sm leading-relaxed font-bold">The deployed workflow was also checked: submit, sign in, update status, add a note, refresh, and sign out.</p>
        </div>
      </section>

      <section aria-labelledby="stack-title" className="mb-14 border-4 border-black bg-white p-6 sm:p-8">
        <h2 id="stack-title" className="mb-5 text-2xl font-black uppercase">The stack</h2><ul className="flex flex-wrap gap-3">{project.stack.map(item => <li className="border-2 border-black bg-[#e5e5e5] px-3 py-2 text-sm font-bold" key={item}>{item}</li>)}<li className="border-2 border-black bg-[#e5e5e5] px-3 py-2 text-sm font-bold">Vercel</li></ul>
      </section>

      <section aria-labelledby="project-contact-title" className="mb-12 border-8 border-black bg-blue-600 p-6 text-white shadow-[10px_10px_0_0_#000] sm:p-10">
        <h2 id="project-contact-title" className="mb-4 text-3xl font-black uppercase tracking-tighter sm:text-4xl">Need a form, dashboard, or internal tool?</h2><p className="mb-7 max-w-3xl leading-relaxed">I’m available for focused web development projects: clear workflows, usable interfaces, and data that persists.</p><Link href="/#contact" className={projectButton + " bg-yellow-400 hover:bg-white"}>Discuss your project →</Link>
      </section>
      <footer className="flex flex-wrap justify-between gap-4 border-t-4 border-black py-6 text-sm font-bold"><Link href="/#projects" className="underline underline-offset-4">← More from Mohamed Salhi</Link><span>Clinic Enquiry Tracker / Portfolio case study</span></footer>
    </div>
  </main>;
}
