import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Phone,
  Sparkles,
  Star,
  CheckCircle2,
  TrendingUp,
  Building2,
  Cpu,
  Radio,
  Shield,
  Zap,
  TrafficCone,
} from "lucide-react";

import heroPortrait from "@/assets/company.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import svcEv from "@/assets/svc-ev.jpg";
import svcEv2 from "@/assets/svc-ev-2.jpeg";
import svcBms from "@/assets/svc-bms.jpg";
import svcBms2 from "@/assets/svc-bms-2.jpeg";
import svcTraffic from "@/assets/svc-traffic.jpg";
import svcTraffic2 from "@/assets/svc-traffic-2.jpeg";
import svcIot from "@/assets/svc-iot.jpg";
import svcIot3 from "@/assets/svc-iot-3.jpg";
import svcComms from "@/assets/svc-comms.jpg";
import svcSecurity from "@/assets/svc-security.jpg";
import svcSecurity2 from "@/assets/svc-security-2.png";
import svcSecurity3 from "@/assets/svc-security-3.png";
import avatar1 from "@/assets/clients/ZDEnergy.png";
import avatar3 from "@/assets/clients/Flir.jpg";
import avatar4 from "@/assets/clients/HikVision.jpg";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import avatar2 from "@/assets/clients/Ceer.png";
import content from "@/data.json";
import rashidTower from "@/assets/projects/rashid-tower.jpg";
import moiHq from "@/assets/projects/MOI-hq.jpg";
import khobarAirbase from "@/assets/projects/khobar-airbase.jpg";
import fasaliyaTower from "@/assets/projects/fasaliya-tower.png";
import sabicHq from "@/assets/projects/sabic-hq.jpg";
import partner1 from "@/assets/partners/oriux.png";
import partner2 from "@/assets/partners/emerson.jpg";
import partner3 from "@/assets/partners/la-semaforica.jpg";
import partner4 from "@/assets/partners/optasense.jpg";
import ceo from "@/assets/about-founder.png";

