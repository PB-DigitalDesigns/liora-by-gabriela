import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MosaicDivider } from "@/components/liora/MosaicDivider";
import { BotanicalBg } from "@/components/liora/BotanicalBg";
import { Reveal } from "@/components/liora/Reveal";
import lioraLogo from "@/assets/liora-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-2xl text-[#3a2a1f]">
            Liora
          </span>
          <span className="mt-1 pl-[2px] text-[10px] uppercase tracking-[0.35em] text-[#6b5a4d]">
            By Gabriela
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[11px] uppercase tracking-[0.32em] text-[#3a2a1f] transition hover:text-[#D97D49]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#e6dcc9] bg-cream/60 md:hidden"
        >
          <span
            className={`h-[1.5px] w-4 bg-[#3a2a1f] transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-[1.5px] w-4 bg-[#3a2a1f] transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[1.5px] w-4 bg-[#3a2a1f] transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>
      {open && (
        <div className="mx-5 rounded-2xl border border-[#e6dcc9] bg-cream/95 p-6 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={n.href}
                  className="text-xs uppercase tracking-[0.32em] text-[#3a2a1f]"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
     <section id="top" className="relative pt-28 sm:pt-32 lg:pt-36">
     <BotanicalBg />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-24">
        <Reveal className="flex justify-center lg:justify-start">
          <div className="relative flex justify-center lg:justify-start">
            <img
              src={lioraLogo}
              alt="Liora by Gabriela logo"
              className="w-[90%] max-w-[500px] object-contain drop-shadow-[0_25px_45px_rgba(180,90,40,0.25)]"
              />
          </div>
        </Reveal>

        <Reveal delay={150} className="text-center lg:text-left">
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-[#3a2a1f] sm:text-6xl lg:text-7xl">
            Creative
            <br />
            Digital
            <br />
            <span className="italic text-[#B8632F]">Studio</span>
          </h1>
          <p
            className="mx-auto mt-8 max-w-md text-xl leading-relaxed text-[#6b5a4d] lg:mx-0"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
          >
            “Dando luz a ideas a través del diseño.”
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#contact" className="btn-editorial btn-editorial-terracotta">
              Start a Project
            </a>
            <a
              href="#projects"
              className="btn-editorial border border-[#3a2a1f]/20 text-[#3a2a1f] hover:bg-[#3a2a1f]/5"
            >
              View Work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mx-auto flex max-w-7xl items-center gap-5 px-5 sm:px-8">
      <span className="text-[11px] uppercase tracking-[0.5em] text-[#6b5a4d]">
        {children}
      </span>
      <span className="h-px flex-1 bg-[#3a2a1f]/20" />
    </div>
  );
}

const projects = [
  {
    title: "Food Truck",
    category: "Website Design",
    gradient: "from-[#f4c9a8] via-[#e39a6a] to-[#a3a670]",
  },
  {
    title: "Organization",
    category: "Digital Experience",
    gradient: "from-[#dfe6c2] via-[#a3a670] to-[#3B4D3A]",
  },
  {
    title: "Store",
    category: "Creative Design",
    gradient: "from-[#f2e2c9] via-[#D97D49] to-[#B8632F]",
  },
];

function ProjectThumb({ gradient }: { gradient: string }) {
  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-gradient-to-br ${gradient}`}>
      {/* horizon */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/15" />
      {/* sun */}
      <div className="absolute right-6 top-6 h-14 w-14 rounded-full bg-[#faf6f0]/80 shadow-[0_0_40px_rgba(255,240,220,0.7)]" />
      {/* hills */}
      <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-1/2 w-full">
        <path d="M0 60 L0 30 Q40 10 80 25 Q120 40 160 20 Q180 12 200 22 L200 60 Z" fill="rgba(59,77,58,0.6)" />
        <path d="M0 60 L0 45 Q50 30 100 42 Q150 54 200 40 L200 60 Z" fill="rgba(59,77,58,0.85)" />
      </svg>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="pt-8 sm:pt-14 pb-20">
      <SectionLabel>Projects</SectionLabel>
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:gap-10">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <a href="#contact" className="group block">
              <div className="overflow-hidden rounded-[28px] shadow-[0_20px_40px_-25px_rgba(58,42,31,0.35)] transition group-hover:-translate-y-1 group-hover:shadow-[0_30px_50px_-25px_rgba(58,42,31,0.5)]">
                <ProjectThumb gradient={p.gradient} />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl text-[#3a2a1f]">{p.title}</h3>
                <span
                  className="text-[10px] uppercase tracking-[0.3em] text-[#6b5a4d]"
                  style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "0.2em" }}
                >
                  {p.category}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
   <section
  id="about"
  className="relative pt-10 pb-20 sm:pt-14 sm:pb-24"
  style={{ backgroundColor: "#A3A670" }}
>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex justify-center">
          <div className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-[36px] bg-[#faf6f0] p-6 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-6 rounded-[24px] border-2 border-dashed border-[#3B4D3A]/25" />
            <img
              src={lioraLogo}
              alt="Liora monogram — stylized L with lily flower inside a Puerto Rican tile-inspired ornamental frame"
              className="relative h-[85%] w-[85%] object-contain"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#faf6f0]/80">Studio</p>
          <h2 className="mt-3 font-display text-5xl italic text-[#faf6f0] sm:text-6xl">About</h2>
          <div className="mt-8 rounded-[28px] bg-[#faf6f0] p-8 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.35)] sm:p-10">
            <p
              className="text-[13px] uppercase leading-[1.9] tracking-[0.08em] text-[#3a2a1f]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              I&apos;m Paula Gabriela, the designer behind Liora. I create thoughtful websites and
              digital designs for small businesses looking to build a meaningful online presence.
            </p>
            <p
              className="mt-5 text-[13px] uppercase leading-[1.9] tracking-[0.08em] text-[#3a2a1f]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Inspired by Puerto Rico&apos;s warmth, history, and the stories behind its small
              businesses, my work blends creativity, functionality, and storytelling to transform
              ideas into digital experiences that feel authentic, memorable, and true to each brand.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Website Design",
    body: "Custom websites designed to give your business a professional online presence. From layout and design to creating a seamless user experience, each website is built to reflect your brand and connect with your audience.",
    to: "/services/website-design" as const,
  },
  {
    title: "Digital Designs",
    body: "Creative digital materials designed to help your business stand out, including flyers, menus, promotional graphics, QR codes, and other digital assets.",
    to: "/services/digital-designs" as const,
  },
  {
    title: "Support",
    body: "Ongoing support to keep your digital presence updated and effective. Whether you need website updates, menu changes, new promotional materials, or small design adjustments, Liora is here to help your business evolve.",
    to: "/services/support" as const,
  },
];

