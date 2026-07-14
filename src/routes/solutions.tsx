import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  TrafficCone,
  Building2,
  Flame,
  Droplets,
  CheckCircle2,
  Phone,
  Zap,
  ShieldCheck,
} from "lucide-react";

import svcTraffic from "@/assets/svc-traffic.jpeg";
import svcTraffic2 from "@/assets/svc-traffic-3.jpeg";
import svcBms from "@/assets/svc-bms.jpg";
import svcBms2 from "@/assets/svc-bms-3.jpeg";
import svcIot from "@/assets/svc-iot.jpg";
import svcSecurity from "@/assets/svc-security.jpg";
import svcSecurity2 from "@/assets/svc-security-3.png";
import svcComms from "@/assets/svc-comms-3.jpeg";
import svcEv2 from "@/assets/svc-ev.jpg";
import svcEv from "@/assets/svc-ev.jpeg";
import svcScada from "@/assets/svc-comms-2.jpeg";
import svcScada2 from "@/assets/svc-scada.jpeg";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions —  Saudi Controls" },
      {
        name: "description",
        content:
          "Bespoke technological solutions across intelligent transport, smart buildings, centralized fire monitoring and SCADA water management.",
      },
      { property: "og:title", content: "Solutions — Saudi Controls" },
      {
        property: "og:description",
        content:
          "Elevating innovation through bespoke technological mastery — where vision meets precision.",
      },
    ],
  }),
  component: SolutionsPage,
});

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

type Solution = {
  id: string;
  index: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  copy: string;
  bullets: string[];
  primary: string;
  secondary: string;
};