const company = content.company;
const aboutData = content.about;
const latestNews = content.latest_news;
const projects = content.projects;
const values = content.values;
const callToAction = content.call_to_action;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${company.name} — ${company.tagline}` },
      {
        name: "description",
        content: aboutData.summary,
      },
    ],
  }),
  component: Index,
});

/* ---------- shared ---------- */

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: delay + i * stagger, ease: EASE }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function PrimaryButton({
  children,
  icon = <Phone className="h-4 w-4" />,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <button className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-float transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lift">
      <span className="absolute inset-0 -translate-x-full bg-[#123A68] transition-transform duration-500 group-hover:translate-x-0" />
      {/* shimmer sweep */}
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
      <span className="relative">{children}</span>
      <span className="relative grid h-7 w-7 place-items-center rounded-full bg-background/15 transition-transform duration-500 group-hover:rotate-45">
        {icon}
      </span>
    </button>
  );
}

function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center gap-2.5 rounded-full border border-foreground/15 bg-white/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-white/80">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
    </button>
  );
}

/* ---------- sections ---------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityCopy = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-hero pb-28 pt-40 md:pb-36 md:pt-44">
      {/* depth orbs */}
      <motion.div
        aria-hidden
        style={{ y: yOrb1 }}
        className="pointer-events-none absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full bg-radial-mint blur-2xl animate-blob"
      />
      <motion.div
        aria-hidden
        style={{ y: yOrb2 }}
        className="pointer-events-none absolute -right-40 top-40 h-[600px] w-[600px] rounded-full bg-radial-amber blur-2xl animate-float-slow"
      />
      {/* animated aurora sweep */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-40 [background:linear-gradient(120deg,transparent,oklch(0.92_0.12_170/0.35),transparent,oklch(0.92_0.10_90/0.28),transparent)] [background-size:200%_200%] animate-gradient"
      />
      {/* faint vertical grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(to right, var(--ink) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left */}
        <motion.div style={{ opacity: opacityCopy, y: yCopy }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Pill>{`Founded ${company.founded} · ${company.headquarters.city}`}</Pill>
          </motion.div>

          <h1 className="mt-8 text-balance text-[52px] font-bold leading-[0.96] tracking-[-0.035em] text-ink sm:text-7xl lg:text-[92px]">
            <SplitWords text={company.name} />
            <br />
            <span className="font-display italic font-normal text-accent">
              <SplitWords text={company.slogan} delay={0.25} />
            </span>
          </h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.5 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink/85 sm:text-xl"
          >
            {aboutData.summary}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <PrimaryButton>Talk to Sales</PrimaryButton>
            <GhostButton>View Solutions</GhostButton>
          </motion.div>

          {/* values strip */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.75 }}
            className="mt-16 flex flex-wrap items-center gap-3"
          >
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-primary/15 bg-white/85 px-4 py-2 text-sm font-semibold text-ink shadow-sm backdrop-blur"
              >
                {value}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* right – portrait with floating cards */}
        <motion.div
          style={{ y: yPortrait }}
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[280px] rounded-b-3xl bg-mint-gradient shadow-lift ring-1 ring-white/40">
            <motion.img
              src={heroPortrait}
              alt="Saudi Controls engineering lead"
              width={1024}
              height={1280}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: EASE }}
              className="h-full w-full object-cover"
            />
          </div>

          {/* satisfied clients card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
            whileHover={{ y: -4 }}
            className="absolute -left-4 top-16 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-float ring-1 ring-black/5 backdrop-blur sm:-left-8"
          >
            <div className="flex -space-x-2">
              <img src={avatar1} alt="" className="h-8 w-8 rounded-full ring-2 ring-white" />
              <img src={avatar2} alt="" className="h-8 w-8 rounded-full ring-2 ring-white" />
              <div className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-[10px] font-semibold text-background ring-2 ring-white">
                +98
              </div>
            </div>
            <div className="text-xs font-medium leading-tight">
              98% Satisfied
              <br />
              <span className="text-foreground/60">Clients</span>
            </div>
          </motion.div>

          {/* success card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: EASE }}
            whileHover={{ y: -4 }}
            className="absolute -right-2 bottom-8 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-float ring-1 ring-black/5 sm:-right-6"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-mint">
              <CheckCircle2 className="h-5 w-5 text-foreground" />
            </div>
            <div className="leading-tight">
              <div className="text-xl font-bold tracking-tight">100+</div>
              <div className="text-xs text-foreground/60">Success Stories</div>
            </div>
            <div className="ml-3 flex h-10 items-end gap-1">
              {[6, 10, 8, 14, 18].map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-full bg-accent"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Engineering Experts",
    "Systems Integration",
    "Automation Solutions",
    "Control Systems",
    "Project Execution",
    "Smart Engineering",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-foreground/10 bg-background py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-10 text-foreground/70">
            <span className="font-display text-2xl italic">{t}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp}>
          <Pill>About Saudi Controls</Pill>
        </motion.div>
        <motion.h2
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="mt-6 max-w-6xl text-balance text-2xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:text-5xl"
        >
          {aboutData.vision}
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="group relative aspect-[16/10] overflow-hidden rounded-3xl bg-foreground shadow-card"
          >
            <motion.img
              src={aboutTeam}
              alt="Saudi Controls engineering team"
              loading="lazy"
              width={1600}
              height={900}
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: EASE }}
              className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
              10+ Years Strong
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              {...fadeUp}
              className="col-span-2 rounded-3xl bg-mint-gradient p-6 ring-1 ring-black/5 flex flex-col items-center justify-center text-center"
            >
              <div className="font-display text-white text-5xl italic">{company.founded}</div>
              <div className="mt-1 text-sm text-white/90">Year founded</div>
              <div className="mt-2 text-xs text-white/80">
                Established and committed to innovation
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-3xl bg-secondary p-5">
              <Building2 className="h-5 w-5 text-accent" />
              <div className="mt-6 font-display text-3xl italic">{company.headquarters.city}</div>
              <div className="text-xs text-foreground/60">Headquarters</div>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-3xl bg-foreground p-5 text-background">
              <TrendingUp className="h-5 w-5 text-mint" />
              <div className="mt-6 font-display text-3xl italic">300+</div>
              <div className="text-xs text-background/60">Projects completed</div>
            </motion.div>
          </div>
        </div>

        <motion.p
          {...fadeUp}
          className="mt-12 max-w-3xl text-lg leading-relaxed text-foreground/70"
        >
          {aboutData.summary}
        </motion.p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/about">
            <PrimaryButton icon={<ArrowRight className="h-4 w-4" />}>Our Story</PrimaryButton>
          </Link>
          <a href="#contact">
            <GhostButton>Contact Us</GhostButton>
          </a>
        </div>
      </div>
    </section>
  );
}

/* services */
const services = [
  {
    title: "Transportation Systems",
    desc: "Smart transport solutions enabling smooth mobility with intelligent traffic integration.",
    img: svcTraffic,
    icon: TrafficCone,
  },
  {
    title: "Building Management",
    desc: "Smart-building stacks optimising energy, security and real-time operational efficiency.",
    img: svcBms,
    icon: Building2,
  },
  {
    title: "EV Infrastructure",
    desc: "Advanced EV solutions — smart charging, telemetry and optimised station design.",
    img: svcEv,
    icon: Zap,
  },
  {
    title: "IoT & AI",
    desc: "IoT platforms that capture real-time data, automate systems and integrate fleets of devices.",
    img: svcIot,
    icon: Cpu,
  },
  {
    title: "Communication Systems",
    desc: "Carrier-grade communication technology ensuring seamless connectivity and data exchange.",
    img: svcComms,
    icon: Radio,
  },
  {
    title: "Security Systems",
    desc: "Industrial security suites integrating with SCADA for real-time threat protection.",
    img: svcSecurity,
    icon: Shield,
  },
];

function OMRow({
  s,
  i,
  secondary,
}: {
  s: (typeof services)[number];
  i: number;
  secondary: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBig = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const reversed = i % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid items-center gap-8 py-12 sm:py-20 lg:grid-cols-[1fr_1.05fr] ${
        reversed ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      {/* image cluster */}
      <div className="relative h-[460px] sm:h-[560px]">
        <motion.div
          style={{ y: yBig }}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
          className={`group absolute top-0 h-[78%] w-[62%] overflow-hidden rounded-[36px] shadow-lift ring-1 ring-black/5 ${
            reversed ? "right-0" : "left-0"
          }`}
        >
          <img
            src={s.img}
            alt={s.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
          />
        </motion.div>
        <motion.div
          style={{ y: ySmall }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
          className={`group absolute bottom-0 h-[52%] w-[48%] overflow-hidden rounded-[28px] shadow-card ring-1 ring-black/5 ${
            reversed ? "left-0" : "right-0"
          }`}
        >
          <img
            src={secondary}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 backdrop-blur">
            <s.icon className="h-4 w-4" />
          </div>
        </motion.div>
      </div>

      {/* copy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="font-display text-sm italic text-accent">/ 0{i + 1}</div>
        <h3 className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
          {s.title}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/65 sm:text-lg">
          {s.desc}
        </p>
        <button className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
          Explore capability
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </motion.div>
    </div>
  );
}

function Services() {
  const secondaries = [svcTraffic2, svcBms2, svcEv2, svcIot3, svcSecurity2, svcSecurity3];
  return (
    <section id="solutions" className="bg-mint-soft/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-6 sm:grid-cols-[1.4fr_1fr]">
          <motion.h2
            {...fadeUp}
            className="text-balance text-4xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            Operation &{" "}
            <span className="font-display italic font-normal text-accent">Maintenance</span>
          </motion.h2>
          <motion.p {...fadeUp} className="text-base text-foreground/65 sm:text-lg">
            Embedding O&amp;M from the earliest design phase keeps systems efficient and
            cost-effective — and when you need complete maintenance or infrastructure support, we
            are there end-to-end.
          </motion.p>
        </div>

        <div className="mt-10 divide-y divide-foreground/10">
          {services.map((s, i) => (
            <OMRow key={s.title} s={s} i={i} secondary={secondaries[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* featured showcase - 3d carousel */
const showcaseItems = [
  {
    title: "EV Infrastructure",
    desc: "Smart charging networks",
    icon: "⚡",
    count: "50+",
    label: "Stations deployed",
  },
  {
    title: "BMS Solutions",
    desc: "Building automation",
    icon: "🏢",
    count: "71",
    label: "Buildings managed",
  },
  {
    title: "Traffic Systems",
    desc: "City-scale mobility",
    icon: "🚦",
    count: "350+",
    label: "Intersections",
  },
  {
    title: "IoT Platforms",
    desc: "Real-time data capture",
    icon: "🔌",
    count: "1000+",
    label: "Devices connected",
  },
  {
    title: "Security Suite",
    desc: "Mission-critical protection",
    icon: "🛡️",
    count: "24/7",
    label: "Monitoring active",
  },
  {
    title: "Defense Programs",
    desc: "Aerospace & military",
    icon: "✈️",
    count: "15+",
    label: "Facilities supported",
  },
];

function Carousel3D() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const intervalId = window.setInterval(() => emblaApi.scrollNext(), 4000);
    return () => window.clearInterval(intervalId);
  }, [emblaApi, isPaused]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full"
    >
      <div ref={emblaRef} className="overflow-hidden" style={{ perspective: "1000px" }}>
        <div className="flex gap-6 -ml-6 pl-6">
          {showcaseItems.map((item, i) => {
            const isCenter = i === selected;
            const distance = Math.abs(i - selected);
            const offset = i > selected ? 1 : -1;

            return (
              <motion.div
                key={item.title}
                className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[45%]"
                initial={{ opacity: 0, rotateY: 45 }}
                animate={{
                  opacity: isCenter ? 1 : 0.4,
                  rotateY: isCenter ? 0 : 45 * offset,
                  scale: isCenter ? 1 : 0.85,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="group relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-accent/20 to-primary/10 p-8 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-accent/20">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-primary/20 to-transparent transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="text-5xl mb-3">{item.icon}</div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-display italic text-accent">{item.count}</span>
                      <span className="text-xs uppercase tracking-[0.15em] text-white/60">
                        {item.label}
                      </span>
                    </div>
                  </div>

                  {isCenter && (
                    <motion.div
                      layoutId="carousel-indicator"
                      className="absolute inset-0 rounded-3xl border-2 border-accent"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* carousel controls */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: count }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              animate={{
                width: i === selected ? 32 : 12,
                backgroundColor: i === selected ? "rgb(16 185 129)" : "rgba(16 185 129 / 0.2)",
              }}
              className="h-1.5 rounded-full transition-all"
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full border border-accent/30 bg-accent/10 transition-all hover:border-accent hover:bg-accent/20"
          >
            <ArrowLeft className="h-4 w-4 text-accent" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full border border-accent/30 bg-accent/10 transition-all hover:border-accent hover:bg-accent/20"
          >
            <ArrowRight className="h-4 w-4 text-accent" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* what sets us apart - bento */
function Bento() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radial-mint opacity-60 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-6 sm:grid-cols-[1.2fr_1fr]">
          <motion.h2
            {...fadeUp}
            className="text-balance text-4xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            What sets us <span className="font-display italic font-normal text-accent">apart?</span>
          </motion.h2>
          <motion.p {...fadeUp} className="text-base text-foreground/65 sm:text-lg">
            A partnership-driven approach designed for sustainable growth and long-term reliability.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)]">
          {/* tile 1 — 3d carousel */}
          <motion.div
            {...fadeUp}
            className="md:col-span-4 md:row-span-2 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 hover-lift border border-white/5"
          >
            <div className="mb-8">
              <div className="text-xs uppercase tracking-[0.2em] text-accent">/ 01</div>
              <h3 className="mt-4 max-w-lg text-balance text-2xl font-semibold leading-[1.1] text-white sm:text-3xl">
                Over 100 projects successfully delivered
              </h3>
            </div>
            <Carousel3D />
          </motion.div>

          {/* tile 2 — revenue */}
          <motion.div
            {...fadeUp}
            whileHover={{ y: -4 }}
            className="md:col-span-2 rounded-3xl bg-mint-gradient p-8 ring-1 ring-black/5 hover-lift"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/60">/ 02</div>
            <h3 className="mt-4 text-balance text-2xl font-semibold leading-tight">
              $50M+ in revenue driven for our clients.
            </h3>
            <svg viewBox="0 0 200 90" className="mt-6 w-full">
              <defs>
                <linearGradient id="ar" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.55 0.13 150)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="oklch(0.55 0.13 150)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: EASE }}
                d="M0 78 Q40 68 60 56 T120 32 T200 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-foreground"
              />
              <path d="M0 78 Q40 68 60 56 T120 32 T200 6 L200 90 L0 90 Z" fill="url(#ar)" />
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.4, ease: EASE }}
                cx="200"
                cy="6"
                r="5"
                className="fill-accent"
              />
            </svg>
          </motion.div>

          {/* tile 3 — support */}
          <motion.div
            {...fadeUp}
            whileHover={{ y: -4 }}
            className="md:col-span-2 rounded-3xl bg-secondary p-8 hover-lift"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/60">/ 03</div>
            <h3 className="mt-4 text-2xl font-semibold leading-tight">
              Always here to support you.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/60">
              Clear, timely and dependable support for infrastructure, smart cities and industrial
              operations across the Kingdom.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium">24 / 7 online</span>
            </div>
          </motion.div>

          {/* tile 4 — trusted experts */}
          <motion.div
            {...fadeUp}
            whileHover={{ y: -4 }}
            className="md:col-span-3 rounded-3xl bg-secondary p-8 hover-lift"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/60">/ 04</div>
            <h3 className="mt-4 max-w-sm text-balance text-2xl font-semibold leading-tight">
              Trusted experts delivering real results for you.
            </h3>
            <div className="mt-6 flex -space-x-3">
              {[avatar4, avatar3, avatar2, avatar1].map((a, i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: EASE }}
                  src={a}
                  alt=""
                  className="h-12 w-12 rounded-full object-contain ring-2 ring-secondary"
                />
              ))}
              <div className="grid h-12 w-12 place-items-center rounded-full bg-foreground text-xs font-semibold text-background ring-2 ring-secondary">
                +42
              </div>
            </div>
            <div className="mt-5 text-xs text-foreground/60">Experienced team</div>
          </motion.div>

          {/* tile 5 — retention */}
          <motion.div
            {...fadeUp}
            whileHover={{ y: -4 }}
            className="md:col-span-3 rounded-3xl bg-foreground p-8 text-background hover-lift"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-mint">/ 05</div>
            <div className="mt-6 flex items-end gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="font-display text-7xl italic leading-none"
              >
                90%
              </motion.div>
              <div className="pb-2 text-sm text-background/70">
                client retention — they stay because we keep delivering value.
              </div>
            </div>
            <div className="mt-6 flex -space-x-2">
              {[partner1, partner2, partner3, partner4].map((a, i) => (
                <img
                  key={i}
                  src={a}
                  alt=""
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-foreground"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* solutions list */
const solutions = content.solutions.map((title, index) => ({
  n: String(index + 1).padStart(2, "0"),
  t: title,
  d: title,
}));

function SolutionsList() {
  return (
    <section id="projects" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-6 sm:grid-cols-[1.2fr_1fr]">
          <motion.h2
            {...fadeUp}
            className="text-balance text-4xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            Solutions & <span className="font-display italic font-normal">Technologies</span>
          </motion.h2>
          <motion.p {...fadeUp} className="text-base text-foreground/65 sm:text-lg">
            Smart, integrated solutions for energy, utilities and industry — enhancing efficiency,
            safety and reliability across operations.
          </motion.p>
        </div>

        <div className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10">
          {solutions.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-6 py-7 transition-colors hover:bg-mint-soft/30 sm:gap-12"
            >
              <span className="font-display text-2xl italic text-foreground/40 sm:text-3xl">
                {s.n}
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{s.t}</h3>
                <p className="mt-1 truncate text-sm text-foreground/60">{s.d}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* recent work carousel */
const recentWork = projects.map((title, index) => ({
  tag: title.split(" - ")[0] || "Project",
  title,
  img: [svcTraffic, khobarAirbase, moiHq, rashidTower, sabicHq, fasaliyaTower][index % 6],
}));

function RecentWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    const onScroll = () => setProgress(Math.max(0, Math.min(1, emblaApi.scrollProgress())));
    onSelect();
    onScroll();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("scroll", onScroll);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const intervalId = window.setInterval(() => emblaApi.scrollNext(), 3800);
    return () => window.clearInterval(intervalId);
  }, [emblaApi, isPaused]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      className="relative overflow-hidden bg-ink py-24 text-background sm:py-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-radial-mint opacity-40 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-radial-amber opacity-25 blur-3xl animate-float-slow"
      />
      {/* subtle grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="space-y-4">
            <motion.div {...fadeUp} className="flex items-center gap-3">
              <span className="h-px w-8 bg-background/40" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-background/50">
                Featured Portfolio
              </span>
            </motion.div>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="text-balance text-5xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
            >
              View our{" "}
              <span className="font-display italic font-normal text-mint">recent work</span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="max-w-xl text-base text-background/60 sm:text-lg"
            >
              Results that reflect real growth, clear direction, and long-term impact across the
              industries we serve.
            </motion.p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous project"
              className="group grid h-14 w-14 place-items-center rounded-full border border-background/15 bg-background/[0.03] text-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:bg-background hover:text-ink"
            >
              <ArrowLeft className="h-5 w-5 transition-transform duration-500 group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next project"
              className="group grid h-14 w-14 place-items-center rounded-full border border-background/15 bg-background/[0.03] text-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:bg-background hover:text-ink"
            >
              <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-14"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6 pl-1 sm:gap-8">
              {recentWork.map((w, i) => {
                const isActive = i === selected;
                return (
                  <div
                    key={`${w.title}-${i}`}
                    className="min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-[64%] lg:basis-[48%]"
                  >
                    <article
                      className={`group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-[6px] bg-ink ring-1 ring-background/10 transition-all duration-700 ease-out ${
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-70 scale-[0.97] hover:opacity-95"
                      }`}
                    >
                      <img
                        src={w.img}
                        alt={w.title}
                        loading="lazy"
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] ${
                          isActive
                            ? "grayscale-0 opacity-100"
                            : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-60" />

                      <span className="absolute right-8 top-8 font-mono text-[10px] tabular-nums tracking-tight text-background/40">
                        {pad(i + 1)} &mdash; {pad(recentWork.length)}
                      </span>

                      <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                        <div className="translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
                          <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.3em] text-mint">
                            {w.tag}
                          </span>
                          <h3 className="text-2xl font-light leading-tight text-background sm:text-3xl md:text-4xl">
                            {w.title}
                          </h3>
                          <div className="mt-6 h-px w-0 bg-background/40 transition-all duration-[900ms] ease-out group-hover:w-full" />
                          <div className="mt-5 flex items-center gap-3 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-background/80">
                              Explore project
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-background/80 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>

                      <div className="pointer-events-none absolute inset-0 rounded-[6px] ring-0 ring-mint/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-mint/30" />
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* controls row */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === selected ? "w-10 bg-mint" : "w-4 bg-background/20 hover:bg-background/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-4 font-mono text-xs tabular-nums text-background/50">
              <span className="text-background">{pad(selected + 1)}</span>
              <span className="h-px w-8 bg-background/20" />
              <span>{pad(count)}</span>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous"
                className="grid h-11 w-11 place-items-center rounded-full border border-background/15 text-background/70 hover:bg-background hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next"
                className="grid h-11 w-11 place-items-center rounded-full border border-background/15 text-background/70 hover:bg-background hover:text-ink"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* progress track */}
          <div className="relative mt-8 h-px w-full bg-background/10">
            <div
              className="absolute left-0 top-0 h-full bg-mint shadow-[0_0_12px_oklch(0.86_0.13_165/0.55)] transition-[width] duration-300 ease-out"
              style={{ width: `${Math.max(6, progress * 100)}%` }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* testimonial */
function Testimonial() {
  const metrics = [
    { k: "ZEEDA", v: "Innovative solutions" },
    { k: "CEER", v: "Cutting-edge technology" },
    { k: "TAHAKOM", v: "Reliable performance" },
    { k: "SATECH", v: "Sustainable practices" },
    { k: "Saudi Aramco", v: "Reliable solutions" },
    { k: "RCRC", v: "Trustworthy partner" },
  ];
  return (
    <section className="bg-foreground py-24 text-background sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-3xl">
          <Pill>What our clients say</Pill>
          <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Hear from clients on how we helped them gain{" "}
            <span className="font-display italic font-normal text-mint">clarity</span> and{" "}
            <span className="font-display italic font-normal text-mint">progress</span>.
          </h2>
        </motion.div>

        <div className="mt-12 overflow-hidden">
          <div className="flex w-max animate-marquee gap-4 whitespace-nowrap">
            {[...metrics, ...metrics, ...metrics].map((m, i) => (
              <div
                key={i}
                className="flex min-w-[180px] flex-col rounded-2xl border border-background/15 bg-background/5 px-6 py-5"
              >
                <span className="font-display text-3xl italic">{m.k}</span>
                <span className="mt-1 text-xs text-background/60">{m.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 rounded-3xl border border-background/10 bg-background/5 p-8 sm:grid-cols-[1fr_auto] sm:items-end sm:p-10">
          <p className="font-display text-2xl leading-snug sm:text-3xl">“{company.ceo.quote}”</p>
          <div className="flex items-center gap-4">
            <img src={ceo} alt="" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <div className="font-semibold">{company.ceo.name}</div>
              <div className="text-sm text-background/60">{company.ceo.title}</div>
              <div className="mt-1 flex items-center gap-0.5 text-[#D4A72C]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-2 text-xs text-background/60">Trusted partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-mint-soft/50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div {...fadeUp}>
          <Pill>Let's build it together</Pill>
        </motion.div>
        <motion.h2
          {...fadeUp}
          className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Engineered for <span className="font-display italic font-normal">reliability.</span>
          <br />
          Designed for <span className="font-display italic font-normal text-accent">growth.</span>
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="mx-auto mt-6 max-w-xl text-base text-foreground/65 sm:text-lg"
        >
          Tell us about your project. We'll respond within one business day with a clear next step.
        </motion.p>
        <motion.div {...fadeUp} className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="tel:+966114803338">
            <PrimaryButton>{callToAction.message}</PrimaryButton>
          </a>
          <a href={`mailto:${callToAction.email}`}>
            <GhostButton>{callToAction.email}</GhostButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Bento />
      <SolutionsList />
      <RecentWork />
      <Testimonial />
      <CTA />
      <SiteFooter />
    </main>
  );
}