function ServiceOrnament() {
  return (
    <svg aria-hidden viewBox="0 0 120 20" className="mx-auto h-5 w-28">
      <path
        d="M2 10 Q 20 -4, 40 10 T 78 10 T 118 10"
        stroke="#D97D49"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="60" cy="10" r="2.4" fill="#D97D49" />
    </svg>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.5em] text-[#6b5a4d]">What I do</p>
        <h2 className="mt-3 font-display text-5xl italic text-[#3a2a1f] sm:text-6xl">Services</h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-3 lg:gap-10">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <article
              className="flex h-full flex-col rounded-[28px] p-8 text-[#faf6f0] shadow-[0_25px_60px_-30px_rgba(59,77,58,0.7)] sm:p-10"
              style={{ backgroundColor: "#3B4D3A" }}
            >
              <ServiceOrnament />
              <h3 className="mt-6 font-display text-3xl italic text-[#faf6f0]">{s.title}</h3>
              <p
                className="mt-5 flex-1 text-[12px] uppercase leading-[1.9] tracking-[0.08em] text-[#faf6f0]/85"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {s.body}
              </p>
              <div className="mt-8">
                <Link to={s.to} className="btn-editorial btn-editorial-terracotta">
                  Learn More
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  return (
    <section id="contact" className="pb-24">
      <SectionLabel>Contact</SectionLabel>
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] text-[#3a2a1f] sm:text-6xl">
            Start Your
            <br />
            <span className="italic text-[#B8632F]">Project</span>
          </h2>

          <div
            className="mt-10 rounded-[28px] p-8 text-[#faf6f0] shadow-[0_25px_60px_-30px_rgba(180,90,40,0.7)] sm:p-10"
            style={{
              backgroundColor: "#D97D49",
              backgroundImage:
                "radial-gradient(rgba(255,240,220,0.18) 1px, transparent 1px), radial-gradient(rgba(58,20,10,0.12) 1px, transparent 1px)",
              backgroundSize: "4px 4px, 9px 9px",
              backgroundPosition: "0 0, 2px 3px",
            }}
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#faf6f0]/85">Instagram</p>
              <a
                href="https://instagram.com/liora.by.gabriela"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block font-display text-2xl italic"
              >
                @liora.by.gabriela
              </a>
            </div>
            <div className="mt-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#faf6f0]/85">Email</p>
              <a
                href="mailto:liora.gabriela@gmail.com"
                className="mt-1 block font-display text-2xl italic break-all"
              >
                liora.gabriela@gmail.com
              </a>
            </div>
            <div className="mt-8">
              <a href="#form" className="btn-editorial btn-editorial-olive">
                Start Now
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="font-display text-3xl italic text-[#3a2a1f] sm:text-4xl">
            Ready to bring your idea to life?
          </h3>
          <p
            className="mt-5 text-[12px] uppercase leading-[1.9] tracking-[0.08em] text-[#6b5a4d]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Every great project begins with an idea, and every idea deserves the opportunity to
            shine. At Liora, my goal is to bring light to your ideas through thoughtful design —
            creating websites and digital experiences that reflect your business with intention and
            authenticity.
          </p>

          <form
            id="form"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("sent");
            }}
            className="mt-8 space-y-5 rounded-[28px] border border-[#e6dcc9] bg-[#faf6f0] p-6 shadow-[0_20px_50px_-30px_rgba(58,42,31,0.35)] sm:p-8"
          >
            {[
              { id: "name", label: "Name", type: "text", required: true },
              { id: "email", label: "Email", type: "email", required: true },
            ].map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="block text-[10px] uppercase tracking-[0.35em] text-[#6b5a4d]"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required={f.required}
                  maxLength={200}
                  className="mt-2 w-full border-0 border-b border-[#3a2a1f]/25 bg-transparent px-1 py-2 font-display text-lg italic text-[#3a2a1f] outline-none transition focus:border-[#D97D49]"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-[10px] uppercase tracking-[0.35em] text-[#6b5a4d]"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                maxLength={1500}
                className="mt-2 w-full resize-none border-0 border-b border-[#3a2a1f]/25 bg-transparent px-1 py-2 font-display text-lg italic text-[#3a2a1f] outline-none transition focus:border-[#D97D49]"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <button type="submit" className="btn-editorial btn-editorial-terracotta">
                Send Message
              </button>
              {status === "sent" && (
                <span
                  className="text-xs italic text-[#3B4D3A]"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Thank you — I&apos;ll be in touch soon.
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#e6dcc9] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <span className="font-display text-xl text-[#3a2a1f]">
          Liora
        </span>
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#6b5a4d]">
          © {new Date().getFullYear()} Liora by Gabriela · Puerto Rico
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <MosaicDivider />
      <About />
      <MosaicDivider />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