const solutions: Solution[] = [
  {
    id: "its",
    index: "01",
    icon: TrafficCone,
    tag: "Intelligent Transportation",
    title: "AI-driven traffic systems that move cities forward.",
    copy: "We engineer adaptive signal control, real-time congestion prediction and collision-avoidance technology that dynamically tune urban mobility for efficiency, safety and sustainability.",
    bullets: [
      "Adaptive signal control with real-time congestion prediction",
      "Traffic priority for emergency and public transport fleets",
      "Pedestrian-first signal logic for high-density corridors",
      "EV charging infrastructure integrated with smart grids",
    ],
    primary: svcTraffic,
    secondary: svcTraffic2,
  },
  {
    id: "bie",
    index: "02",
    icon: Building2,
    tag: "Building Intelligent Ecosystems",
    title: "Smart buildings that learn, protect and conserve.",
    copy: "IoT-enabled Building Management Systems unify energy, security and life-safety into a single intelligent fabric — making real estate measurably more efficient and resilient.",
    bullets: [
      "Centralized BMS with energy-optimization analytics",
      "Integrated fire detection and real-time site monitoring",
      "Green building, EV networks and solar energy integration",
      "Legacy modernization through AI-driven retrofits",
    ],
    primary: svcBms,
    secondary: svcBms2,
  },
  {
    id: "fire",
    index: "03",
    icon: Flame,
    tag: "Centralized Fire Alarm Monitoring",
    title: "Hundreds of sites. One pane of glass. Zero blind spots.",
    copy: "A 24/7 surveillance platform that aggregates fire alarms across distributed estates and prioritizes high-risk incidents using AI — so response teams act on what matters first.",
    bullets: [
      "24/7 real-time surveillance from a single intuitive dashboard",
      "GPRS / GSM and fiber-optic integration for urban and remote sites",
      "AI-driven incident prioritization for rapid response",
      "Scalable for residential complexes, industrial zones and city grids",
    ],
    primary: svcSecurity2,
    secondary: svcComms,
  },
  {
    id: "scada",
    index: "04",
    icon: Droplets,
    tag: "SCADA — Water Supply Management",
    title: "Modern SCADA for resilient, accountable water networks.",
    copy: "End-to-end supervisory control for water utilities — pinpointing leaks, optimizing pumps and ensuring regulatory compliance, with the dashboards operators actually use.",
    bullets: [
      "Reduce non-revenue water — pinpoint leaks with 99% accuracy",
      "Cut pump energy costs by up to 30% through optimization",
      "Meet stringent water quality and sustainability regulations",
      "Open architecture that scales from district to national grid",
    ],
    primary: svcScada,
    secondary: svcScada2,
  },
  {
    id: "ev",
    index: "05",
    icon: Zap,
    tag: "EV Charging Infrastructure",
    title: "Charging networks engineered for the electric era.",
    copy: "From portable units to DC fast chargers and robotic charging, we design and deploy resilient EV infrastructure aligned with Vision 2030 and grid-scale realities.",
    bullets: [
      "Wall-mounted, DC fast and robotic charging solutions",
      "Smart load balancing integrated with local grids",
      "Portable EV charging for fleets and remote deployments",
      "Payment, telemetry and remote diagnostics on one platform",
    ],
    primary: svcEv,
    secondary: svcEv2,
  },
  {
    id: "security",
    index: "06",
    icon: ShieldCheck,
    tag: "Industrial Security Systems",
    title: "Mission-critical protection for people, assets and perimeters.",
    copy: "Layered security — perimeter intrusion detection, access control, video analytics and command centers — engineered for defense, energy and critical infrastructure sites.",
    bullets: [
      "Perimeter intrusion detection with AI-driven threat classification",
      "Integrated access control and video analytics",
      "24/7 command-and-control with unified dashboards",
      "Hardened for defense, energy and critical infrastructure",
    ],
    primary: svcSecurity,
    secondary: svcIot,
  },
];

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
            Back to Home
          </Link>
        </motion.div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Our Solutions
          </span>
        </motion.div>

        <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
          Elevating innovation through{" "}
          <span className="italic text-accent">bespoke technological mastery</span>
          <span className="text-foreground/40"> — where vision meets precision.</span>
        </h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg text-foreground/65 leading-relaxed"
        >
          Six practice areas. One disciplined engineering approach. We design, integrate and operate
          the control systems that quietly run modern cities.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.35 }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 md:grid-cols-3 lg:grid-cols-6"
        >
          {solutions.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-secondary/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-foreground/40">{s.index}</span>
                <s.icon className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-accent" />
              </div>
              <div className="text-sm font-medium leading-snug">{s.tag}</div>
              <ArrowUpRight className="mt-auto h-4 w-4 text-foreground/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function SolutionBlock({ s, i }: { s: Solution; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBig = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [-30, 60]);
  const reverse = i % 2 === 1;

  return (
    <section id={s.id} ref={ref} className="relative border-t border-foreground/10 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        {/* copy */}
        <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50"
          >
            <span className="font-mono">{s.index}</span>
            <span className="h-px w-10 bg-foreground/20" />
            <s.icon className="h-3.5 w-3.5" />
            <span>{s.tag}</span>
          </motion.div>

          <motion.h2
            {...fadeUp}
            className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.25rem]"
          >
            {s.title}
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-base leading-relaxed text-foreground/65 md:text-lg"
          >
            {s.copy}
          </motion.p>

          <ul className="mt-8 space-y-3.5">
            {s.bullets.map((b, k) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + k * 0.08, ease: EASE }}
                className="flex items-start gap-3 text-[15px] text-foreground/80"
              >
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>

          <motion.blockquote
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="mt-10 border-l-2 border-accent/50 pl-5 font-display text-lg italic text-foreground/75"
          >
            “Our commitment to excellence and innovation drives us to deliver the best outcomes for
            our clients.”
          </motion.blockquote>
        </div>

        {/* images */}
        <div className={`relative lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
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
                src={s.primary}
                alt={s.tag}
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
                src={s.secondary}
                alt={`${s.tag} — detail`}
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
              <div className="text-xs uppercase tracking-[0.18em] text-foreground/50">Outcome</div>
              <div className="mt-2 font-display text-3xl italic">
                {["+38%", "−42%", "24/7", "99%", "50+", "15+"][i]}
              </div>
              <div className="mt-1 text-xs text-foreground/60">
                {
                  [
                    "average throughput uplift",
                    "operational energy reduction",
                    "monitoring uptime SLA",
                    "leak detection accuracy",
                    "EV stations deployed",
                    "defense facilities supported",
                  ][i]
                }
              </div>
            </motion.div>
          </div>
        </div>
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
            Have a system that needs to be{" "}
            <span className="italic text-accent">designed, integrated, or rescued?</span>
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
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-medium text-background/90 transition-colors hover:bg-background/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to homepage
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SolutionsPage() {
  return (
    <main className="bg-background text-foreground">
      <SiteNav />
      <Hero />
      {solutions.map((s, i) => (
        <SolutionBlock key={s.id} s={s} i={i} />
      ))}
      <CTA />
      <SiteFooter />
    </main>
  );
}
