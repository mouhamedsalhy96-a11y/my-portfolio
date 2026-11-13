import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formaProject as project, projectButton } from "@/lib/projects";

const portfolioOrigin = "https://my-portfolio-delta-seven-49.vercel.app";

export const metadata: Metadata = {
  title: "Forma — Personal Trainer Booking Portal | Mohamed Salhi",
  description: "A full-stack booking portal with client accounts, shared availability, trainer access, cancellations and queued email notifications.",
  alternates: { canonical: portfolioOrigin + project.path },
  openGraph: {
    title: "Forma — Mohamed Salhi",
    description: project.summary,
    type: "article",
    images: [{
      url: portfolioOrigin + project.screenshots.home.src,
      width: project.screenshots.home.width,
      height: project.screenshots.home.height,
      alt: project.screenshots.home.alt,
    }],
  },
};

const workflow = [
  {
    title: "Choose a session",
    description: "A client signs in, picks a service and selects a published studio date and time from a styled calendar.",
  },
  {
    title: "Save the booking",
    description: "The database checks availability and saves the session to the client’s account. A booked slot becomes unavailable to other clients.",
  },
  {
    title: "Manage the studio",
    description: "The trainer searches bookings, publishes availability and cancels future sessions. Cancelled records stay in history and release their slots.",
  },
];

