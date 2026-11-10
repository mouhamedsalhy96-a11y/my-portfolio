export const clinicProject = {
  title: "Clinic Enquiry Tracker",
  path: "/projects/clinic-enquiry-tracker",
  summary: "A full-stack app for managing administrative enquiries, with a protected staff inbox, status tracking, and internal notes.",
  liveUrl: "https://clinic-enquiry-tracker.vercel.app",
  repositoryUrl: "https://github.com/mouhamedsalhy96-a11y/clinic-enquiry-tracker",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare Turnstile"],
  screenshots: {
    inbox: { src: "/projects/clinic-enquiry-tracker/inbox.png", width: 1416, height: 967, alt: "Staff enquiry inbox with search, category and date filters, and three sample enquiries." },
    form: { src: "/projects/clinic-enquiry-tracker/public-form.png", width: 700, height: 1235, alt: "Public enquiry form with contact fields, an administrative message, fictional-data acknowledgement, and a completed Turnstile check." },
    details: { src: "/projects/clinic-enquiry-tracker/details.png", width: 395, height: 1103, alt: "Workflow Test enquiry marked In progress with the saved internal note Opening hours checked." },
  },
} as const;

export const projectButton = "inline-flex min-h-12 items-center justify-center border-4 border-black px-5 py-3 text-sm sm:text-base font-black uppercase text-black shadow-[5px_5px_0_0_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none";
