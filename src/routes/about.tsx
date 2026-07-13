import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Compass,
  Target,
  Eye,
  HeartHandshake,
  Quote,
  Phone,
  CheckCircle2,
} from "lucide-react";

import founder from "@/assets/company.jpg";
import promise from "@/assets/about-promise.jpeg";
import team from "@/assets/about-team.jpg";
import svcIot from "@/assets/svc-iot.jpg";
import svcBms from "@/assets/svc-bms.jpg";
import svcComms from "@/assets/svc-comms.jpg";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Meridian Engineering" },
      {
        name: "description",
        content:
          "Rooted in heritage, engineered for the future. Meridian architects future-ready control ecosystems where innovation meets reliability.",
      },
      { property: "og:title", content: "About — Meridian Engineering" },
      {
        property: "og:description",
        content:
          "Where local talent meets global expertise to turn ambition into operational reality.",
      },
    ],
  }),
  component: AboutPage,
});

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      <motion.div
        style={{ y: yOrb1 }}
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-radial-mint opacity-70 blur-2xl"
      />
      <motion.div
        style={{ y: yOrb2 }}
        className="pointer-events-none absolute -top-10 right-0 h-[22rem] w-[22rem] rounded-full bg-radial-amber opacity-60 blur-2xl"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(from_var(--color-background)_l_c_h_/_0.9))]" />

      <motion.div style={{ y: yCopy }} className="relative mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Meridian
          </Link>
        </motion.div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            About Meridian
          </span>
        </motion.div>

        <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
          Rooted in heritage, <span className="italic text-accent">engineered for the future</span>
          <span className="text-foreground/40"> — and the decades beyond.</span>
        </h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg text-foreground/65 leading-relaxed"
        >
          We architect future-ready control ecosystems where innovation meets reliability — pairing
          local talent with global expertise to turn ambition into operational reality.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.35 }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 md:grid-cols-4"
        >
          {[
            { k: "12+", v: "Years of engineering" },
            { k: "240+", v: "Systems deployed" },
            { k: "90%", v: "Client retention" },
            { k: "24/7", v: "Operations & support" },
          ].map((s) => (
            <div key={s.k} className="bg-background p-6">
              <div className="font-display text-3xl italic md:text-4xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground/55">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBig = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [-30, 60]);

  return (
    <section ref={ref} className="relative border-t border-foreground/10 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <motion.div
            {...fadeUp}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50"
          >
            <span className="font-mono">01</span>
            <span className="h-px w-10 bg-foreground/20" />
            <Compass className="h-3.5 w-3.5" />
            <span>Our Story</span>
          </motion.div>

          <motion.h2
            {...fadeUp}
            className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.25rem]"
          >
            A commitment to excellence, integrity and{" "}
            <span className="italic text-accent">measured innovation.</span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-base leading-relaxed text-foreground/65 md:text-lg"
          >
            Meridian was founded on a simple conviction: the control systems quietly running modern
            cities deserve the same rigor as the architecture above them. Our values are rooted in
            heritage and sharpened by an obsession with what comes next.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="mt-5 text-base leading-relaxed text-foreground/65 md:text-lg"
          >
            We remain focused on adopting new technologies, advancing sustainability and elevating
            operational efficiency — together with partners who hold themselves to the same
            standard.
          </motion.p>

          <motion.blockquote
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.35 }}
            className="mt-10 border-l-2 border-accent/50 pl-5 font-display text-lg italic text-foreground/75"
          >
            “Our progress is measured not in deployments shipped, but in the systems still running
            flawlessly a decade later.”
            <span className="mt-3 block text-xs not-italic uppercase tracking-[0.2em] text-foreground/50">
              — Founder & Managing Director
            </span>
          </motion.blockquote>
        </div>

        <div className="relative lg:col-span-7">
          <div className="grid grid-cols-6 gap-4">
            <motion.div
              style={{ y: yBig }}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, ease: EASE }}
              className="col-span-4 row-span-2 aspect-[4/5] overflow-hidden rounded-3xl bg-foreground/5 shadow-lift hover-lift"
            >
              <img
                src={founder}
                alt="Founder portrait"
                className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
              />
            </motion.div>
            <motion.div
              style={{ y: ySmall }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="col-span-2 mt-12 aspect-[3/4] overflow-hidden rounded-3xl bg-foreground/5 shadow-lift hover-lift"
            >
              <img
                src={team}
                alt="Engineering team"
                className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
              className="col-span-2 rounded-3xl border border-foreground/10 bg-secondary/50 p-5 backdrop-blur"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-foreground/50">Founded</div>
              <div className="mt-2 font-display text-3xl italic">1997</div>
              <div className="mt-1 text-xs text-foreground/60">
                Independent, engineer-led, privately held.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Promise() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative border-t border-foreground/10 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        <div className="relative lg:order-2 lg:col-span-6">
          <motion.div
            style={{ y: yImg }}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-foreground/5 shadow-lift hover-lift"
          >
            <img
              src={promise}
              alt="Control room"
              className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
            />
          </motion.div>
        </div>

        <div className="lg:order-1 lg:col-span-6">
          <motion.div
            {...fadeUp}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50"
          >
            <span className="font-mono">02</span>
            <span className="h-px w-10 bg-foreground/20" />
            <HeartHandshake className="h-3.5 w-3.5" />
            <span>Our Promise</span>
          </motion.div>

          <motion.h2
            {...fadeUp}
            className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.25rem]"
          >
            We don't just deploy systems — we{" "}
            <span className="italic text-accent">architect ecosystems.</span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-base leading-relaxed text-foreground/65 md:text-lg"
          >
            By integrating local talent with global expertise, we turn long-term infrastructure
            ambition into operational reality. From smart cities to industrial automation, our work
            shapes a more connected and intelligent future.
          </motion.p>

          <ul className="mt-8 space-y-3.5">
            {[
              "Customized, scalable architectures designed for the next decade",
              "Vendor-neutral systems integration — no lock-in, ever",
              "In-region support engineering with global delivery standards",
              "Sustainability embedded in every commissioning decision",
            ].map((b, k) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + k * 0.08, ease: EASE }}
                className="flex items-start gap-3 text-[15px] text-foreground/80"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: Target,
    tag: "Mission",
    title: "Engineering control systems that quietly outperform.",
    copy: "Deliver integrated, future-proof systems that elevate efficiency, safety and sustainability across the built environment.",
    img: svcBms,
  },
  {
    icon: Eye,
    tag: "Vision",
    title: "A region of smarter, more resilient infrastructure.",
    copy: "Be the most trusted systems integrator in the region — known for engineering rigor, not marketing volume.",
    img: svcIot,
  },
  {
    icon: HeartHandshake,
    tag: "Values",
    title: "Integrity, mastery, partnership.",
    copy: "Heritage-rooted values guide how we hire, design and deliver — and how we hold ourselves accountable years after handover.",
    img: svcComms,
  },
];

