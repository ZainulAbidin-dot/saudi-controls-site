import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Plane,
  Building2,
  ShieldCheck,
  Radio,
  Zap,
  Trophy,
  MapPin,
  Handshake,
} from "lucide-react";

import heroImg from "@/assets/svc-bms-2.jpeg";
import imgEv from "@/assets/svc-ev.jpg";
import imgSec from "@/assets/svc-security.jpg";
import imgIot from "@/assets/svc-iot.jpg";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import svcbms2 from "@/assets/svc-bms-2.jpeg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Meridian Engineering" },
      {
        name: "description",
        content:
          "Three decades of mission-critical control, automation and intelligent infrastructure projects delivered across the Kingdom.",
      },
      { property: "og:title", content: "Projects — Meridian Engineering" },
    ],
  }),
  component: ProjectsPage,
});

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

type Category = "All" | "Aviation" | "Buildings" | "Mobility" | "Security" | "Industrial";

type Milestone = {
  year: string;
  title: string;
  subtitle: string;
  body: string;
  category: Exclude<Category, "All">;
  tag?: string;
};

const milestones: Milestone[] = [
  {
    year: "2024",
    title: "Nationwide EV Charging Rollout",
    subtitle: "Strategic mobility partner",
    body: "Engineered and commissioned a multi-city network of fast-charging stations, integrating energy metering, payment systems and remote diagnostics into a single operations layer.",
    category: "Mobility",
    tag: "Flagship",
  },
  {
    year: "2024",
    title: "Jizan Airport",
    subtitle: "End-to-end intelligent infrastructure",
    body: "Designed, supplied and installed the full ICT and low-current backbone for a new regional airport — covering BMS, security, public address and structured cabling.",
    category: "Aviation",
    tag: "Flagship",
  },
  {
    year: "2024",
    title: "Sports District Traffic Control",
    subtitle: "Advanced ATCS deployment",
    body: "Delivered an advanced traffic control platform for a marquee sports and entertainment district, balancing event surges with everyday city flow.",
    category: "Mobility",
  },
  {
    year: "2024",
    title: "Heritage District SCADA & RTUs",
    subtitle: "50 RTUs and a unified SCADA core",
    body: "Built a unified SCADA backbone and 50 remote terminal units for a flagship heritage development authority, giving operators a single window across utilities.",
    category: "Industrial",
  },
  {
    year: "2023",
    title: "Airbase Atmosphere & Perimeter Suite",
    subtitle: "Mission-critical defense integration",
    body: "Implemented atmosphere detection, perimeter intrusion and security gate access control across a major air base, hardened for 24/7 operations.",
    category: "Security",
    tag: "Defense",
  },
  {
    year: "2022",
    title: "BMS for 11 Academy Buildings",
    subtitle: "Joint venture delivery",
    body: "Designed and commissioned a unified building management system across 11 academy buildings, standardizing controls and energy reporting at scale.",
    category: "Buildings",
  },
  {
    year: "2021",
    title: "BMS for 71 Academy Buildings",
    subtitle: "Largest BMS contract to date",
    body: "Extended a single BMS architecture across 71 buildings — a step-change in operational visibility, alarm response and lifecycle service planning.",
    category: "Buildings",
    tag: "Flagship",
  },
  {
    year: "2021",
    title: "Perimeter Intrusion Detection",
    subtitle: "Layered physical security",
    body: "Deployed a fence-line intrusion detection platform fused with CCTV analytics and access control, integrated into the existing command center.",
    category: "Security",
  },
  {
    year: "2020",
    title: "Strategic Technology Alliances",
    subtitle: "Tier-one industrial partners",
    body: "Signed long-term agreements with global leaders in industrial automation and energy systems, broadening our power, oil and gas portfolio.",
    category: "Industrial",
  },
  {
    year: "2020",
    title: "Diplomatic & Hospitality BMS",
    subtitle: "Three landmark contracts in one year",
    body: "Delivered building management systems for a major embassy, a ministry headquarters expansion and a flagship five-star hotel — all within a single calendar year.",
    category: "Buildings",
  },
  {
    year: "2019",
    title: "Smart Traffic Systems, Holy City",
    subtitle: "Crowd-aware mobility",
    body: "Partnered to deliver a smart traffic program engineered for one of the world's most demanding crowd and pilgrimage cycles.",
    category: "Mobility",
  },
  {
    year: "2019",
    title: "Central Fire Detection — POC",
    subtitle: "Proof of concept for a national agency",
    body: "Completed a successful proof of concept for a centralized fire detection platform serving a national security agency.",
    category: "Security",
  },
  {
    year: "2018",
    title: "Security HQ Development BMS",
    subtitle: "Ministry-grade controls",
    body: "Major contract to supply the building management spine for the development of national security headquarters facilities.",
    category: "Buildings",
  },
  {
    year: "2016",
    title: "1,500+ Camera ATCS Rollout",
    subtitle: "City-scale visual telemetry",
    body: "Supplied more than 1,500 high-grade traffic cameras and accessories for the capital's advanced traffic control program.",
    category: "Mobility",
  },
  {
    year: "2015",
    title: "Capital ATCS — 350+ Intersections",
    subtitle: "Citywide signal modernization",
    body: "Co-delivered an advanced traffic control system spanning over 350 intersections, reshaping how the capital moves.",
    category: "Mobility",
    tag: "Flagship",
  },
  {
    year: "2015",
    title: "PTP Wireless Backhaul",
    subtitle: "Carrier-grade intersection link",
    body: "Designed a point-to-point wireless network connecting every traffic intersection to the central traffic management center for live video and telemetry.",
    category: "Mobility",
  },
  {
    year: "2014",
    title: "Land Forces HQ BMS",
    subtitle: "Defense-sector building controls",
    body: "Significant defense contract for the supply and implementation of a building management system at a major land forces headquarters.",
    category: "Buildings",
  },
  {
    year: "2014",
    title: "Airbase Fault Signaling & IT LAN",
    subtitle: "Support for next-generation aircraft",
    body: "Delivered a fault signaling system and IT LAN backbone at a strategic air base, supporting an advanced fighter program.",
    category: "Aviation",
  },
  {
    year: "2013",
    title: "300+ Projects Delivered",
    subtitle: "Milestone celebration",
    body: "Crossed the threshold of 300 successfully handed-over projects — a marker of repeat trust across the public and private sectors.",
    category: "Industrial",
    tag: "Milestone",
  },
  {
    year: "2013",
    title: "Classified Telepresence System",
    subtitle: "Ministry-grade video infrastructure",
    body: "Supplied and implemented a hardened telepresence platform for a highly classified ministry program in the capital.",
    category: "Security",
  },
  {
    year: "2010",
    title: "Air Force Mission Systems Upgrade",
    subtitle: "Four airbases, one upgrade program",
    body: "Major contract to upgrade mission-critical and ground crew support systems across four air bases in a single coordinated rollout.",
    category: "Aviation",
  },
  {
    year: "2009",
    title: "First Smart Building, Ministry HQ",
    subtitle: "A national first",
    body: "Delivered the first fully realized smart building application for a national ministry headquarters — a reference point for projects that followed.",
    category: "Buildings",
    tag: "First",
  },
  {
    year: "2007",
    title: "Tunnel Ventilation Automation",
    subtitle: "Pioneering road tunnel controls",
    body: "Pioneered automated ventilation control for a major road tunnel, balancing air quality, fan duty cycles and emergency scenarios.",
    category: "Industrial",
  },
  {
    year: "2007",
    title: "International Airport Control Upgrade",
    subtitle: "Control & monitoring modernization",
    body: "Replaced and upgraded the central control and monitoring systems for a major international airport campus.",
    category: "Aviation",
  },
  {
    year: "2006",
    title: "National Guard Water Network",
    subtitle: "Automated supply & distribution",
    body: "Pioneered automatic control across the water supply and distribution network of two national guard military cities.",
    category: "Industrial",
  },
  {
    year: "2006",
    title: "National Energy Lab BMS",
    subtitle: "Research-grade controls",
    body: "Executed one of the most prestigious building management projects for a national energy research and development laboratory campus.",
    category: "Buildings",
  },
  {
    year: "2001",
    title: "National Energy Facilities BMS",
    subtitle: "Multi-site rollout",
    body: "Became the primary building management supplier for a portfolio of national energy facilities — from core annexes to gas plants.",
    category: "Industrial",
  },
  {
    year: "1999",
    title: "Hospitality Group Facility Management",
    subtitle: "Hospital, academy and tower",
    body: "Signed a landmark agreement to deliver facility management across a hospital, academy and skyline tower for a major holding group.",
    category: "Buildings",
  },
  {
    year: "1998",
    title: "Medical City BMS Handover",
    subtitle: "Healthcare-grade reliability",
    body: "Successfully completed and handed over the building management systems for a major medical city campus.",
    category: "Buildings",
  },
  {
    year: "1997",
    title: "Airport & Defense CCMS",
    subtitle: "Two landmark programs",
    body: "Delivered two major command, control and monitoring system projects — one for an international airport, one for a flagship defense program.",
    category: "Aviation",
    tag: "Founding era",
  },
  {
    year: "1997",
    title: "Meridian Founded",
    subtitle: "Engineering company established",
    body: "Founded with a singular focus: bringing world-class building and industrial controls expertise to the Kingdom's most ambitious programs.",
    category: "Industrial",
    tag: "Origin",
  },
];

