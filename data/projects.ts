export type Project = {
  id: number;
  slug: string;
  title: string;
  shortDesc: string;
  fullExplanation: string[];
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imagePath: string;
};

export const projects: Project[] = [
  {
    id: 7,
    slug: "flowly",
    title: "Flowly",
    shortDesc: "The AI operating system for small businesses — clients, projects, tasks, documents, and revenue in one workspace.",
    fullExplanation: [
      "Flowly is a calm, focused command center for small businesses, freelancers, agencies, and consultants. Instead of juggling a CRM, a project tool, a file drive, and an invoicing app, owners manage everything in one workspace — a live dashboard surfaces revenue, active clients, open projects, tasks due today, and a recent-activity timeline, so they always know what to focus on next.",
      "Every module is built to feel premium: a Linear-style Kanban board with drag-and-drop, priorities, and deadlines; a lightweight CRM whose side panel shows each client's projects, documents, and invoices; a drag-and-drop document center backed by Supabase Storage; and Stripe-style invoice tracking with Paid, Pending, and Overdue tiles. The whole app ships with dark and light mode, English and Arabic with full right-to-left layout, Supabase Auth and PostgreSQL underneath, and PayPal subscriptions for billing."
    ],
    features: [
      "Live dashboard: revenue, clients, projects, and tasks due today",
      "Linear-style Kanban with drag-and-drop, priorities, and deadlines",
      "Lightweight CRM with per-client projects, documents, and invoices",
      "Document center with drag-and-drop upload on Supabase Storage",
      "Invoice tracking with Paid / Pending / Overdue tiles",
      "Dark & light mode plus English/Arabic with full RTL support"
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "PayPal"],
    githubUrl: "https://github.com/yourname/flowly",
    liveUrl: "https://flowly-demo.vercel.app",
    imagePath: "/images/flowly.svg"
  },
  {
    id: 9,
    slug: "hijab-store",
    title: "Hijab Store",
    shortDesc: "Full-stack hijab boutique with secure server-side PayPal checkout.",
    fullExplanation: [
      "Hijab Store is a complete e-commerce experience for a modest-fashion boutique. The storefront is built with Vite, React, and TypeScript for instant page loads, while Firebase powers the backend: Firestore holds the catalog and orders, Firebase Auth manages customer accounts, and Cloud Functions handle everything sensitive.",
      "Payments were engineered security-first. PayPal orders are created and captured entirely server-side in Cloud Functions — the client never touches secrets. The capture flow validates ownership, order state, amount, and currency before marking anything paid, and Firestore rules block clients from updating or deleting orders directly, so a shopper can never write their own 'paid' status."
    ],
    features: [
      "Server-side PayPal order creation and capture",
      "Firestore rules that block client-side order mutation",
      "Firebase Auth with per-user order isolation",
      "Amount, currency, and ownership validation before capture",
      "Environment-driven config with zero secrets in source"
    ],
    techStack: ["Vite", "React", "TypeScript", "Firebase", "PayPal"],
    githubUrl: "https://github.com/yourname/hijab-store",
    liveUrl: "https://hijab-store-demo.web.app",
    imagePath: "/images/hijab-store.svg"
  },
  {
    id: 10,
    slug: "gym-crm",
    title: "Gym CRM",
    shortDesc: "Solo-operator CRM for a small gym — members, check-ins, and renewals on one screen.",
    fullExplanation: [
      "Gym CRM is built for the owner who runs a small gym alone. Instead of paying for an enterprise CRM full of features they'll never touch, the owner gets exactly what a one-person operation needs: member profiles with plan and status, one-tap check-ins, a weekly attendance grid, and a clear view of which memberships are about to expire.",
      "The app is a single-page React application built on Vite, so it loads instantly and every interaction — checking a member in, renewing a plan, scanning the day's attendance — happens without a page reload. TypeScript and ESLint keep the codebase strict and clean, and the interface is deliberately minimal: one person, one screen, zero clutter."
    ],
    features: [
      "Member profiles with plan and status at a glance",
      "One-tap check-ins with a weekly attendance grid",
      "Expiring-membership and renewal reminders",
      "Instant, reload-free interactions via Vite SPA",
      "Deliberately minimal single-owner workflow"
    ],
    techStack: ["React", "Vite", "TypeScript", "ESLint"],
    githubUrl: "https://github.com/yourname/gym-crm",
    liveUrl: "https://gym-crm-demo.vercel.app",
    imagePath: "/images/gym-crm.svg"
  },
  {
    id: 11,
    slug: "ai-accident-forensics",
    title: "AI Accident Forensics",
    shortDesc: "Dual-AI crash-claim engine that scores whether vehicle damage matches the claimed accident physics.",
    fullExplanation: [
      "AI Accident Forensics is a dual-AI crash-claim adjudication system. It decides whether visible vehicle damage is physically consistent with the claimed accident scenario and returns a 0–100 consistency score with an auditable, explainable breakdown — and it tells you how confident it is. A vision model reads the damage photo and proposes damage regions for a human to review, while a deterministic rule engine — the single source of truth — does the judging: the same input always gives the same score, every flag is explained, and an optional LLM layer can advise but never override the rules.",
      "The engineering is built around one guarantee: a real crash is never branded fraud. Photo-extracted damage is treated as soft evidence that can lower confidence and flag a claim for review, but can never hard-fail it — only a human's manual assertion can do that. Each body type (sedan, SUV, pickup, van…) carries its own structure, mass, and centre of gravity; the engine independently infers the impact direction and returns ranked candidates; and every verdict is persisted to SQLite with an audit log and duplicate-image detection. The FastAPI server ships with rate limiting, hardened async vision calls with retries and backoff, Docker health checks, and a test suite at 90%+ coverage. It's a triage instrument, not a verdict — a human adjuster stays the final decision-maker."
    ],
    features: [
      "0–100 consistency score with an explainable rule trace",
      "Deterministic rule engine — same input, same verdict, every rule testable",
      "Per-body-type physics: sedan, coupe, hatchback, SUV, pickup, van",
      "False-positive guarantee: photo evidence can never hard-fail a claim",
      "Independent impact-direction inference with ranked candidates",
      "SQLite audit history, duplicate-image detection, and 90%+ test coverage"
    ],
    techStack: ["Python", "FastAPI", "Claude API", "SQLite", "Docker"],
    githubUrl: "https://github.com/yourname/ai-accident-forensics",
    liveUrl: "https://crash-forensics-demo.fly.dev",
    imagePath: "/images/ai-accident-forensics.svg"
  },
  {
    id: 12,
    slug: "carshop-management",
    title: "CarShop Management",
    shortDesc: "Vehicle inventory manager rebuilt from a Java Swing desktop app into a modern React + Supabase web app.",
    fullExplanation: [
      "CarShop Management System takes a legacy Java Swing desktop workflow and rebuilds it for the browser. A dealership manages its whole vehicle inventory from one screen: a sortable table with row selection and double-click details, and live search that filters by code, model, and year as you type — everything the old desktop app did, now available on any machine with no install.",
      "The workflows are guarded the way inventory software should be: adding a vehicle validates every field and checks for duplicate codes, editing works from row actions or the detail modal, and deleting always asks for confirmation. Toast notifications report every success and failure, the table refreshes automatically after each add, edit, or delete, and a live connection indicator sits in both the top bar and the bottom status bar. Supabase's PostgreSQL handles the data, and the plain-CSS layout stays responsive from desktop down to tablet."
    ],
    features: [
      "Sortable vehicle table with row selection and double-click details",
      "Live search by code, model, and year",
      "Add with validation and duplicate-code checking",
      "Edit from row actions or detail modal; delete behind confirmation",
      "Toast notifications and automatic refresh after every change",
      "Connection status in the top bar and bottom status bar"
    ],
    techStack: ["React", "Vite", "Supabase", "PostgreSQL", "CSS"],
    githubUrl: "https://github.com/yourname/carshop-management",
    liveUrl: "https://carshop-management-demo.vercel.app",
    imagePath: "/images/carshop-management.svg"
  },
  {
    id: 13,
    slug: "aivoice",
    title: "AIVoice",
    shortDesc: "Voice study assistant that turns recordings into text, understands the Q&A, and saves it all as study cards.",
    fullExplanation: [
      "AIVoice helps students learn from what they hear. Record a lecture, a revision session, or a question out loud, and the app converts the speech to text — then the AI goes further than transcription: it understands what was asked and what the answer was in every recording, and saves each session as a study card the student can come back to and review.",
      "Students can also upload their syllabus, and the AI reads and understands the whole document — so its analysis and answers stay grounded in the actual course material instead of generic knowledge. The interface is a clean React app built around a simple loop: press record, speak, and watch the transcript, the Q&A breakdown, and a new saved card appear."
    ],
    features: [
      "Voice recording with speech-to-text transcription",
      "AI understands the question and the answer in every recording",
      "Every session saved as a reviewable study card",
      "Syllabus upload — the AI understands the whole course document",
      "Simple record → transcribe → review loop built in React"
    ],
    techStack: ["React", "JavaScript", "AI API", "Speech-to-Text"],
    githubUrl: "https://github.com/yourname/aivoice",
    liveUrl: "https://aivoice-demo.vercel.app",
    imagePath: "/images/aivoice.svg"
  }
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
