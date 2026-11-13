export const clinicProject = {
  title: "Clinic Enquiry Tracker",
  path: "/projects/clinic-enquiry-tracker",
  summary: "A full-stack app for managing administrative enquiries, with a protected staff inbox, status tracking, and internal notes.",
  liveUrl: "https://clinic-enquiry-tracker.vercel.app",
  repositoryUrl: "https://github.com/mouhamedsalhy96-a11y/clinic-enquiry-tracker",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare Turnstile"],
  screenshots: {
    inbox: { src: "/projects/clinic-enquiry-tracker/inbox-calendar.png", width: 1832, height: 1266, alt: "Clinic staff inbox with styled calendar date filters, three sample enquiries, and a resolved enquiry with its internal note." },
    form: { src: "/projects/clinic-enquiry-tracker/public-form.png", width: 700, height: 1235, alt: "Public enquiry form with contact fields, an administrative message, fictional-data acknowledgement, and a completed Turnstile check." },
    details: { src: "/projects/clinic-enquiry-tracker/details.png", width: 395, height: 1103, alt: "Workflow Test enquiry marked In progress with the saved internal note Opening hours checked." },
  },
} as const;

export const projectButton = "inline-flex min-h-12 items-center justify-center border-4 border-black px-5 py-3 text-sm sm:text-base font-black uppercase text-black shadow-[5px_5px_0_0_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none";

export const formaProject = {
  title: "Forma",
  path: "/projects/forma",
  summary: "A personal trainer booking portal with client accounts, shared availability, a protected trainer workspace, and booking email notifications.",
  liveUrl: "https://forma-khaki-ten.vercel.app/",
  repositoryUrl: "https://github.com/mouhamedsalhy96-a11y/Forma",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Resend"],
  screenshots: {
    home: {
      src: "/projects/forma/forma-home.png",
      width: 1831,
      height: 1096,
      alt: "Forma studio homepage with personal training introduction, gym photography, and a booking button.",
    },
    booking: {
      src: "/projects/forma/forma-booking.png",
      width: 1838,
      height: 1358,
      alt: "Client booking screen with a selected conditioning session, calendar date, available times, and a session summary.",
    },
    dashboard: {
      src: "/projects/forma/forma-dashboard.png",
      width: 1838,
      height: 1363,
      alt: "Protected Forma trainer workspace showing search, status filters, and confirmed and cancelled fictional client bookings.",
    },
    availability: {
      src: "/projects/forma/forma-availability.png",
      width: 1807,
      height: 1251,
      alt: "Trainer availability editor with a styled calendar, quarter-hour time choices, and a publish slot button.",
    },
  },
} as const;
