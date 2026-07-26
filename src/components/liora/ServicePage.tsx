import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { BotanicalBg } from "@/components/liora/BotanicalBg";
import { MosaicDivider } from "@/components/liora/MosaicDivider";
import { lioraWordmark } from "@/assets/liora-wordmark.png";
import { Reveal } from "@/components/liora/Reveal";

const nav = [
  { label: "Home", to: "/" as const, hash: undefined },
  { label: "Projects", to: "/" as const, hash: "projects" },
  { label: "Services", to: "/" as const, hash: "services" },
  { label: "Contact", to: "/" as const, hash: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <Link to="/" className="flex flex-col leading-none">
          <img
            src={lioraWordmark}
            alt="Liora by Gabriela"
            className="h-12 w-auto"
          />
          <span className="mt-1 pl-[2px] text-[10px] uppercase tracking-[0.35em] text-[#6b5a4d]">
            By Gabriela
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              className="text-[11px] uppercase tracking-[0.32em] text-[#3a2a1f] transition hover:text-[#D97D49]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#e6dcc9] bg-cream/60 md:hidden"
        >
          <span className={`h-[1.5px] w-4 bg-[#3a2a1f] transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-4 bg-[#3a2a1f] transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] w-4 bg-[#3a2a1f] transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="mx-5 rounded-2xl border border-[#e6dcc9] bg-cream/95 p-6 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((n) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  hash={n.hash}
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-[0.32em] text-[#3a2a1f]"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#e6dcc9] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <LioraWordmark className="text-xl" color="#3a2a1f" />
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#6b5a4d]">
          © {new Date().getFullYear()} Liora by Gabriela · Puerto Rico
        </p>
      </div>
    </footer>
  );
}

const steps = [
  { n: "01", title: "Discovery", body: "Understanding your business and goals." },
  { n: "02", title: "Design Direction", body: "Creating a visual direction that reflects your brand." },
  { n: "03", title: "Creation", body: "Developing the final design experience." },
  { n: "04", title: "Refinement", body: "Making adjustments and preparing the final delivery." },
];

const faqs = [
  {
    q: "How long does a project take?",
    a: "Timelines vary by scope. Most website projects take 3–6 weeks, while smaller digital designs can be completed in a few days to two weeks.",
  },
  {
    q: "Do you work with small businesses only?",
    a: "Liora is dedicated to small businesses, independent brands, and creative entrepreneurs — especially those rooted in Puerto Rican culture.",
  },
  {
    q: "Can I request changes after completion?",
    a: "Yes. Each project includes a set of revisions, and additional adjustments can always be arranged through a support package.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Absolutely. Every business is unique, and packages are tailored to your specific needs, goals, and stage of growth.",
  },
  {
    q: "How do I start a project?",
    a: "Send a message through the contact form or reach out on Instagram. We'll schedule a short conversation to explore your idea together.",
  },
];

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro?: string;
  included: string[];
  startingAt: string;
  pricingNote: string;
  ctaLabel: string;
};

export function ServicePage({
  eyebrow,
  title,
  subtitle,
  intro,
  included,
  startingAt,
  pricingNote,
  ctaLabel,
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        <BotanicalBg />
        <div className="relative mx-auto max-w-4xl px-5 pb-16 text-center sm:px-8 lg:pb-24">
          <Reveal>
            <Link
              to="/"
              hash="services"
              className="text-[10px] uppercase tracking-[0.45em] text-[#6b5a4d] hover:text-[#D97D49]"
            >
              ← Back to Services
            </Link>
            <p className="mt-8 text-[11px] uppercase tracking-[0.5em] text-[#B8632F]">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.0] tracking-tight text-[#3a2a1f] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p
              className="mx-auto mt-8 max-w-2xl text-xl italic leading-relaxed text-[#6b5a4d]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {subtitle}
            </p>
            {intro && (
              <p
                className="mx-auto mt-6 max-w-2xl text-[12px] uppercase leading-[1.9] tracking-[0.08em] text-[#6b5a4d]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {intro}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <MosaicDivider />

      {/* WHAT'S INCLUDED + PRICING */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#6b5a4d]">Details</p>
            <h2 className="mt-3 font-display text-4xl italic text-[#3a2a1f] sm:text-5xl">
              What&apos;s Included
            </h2>
            <ul className="mt-8 space-y-4">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-[#e6dcc9] pb-4 text-[13px] uppercase tracking-[0.08em] text-[#3a2a1f]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[#D97D49]" />
                  <span className="leading-[1.7]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div
              className="sticky top-8 rounded-[28px] p-8 text-[#faf6f0] shadow-[0_25px_60px_-30px_rgba(180,90,40,0.7)] sm:p-10"
              style={{
                backgroundColor: "#D97D49",
                backgroundImage:
                  "radial-gradient(rgba(255,240,220,0.18) 1px, transparent 1px), radial-gradient(rgba(58,20,10,0.12) 1px, transparent 1px)",
                backgroundSize: "4px 4px, 9px 9px",
                backgroundPosition: "0 0, 2px 3px",
              }}
            >
              <p className="text-[10px] uppercase tracking-[0.45em] text-[#faf6f0]/85">
                Starting At
              </p>
              <p className="mt-3 font-display text-6xl italic leading-none">{startingAt}</p>
              <p
                className="mt-6 text-[11px] uppercase leading-[1.9] tracking-[0.08em] text-[#faf6f0]/90"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {pricingNote}
              </p>
              <div className="mt-8">
                <Link
                  to="/"
                  hash="contact"
                  className="btn-editorial btn-editorial-olive"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MosaicDivider />

      {/* PROCESS */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#A3A670" }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#faf6f0]/80">
              How we work
            </p>
            <h2 className="mt-3 font-display text-5xl italic text-[#faf6f0] sm:text-6xl">
              My Process
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="h-full rounded-[24px] bg-[#faf6f0] p-8 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)]">
                  <p className="font-display text-4xl italic text-[#D97D49]">{s.n}</p>
                  <h3 className="mt-4 font-display text-2xl text-[#3a2a1f]">{s.title}</h3>
                  <p
                    className="mt-4 text-[11px] uppercase leading-[1.9] tracking-[0.08em] text-[#6b5a4d]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#6b5a4d]">Questions</p>
            <h2 className="mt-3 font-display text-5xl italic text-[#3a2a1f] sm:text-6xl">
              FAQ
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div className="overflow-hidden rounded-[20px] border border-[#e6dcc9] bg-[#faf6f0]">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
                    >
                      <span
                        className="text-[12px] uppercase tracking-[0.15em] text-[#3a2a1f]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-[#3a2a1f]/20 text-[#3a2a1f] transition ${isOpen ? "rotate-45 bg-[#D97D49] text-[#faf6f0]" : ""}`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 sm:px-8">
                        <p
                          className="text-[12px] uppercase leading-[1.9] tracking-[0.08em] text-[#6b5a4d]"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {f.a}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div
              className="rounded-[32px] p-10 text-center text-[#faf6f0] shadow-[0_30px_70px_-30px_rgba(59,77,58,0.7)] sm:p-16"
              style={{ backgroundColor: "#3B4D3A" }}
            >
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Ready to bring your idea
                <br />
                <span className="italic text-[#f4c9a8]">to life?</span>
              </h2>
              <p
                className="mx-auto mt-6 max-w-xl text-[12px] uppercase leading-[1.9] tracking-[0.08em] text-[#faf6f0]/85"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Let&apos;s create something meaningful for your business through thoughtful design.
              </p>
              <div className="mt-8">
                <Link
                  to="/"
                  hash="contact"
                  className="btn-editorial btn-editorial-terracotta"
                >
                  Contact Liora
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