function Screenshot({
  name,
  title,
  caption,
}: {
  name: "booking" | "dashboard" | "availability";
  title: string;
  caption: string;
}) {
  const screenshot = project.screenshots[name];
  return (
    <figure className="min-w-0 border-4 border-black bg-white p-3 shadow-[7px_7px_0_0_#000] sm:p-6">
      <a href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full screenshot: ${title}`} className="block bg-[#f7f8f2]">
        <Image
          {...screenshot}
          alt={screenshot.alt}
          sizes={name === "booking" ? "(max-width: 1280px) 90vw, 1200px" : "(max-width: 767px) 90vw, 48vw"}
          className="h-auto w-full"
        />
      </a>
      <figcaption className="mt-5 border-t-4 border-black pt-4 text-sm leading-relaxed">
        <strong className="mb-2 block font-black uppercase">{title}</strong>
        {caption}
        <a href={screenshot.src} target="_blank" rel="noopener noreferrer" className="mt-3 block font-bold underline underline-offset-4 hover:text-blue-700">
          Open full screenshot ↗
        </a>
      </figcaption>
    </figure>
  );
}

export default function FormaPage() {
  return (
    <main className="min-h-screen bg-[#e5e5e5] p-4 font-mono text-black selection:bg-black selection:text-yellow-400 md:p-8 lg:p-12">
      <nav aria-label="Project navigation" className="mx-auto mb-12 flex max-w-7xl flex-wrap items-center justify-between gap-5 border-b-8 border-black pb-6">
        <Link href="/" className="bg-black px-4 py-2 text-xl leading-tight font-black uppercase tracking-tighter text-white shadow-[5px_5px_0_0_#facc15]">Mohamed<br />Salhi</Link>
        <Link href="/#projects" className="font-black uppercase underline decoration-4 underline-offset-8 hover:text-blue-700">← Back to projects</Link>
      </nav>

      <header className="mx-auto mb-12 max-w-7xl border-8 border-black bg-[#d4fa79] p-6 shadow-[12px_12px_0_0_#000] sm:p-10 lg:p-14">
        <p className="mb-7 inline-block border-4 border-black bg-white px-4 py-2 text-sm font-black uppercase">Case study / Booking & trainer workspace</p>
        <h1 className="mb-6 text-[clamp(3.5rem,10vw,8rem)] leading-none font-black uppercase tracking-tighter">Forma.</h1>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed font-bold sm:text-xl">{project.summary}</p>
        <div className="flex flex-wrap gap-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={projectButton + " bg-yellow-400 hover:bg-white"}>Explore live app ↗</a>
          <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className={projectButton + " bg-white hover:bg-yellow-400"}>View GitHub ↗</a>
        </div>
      </header>

      <div className="mx-auto max-w-7xl">
        <aside aria-label="Project scope" className="mb-12 border-4 border-black bg-yellow-400 p-5 text-sm leading-relaxed font-bold">
          <strong className="mb-2 block uppercase">Working portfolio prototype</strong>
          Forma represents a fictional studio. Accounts, bookings, availability and cancellations are saved. Booking emails have been tested through a dedicated test inbox. Payments are not enabled. Screenshots use fictional client details.
        </aside>

        <figure className="mb-14 border-4 border-black bg-white p-3 shadow-[7px_7px_0_0_#000] sm:p-6">
          <a href={project.screenshots.home.src} target="_blank" rel="noopener noreferrer" aria-label="Open full Forma homepage screenshot" className="relative block aspect-[16/10] overflow-hidden border-2 border-black bg-[#f7f8f2]">
            <Image src={project.screenshots.home.src} alt={project.screenshots.home.alt} fill sizes="(max-width: 1280px) 95vw, 1200px" className="object-contain" preload />
          </a>
          <figcaption className="mt-5 text-sm leading-relaxed"><strong className="mb-2 block font-black uppercase">A clear starting point</strong>A studio homepage introduces the coach and guides visitors into the session booking flow.</figcaption>
        </figure>

        <section aria-labelledby="problem-title" className="mb-14 grid gap-6 md:grid-cols-2">
          <div className="border-4 border-black bg-white p-6 sm:p-8">
            <p className="mb-3 text-sm font-black uppercase text-blue-700">The problem</p>
            <h2 id="problem-title" className="mb-5 text-2xl font-black uppercase tracking-tight sm:text-3xl">Make booking easy to follow.</h2>
            <p className="leading-relaxed">An independent trainer needs a clear view of available times and client sessions. Clients need to choose a service, reserve a time and find their booking again. Forma brings that workflow into a shared calendar and two focused account areas.</p>
          </div>
          <div className="border-4 border-black bg-black p-6 text-white sm:p-8">
            <p className="mb-3 text-sm font-black uppercase text-yellow-400">My role</p>
            <h2 className="mb-5 text-2xl font-black uppercase tracking-tight sm:text-3xl">Design, build and verify.</h2>
            <p className="leading-relaxed">I developed Forma through an AI-assisted full-stack workflow, covering the interface, account access, PostgreSQL booking rules, trainer tools and email delivery. I refined the calendar and time controls through desktop, mobile and keyboard checks.</p>
          </div>
        </section>

        <section aria-labelledby="workflow-title" className="mb-14">
          <h2 id="workflow-title" className="mb-7 text-3xl font-black uppercase tracking-tighter sm:text-4xl">From available time to saved session.</h2>
          <ol className="grid gap-5 lg:grid-cols-3">
            {workflow.map(step => (
              <li key={step.title} className="border-4 border-black bg-white p-6 shadow-[5px_5px_0_0_#000]">
                <h3 className="mb-3 text-2xl font-black uppercase">{step.title}</h3>
                <p className="text-sm leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="screens-title" className="mb-14">
          <h2 id="screens-title" className="mb-7 text-3xl font-black uppercase tracking-tighter sm:text-4xl">Inside the workflow.</h2>
          <Screenshot name="booking" title="Client booking" caption="Service selection, available calendar dates and time choices, with a session summary before confirmation. All session times use Europe/London." />
          <div className="mt-8 grid items-start gap-7 md:grid-cols-2">
            <Screenshot name="dashboard" title="Trainer workspace" caption="Search and filter confirmed and cancelled bookings. Trainer cancellation releases the slot while preserving the client’s session history." />
            <Screenshot name="availability" title="Shared availability" caption="Publish future studio times using a matching calendar and quarter-hour controls. Overlaps are rejected, and a slot with an active booking cannot be hidden." />
          </div>
        </section>

        <section aria-labelledby="engineering-title" className="mb-14 grid gap-6 lg:grid-cols-2">
          <div className="border-4 border-black bg-white p-6 sm:p-8">
            <h2 id="engineering-title" className="mb-6 text-2xl font-black uppercase tracking-tight sm:text-3xl">Booking rules in the database.</h2>
            <ul className="space-y-5 text-sm leading-relaxed">
              <li><strong className="block font-black">One active booking per slot</strong>PostgreSQL enforces slot uniqueness and rejects overlapping availability. Booking, cancellation and publication changes lock the same slot to coordinate competing requests.</li>
              <li><strong className="block font-black">Client and trainer access</strong>Row-level security limits clients to their own bookings. Trainer membership is assigned separately and checked by protected database functions.</li>
              <li><strong className="block font-black">Email events saved with bookings</strong>A private queue records confirmation and cancellation events in the booking transaction. The server sends through Resend with leased jobs, bounded retries and stable idempotency keys.</li>
            </ul>
          </div>
          <div className="border-4 border-black bg-yellow-400 p-6 sm:p-8">
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight sm:text-3xl">Checked beyond the interface.</h2>
            <p className="mb-5 text-sm leading-relaxed">Automated checks cover booking conflicts, ownership, trainer privileges, cancellation retries, slot publication, history retention, email queue privacy and mocked provider responses.</p>
            <p className="mb-5 text-sm leading-relaxed">Database checks run in disposable PostgreSQL with a test Auth identity. Separate live checks covered saved bookings, trainer access, availability changes, cancellations, password recovery and test inbox delivery.</p>
            <p className="border-t-4 border-black pt-4 text-sm leading-relaxed font-bold">Email delivery uses test mode. A verified client-facing sender and a scheduler for unattended retries remain deployment tasks. Google Calendar integration and payments are future additions.</p>
          </div>
        </section>

        <section aria-labelledby="stack-title" className="mb-14 border-4 border-black bg-white p-6 sm:p-8">
          <h2 id="stack-title" className="mb-5 text-2xl font-black uppercase">The stack</h2>
          <ul className="flex flex-wrap gap-3">{[...project.stack, "Vercel"].map(item => <li key={item} className="border-2 border-black bg-[#e5e5e5] px-3 py-2 text-sm font-bold">{item}</li>)}</ul>
        </section>

        <section aria-labelledby="contact-title" className="mb-12 border-8 border-black bg-blue-600 p-6 text-white shadow-[10px_10px_0_0_#000] sm:p-10">
          <h2 id="contact-title" className="mb-4 text-3xl font-black uppercase tracking-tighter sm:text-4xl">Need a booking portal for your business?</h2>
          <p className="mb-7 max-w-3xl leading-relaxed">I build focused web applications with clear customer flows, protected workspaces and data that persists.</p>
          <Link href="/#contact" className={projectButton + " bg-yellow-400 hover:bg-white"}>Discuss your project →</Link>
        </section>
        <footer className="flex flex-wrap justify-between gap-4 border-t-4 border-black py-6 text-sm font-bold">
          <Link href="/#projects" className="underline underline-offset-4">← More from Mohamed Salhi</Link>
          <span>Forma / Portfolio case study</span>
        </footer>
      </div>
    </main>
  );
}