function Pillars() {
  return (
    <section className="relative border-t border-foreground/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeUp}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50"
        >
          <span className="font-mono">03</span>
          <span className="h-px w-10 bg-foreground/20" />
          <span>What guides us</span>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl"
        >
          The principles behind{" "}
          <span className="italic text-accent">every commissioning decision.</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-background p-6 hover-lift"
            >
              <div className="aspect-[5/3] overflow-hidden rounded-2xl bg-foreground/5">
                <img
                  src={p.img}
                  alt={p.tag}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/55">
                <p.icon className="h-3.5 w-3.5" />
                {p.tag}
              </div>
              <h3 className="mt-3 font-display text-2xl leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">{p.copy}</p>
              <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 text-foreground/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const milestones = [
  {
    y: "2013",
    t: "Founded",
    c: "Established with a single mandate: rigorous, vendor-neutral controls engineering.",
  },
  {
    y: "2016",
    t: "First city-scale ITS",
    c: "Delivered adaptive signal control across a metropolitan corridor.",
  },
  {
    y: "2019",
    t: "Centralized fire monitoring",
    c: "Launched 24/7 multi-site monitoring platform with AI prioritization.",
  },
  {
    y: "2022",
    t: "SCADA water practice",
    c: "Opened dedicated utility-grade SCADA practice for national water networks.",
  },
  {
    y: "2025",
    t: "Operations & maintenance",
    c: "Scaled long-horizon O&M services for legacy and greenfield systems.",
  },
];

function Timeline() {
  return (
    <section className="relative border-t border-foreground/10 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeUp}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50"
        >
          <span className="font-mono">04</span>
          <span className="h-px w-10 bg-foreground/20" />
          <span>Milestones</span>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl"
        >
          A decade of <span className="italic text-accent">quiet, compounding work.</span>
        </motion.h2>

        <div className="mt-16 relative">
          <div className="pointer-events-none absolute left-[6.5rem] top-2 bottom-2 hidden w-px bg-foreground/15 md:block" />
          <ul className="space-y-10">
            {milestones.map((m, i) => (
              <motion.li
                key={m.y}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="grid grid-cols-1 gap-3 md:grid-cols-[7rem_1fr] md:items-start md:gap-10"
              >
                <div className="font-display text-3xl italic text-accent md:text-4xl">{m.y}</div>
                <div className="relative md:pl-10">
                  <div className="absolute -left-[1.05rem] top-3 hidden h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-secondary md:block" />
                  <h3 className="font-display text-xl md:text-2xl">{m.t}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/65 md:text-base">
                    {m.c}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pull() {
  return (
    <section className="relative border-t border-foreground/10 py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Quote className="mx-auto h-10 w-10 text-accent/70" />
        <motion.p
          {...fadeUp}
          className="mt-8 font-display text-3xl leading-[1.15] tracking-tight md:text-5xl"
        >
          “We architect future-ready ecosystems where{" "}
          <span className="italic text-accent">innovation meets reliability</span> — turning
          long-horizon ambition into the systems that quietly run the day.”
        </motion.p>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground/55"
        >
          The Meridian Promise
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative border-t border-foreground/10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-12 text-background md:p-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
          <motion.h2
            {...fadeUp}
            className="relative max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl"
          >
            Curious how we'd approach <span className="italic text-accent">your next system?</span>
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="relative mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/"
              hash="contact"
              className="group inline-flex items-center gap-3 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5"
            >
              Start a conversation
              <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground/10 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-medium text-background/90 transition-colors hover:bg-background/10"
            >
              Explore Solutions
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Story />
      <Promise />
      <Pillars />
      <Timeline />
      <Pull />
      <CTA />
      <SiteFooter />
    </main>
  );
}