const categoryIcon: Record<Exclude<Category, "All">, typeof Plane> = {
  Aviation: Plane,
  Buildings: Building2,
  Mobility: Radio,
  Security: ShieldCheck,
  Industrial: Zap,
};

const categories: Category[] = [
  "All",
  "Aviation",
  "Buildings",
  "Mobility",
  "Security",
  "Industrial",
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-20 pb-24 md:pt-32 md:pb-22">
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
            Project Archive
          </span>
        </motion.div>

        <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
          Three decades of <span className="italic text-accent">mission-critical</span>{" "}
          <span className="text-foreground/40">infrastructure, delivered.</span>
        </h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg text-foreground/65 leading-relaxed"
        >
          From the first smart ministry building to nationwide mobility, aviation and defense
          programs — every milestone in the Meridian archive is a system still running, every day,
          somewhere in the Kingdom.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.35 }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 md:grid-cols-4"
        >
          {[
            { k: "300+", v: "Projects delivered" },
            { k: "27", v: "Years of operation" },
            { k: "350+", v: "ATCS intersections" },
            { k: "71", v: "Buildings on one BMS" },
          ].map((s) => (
            <div key={s.k} className="bg-background p-6">
              <div className="font-display text-3xl italic md:text-4xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground/55">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: EASE }}
          className="relative mt-20 overflow-hidden rounded-[2.25rem] border border-foreground/10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]"
        >
          <img
            src={heroImg}
            alt="Mission control hub for Meridian projects"
            className="h-[26rem] w-full object-cover transition-transform duration-[1300ms] ease-out hover:scale-[1.03] md:h-[34rem]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
          <div className="pointer-events-none absolute left-6 bottom-6 max-w-xl rounded-3xl bg-slate-950/20 px-4 py-3 text-sm text-white backdrop-blur-md md:left-8 md:px-5 md:py-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white">
              Project spotlight
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              A force-multiplier for Meridian's intelligent infrastructure, mobility, and security
              programs.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Featured() {
  const featured = [
    {
      year: "2024",
      title: "EV Charging Stations",
      desc: "A comprehensive network of electric vehicle charging stations.",
      img: imgEv,
      tag: "Mobility",
    },
    {
      year: "2024",
      title: "Jizan Airport BMS",
      desc: "End-to-end low-current solution for a new regional aviation hub.",
      img: svcbms2,
      tag: "Aviation",
    },
    {
      year: "2023",
      title: "RCRC Security & Atmosphere",
      desc: "Perimeter intrusion, gate access and atmosphere detection across a major air base.",
      img: imgSec,
      tag: "Defense",
    },
    // {
    //   year: "2023",
    //   title: "Airbase Security Systems",
    //   desc: "Integrated perimeter intrusion, access control and CCTV for a strategic air base.",
    //   img: imgIot,
    //   tag: "Commercial",
    // },
  ];

  return (
    <section className="relative border-t border-foreground/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50">
              <span className="font-mono">01</span>
              <span className="h-px w-10 bg-foreground/20" />
              <Trophy className="h-3.5 w-3.5" />
              <span>Featured Programs</span>
            </div>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
              The flagship engagements{" "}
              <span className="italic text-accent">defining this decade.</span>
            </h2>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
              className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-lift hover-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground">
                    {f.year}
                  </span>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                    {f.tag}
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <h3 className="font-display text-2xl leading-tight">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{f.desc}</p>
                </div>
                <div className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-foreground opacity-0 transition-all group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const [filter, setFilter] = useState<Category>("All");
  const filtered = useMemo(
    () => (filter === "All" ? milestones : milestones.filter((m) => m.category === filter)),
    [filter],
  );

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative border-t border-foreground/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50">
              <span className="font-mono">02</span>
              <span className="h-px w-10 bg-foreground/20" />
              <MapPin className="h-3.5 w-3.5" />
              <span>Project Archive</span>
            </div>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Every milestone is <span className="italic text-accent">a system still running.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all ${active ? "border-foreground bg-foreground text-background" : "border-foreground/15 text-foreground/65 hover:border-foreground/40 hover:text-foreground"}`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div ref={ref} className="relative mt-16">
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-foreground/10 md:left-1/2" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent via-accent to-accent/40 md:left-1/2"
          />

          <ul className="space-y-12 md:space-y-20">
            {filtered.map((m, i) => {
              const Icon = categoryIcon[m.category];
              const right = i % 2 === 1;
              return (
                <motion.li
                  key={`${m.year}-${m.title}`}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="relative grid grid-cols-1 gap-6 pl-12 md:grid-cols-2 md:gap-12 md:pl-0"
                >
                  <span className="absolute left-4 top-6 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-background ring-2 ring-accent md:left-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>

                  <div className={`${right ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div
                      className={`flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/55 ${right ? "" : "md:justify-end"}`}
                    >
                      <span className="font-display text-3xl italic text-foreground md:text-4xl">
                        {m.year}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-2.5 py-1 text-[10px]">
                        <Icon className="h-3 w-3" />
                        {m.category}
                      </span>
                      {m.tag && (
                        <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] text-accent">
                          {m.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`${right ? "md:order-1 md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <article className="group rounded-2xl border border-foreground/10 bg-background/60 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lift">
                      <h3 className="font-display text-2xl leading-tight tracking-tight md:text-[1.65rem]">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground/55">
                        {m.subtitle}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-foreground/70 md:text-base">
                        {m.body}
                      </p>
                    </article>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    "Tier-one automation OEMs",
    "Global building controls",
    "Defense & aerospace primes",
    "Energy systems leaders",
    "Telecom infrastructure",
    "Smart mobility platforms",
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative border-t border-foreground/10 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <motion.div
            {...fadeUp}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50"
          >
            <span className="font-mono">03</span>
            <span className="h-px w-10 bg-foreground/20" />
            <Handshake className="h-3.5 w-3.5" />
            <span>Alliances</span>
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl"
          >
            Long-term partners, <span className="italic text-accent">not vendor lists.</span>
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 max-w-md text-base leading-relaxed text-foreground/65"
          >
            Decades of project delivery are only possible because we treat partners as co-engineers
            — from the first joint study through the tenth year of operations and maintenance.
          </motion.p>
        </div>

        <motion.div style={{ y }} className="lg:col-span-7">
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 sm:grid-cols-2">
            {partners.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
                className="group flex items-center justify-between bg-background p-6 transition-all hover:bg-accent/5"
              >
                <span className="font-display text-lg md:text-xl">{p}</span>
                <ArrowUpRight className="h-4 w-4 text-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground py-24 text-background md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 20% 30%, oklch(0.85 0.13 160 / 0.35), transparent), radial-gradient(50% 50% at 80% 70%, oklch(0.82 0.13 75 / 0.35), transparent)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-12 md:items-end">
        <motion.div {...fadeUp} className="md:col-span-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-background/20 bg-background/10 px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] text-background/80 backdrop-blur">
            Start a project
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Your next milestone <span className="italic text-accent">belongs in this archive.</span>
          </h2>
        </motion.div>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="md:col-span-4"
        >
          <p className="text-base leading-relaxed text-background/70">
            Tell us about your program. We will respond with a scoped engineering point of view —
            not a brochure.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="contact"
              className="group inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Contact Meridian
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-background/25 px-5 py-3 text-sm text-background/85 transition-all hover:bg-background/10"
            >
              Explore Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Featured />
      <Timeline />
      <Partners />
      <CTA />
      <SiteFooter />
    </main>
  );
}
