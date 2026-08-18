import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  CloudCog,
  Cpu,
  Gauge,
  Globe2,
  HardHat,
  Layers3,
  MapPin,
  MapPinned,
  Network,
  Radar,
  Radio,
  Settings2,
  ShieldCheck,
  Signal,
  TimerReset,
  TrafficCone,
  Truck,
  Video,
  Wrench,
  Zap,
} from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const Route = createFileRoute("/solutions/intelligent-traffic-system-its")({
  head: () => ({
    meta: [
      {
        title: "Intelligent Traffic System (ITS) in Saudi Arabia | Saudi Controls",
      },
      {
        name: "description",
        content:
          "Saudi Controls delivers Intelligent Traffic System (ITS) solutions in Saudi Arabia for adaptive signal control, traffic monitoring, smart mobility, congestion management, emergency priority, public transport coordination and data-driven city operations.",
      },
      {
        name: "keywords",
        content:
          "intelligent traffic system Saudi Arabia, ITS Saudi Arabia, smart traffic management, adaptive traffic signals, traffic signal control, urban mobility solutions, smart city traffic, traffic monitoring system, ATCS Saudi Arabia, congestion management, ITS company Saudi Arabia",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content: "Intelligent Traffic System (ITS) in Saudi Arabia | Saudi Controls",
      },
      {
        property: "og:description",
        content:
          "Adaptive traffic management, intelligent signal control and smart mobility solutions designed for safer, faster and more efficient urban transport networks.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://www.saudicontrols.com/solutions/intelligent-traffic-system-its",
      },
      {
        property: "og:site_name",
        content: "Saudi Controls",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Intelligent Traffic System (ITS) in Saudi Arabia | Saudi Controls",
      },
      {
        name: "twitter:description",
        content:
          "Intelligent traffic system and smart mobility solutions for safer, faster and more efficient transport operations in Saudi Arabia.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.saudicontrols.com/solutions/intelligent-traffic-system-its",
      },
    ],
  }),

  component: IntelligentTrafficSystemPage,
});

const services = [
  {
    number: "01",
    title: "Traffic Signal Control",
    description:
      "Adaptive traffic lighting and control logic that responds in real time to traffic demand, intersection conditions and corridor performance.",
  },
  {
    number: "02",
    title: "Congestion & Flow Management",
    description:
      "Data-driven optimization techniques reduce queue lengths, improve intersection throughput and improve network efficiency during periods of heavy demand.",
  },
  {
    number: "03",
    title: "Emergency & Transit Priority",
    description:
      "Priority logic gives emergency vehicles, buses and public transport corridors the green wave they need without compromising safety or network balance.",
  },
  {
    number: "04",
    title: "Monitoring & Analytics",
    description:
      "Traffic data, travel times, delays and turning movements are collected continuously to support operational decision-making and performance reviews.",
  },
  {
    number: "05",
    title: "Integration & Interoperability",
    description:
      "We integrate traffic controllers, detection systems, communication networks and central management platforms within a unified operations architecture.",
  },
  {
    number: "06",
    title: "System Commissioning",
    description:
      "Testing, calibration, tuning and validation ensure that new or upgraded ITS solutions work reliably under real operating conditions.",
  },
  {
    number: "07",
    title: "Maintenance & Support",
    description:
      "Operational support, performance monitoring and maintenance planning help extend system uptime and deliver sustained network improvements.",
  },
  {
    number: "08",
    title: "Future-Ready Upgrades",
    description:
      "Legacy systems can be modernized with new detection, communications, analytics and control features to improve long-term resilience.",
  },
];

const technologySolutions = [
  {
    icon: Video,
    title: "Traffic Monitoring Systems",
    description:
      "Real-time traffic monitoring using cameras, sensors, vehicle detection and intelligent video analytics.",
  },
  {
    icon: Radar,
    title: "ANPR & Vehicle Detection",
    description:
      "Automatic number plate recognition, vehicle classification and roadside detection integrated with central systems.",
  },
  {
    icon: CircleDot,
    title: "Automatic Incident Detection",
    description:
      "Detect stopped vehicles, wrong-way movements, congestion and roadway incidents for faster response.",
  },
  {
    icon: TrafficCone,
    title: "Adaptive Traffic Signals",
    description:
      "Intelligent traffic signal control designed to respond to real-time traffic demand and corridor conditions.",
  },
  {
    icon: Radio,
    title: "Variable Message Signs",
    description:
      "Dynamic roadside messaging systems for traveler information, warnings, incidents and guidance.",
  },
  {
    icon: Network,
    title: "Traffic Control Centers",
    description:
      "Integrated operations environments connecting field devices, communications, analytics and operators.",
  },
];

const lifecycle = [
  {
    number: "01",
    title: "Consultation & Requirements",
    text: "Understand project objectives, roadway conditions, operational requirements and stakeholder needs.",
  },
  {
    number: "02",
    title: "ITS System Design",
    text: "Develop architecture, device layouts, communications, integration requirements and technical specifications.",
  },
  {
    number: "03",
    title: "Engineering & Integration",
    text: "Integrate roadside equipment, software platforms, communications and existing infrastructure.",
  },
  {
    number: "04",
    title: "Implementation",
    text: "Coordinate installation, configuration, networking and field deployment.",
  },
  {
    number: "05",
    title: "Testing & Commissioning",
    text: "Validate equipment, communications, software interfaces, alarms and operational scenarios.",
  },
  {
    number: "06",
    title: "Operation & Maintenance",
    text: "Support long-term availability through maintenance, monitoring, troubleshooting and lifecycle support.",
  },
];

const systems = [
  "Adaptive signal control systems",
  "Urban traffic management centers",
  "Traffic detectors and sensors",
  "CCTV and video analytics",
  "Public transport priority systems",
  "Emergency vehicle preemption",
  "Traffic signal coordination",
  "Road user information systems",
  "Smart parking and corridor monitoring",
  "Incident detection and response workflows",
  "Road network analytics and reporting",
  "Communication backbone and field devices",
];

const urbanFeatures = [
  "Intersection monitoring",
  "Adaptive traffic signal control",
  "Urban congestion management",
  "Pedestrian and vehicle detection",
  "Traffic camera integration",
  "Centralized signal monitoring",
];

const highwayFeatures = [
  "Long-distance traffic monitoring",
  "Automatic incident detection",
  "ANPR and vehicle recognition",
  "Variable message signs",
  "Highway CCTV",
  "Vehicle classification and detection",
];

const benefits = [
  {
    title: "Reduced Congestion",
    description:
      "Real-time traffic control and data-informed signal timing help keep vehicles moving and reduce unnecessary delay at intersections.",
  },
  {
    title: "Safer Roads",
    description:
      "Improved signal coordination, emergency priority, and monitoring tools help reduce unsafe traffic behavior and improve response times.",
  },
  {
    title: "Better Public Transport",
    description:
      "Transit priority strategies support smoother bus and fleet movement, making public transport more reliable and predictable.",
  },
  {
    title: "Improved Situational Awareness",
    description:
      "Operations teams gain a clearer picture of traffic conditions, incidents and network performance across multiple corridors.",
  },
  {
    title: "Lower Emissions",
    description:
      "Reducing stop-start traffic patterns and optimizing travel flow helps cut unnecessary fuel use and emissions.",
  },
  {
    title: "Scalable City Growth",
    description:
      "ITS platforms can grow with the transportation network and adapt to future mobility demands, infrastructure changes and digital upgrades.",
  },
];

const applications = [
  {
    title: "Urban Road Networks",
    description:
      "Adaptive signal control and traffic monitoring for city corridors, urban arterials and mixed-traffic intersections.",
  },
  {
    title: "Public Transport Corridors",
    description:
      "Bus priority, corridor coordination and network optimization to improve transit reliability and rider confidence.",
  },
  {
    title: "Smart Cities & Municipalities",
    description:
      "Transport intelligence for city operations centers, integrated mobility programs and data-centered urban planning.",
  },
  {
    title: "Commercial & Industrial Zones",
    description:
      "Traffic management for busy logistics hubs, industrial routes and high-volume access points.",
  },
  {
    title: "Airport & Port Access Roads",
    description:
      "High-capacity traffic coordination for entry points, circulation roads and operationally sensitive transport corridors.",
  },
  {
    title: "Education & Institutional Districts",
    description:
      "Safer and smoother traffic flow around campuses, schools and large public facilities.",
  },
];

const faqs = [
  {
    question: "What is an Intelligent Traffic System (ITS)?",
    answer:
      "An Intelligent Traffic System is a digital traffic management approach that uses sensors, controllers, analytics and communications to monitor and improve transport operations in real time.",
  },
  {
    question: "How does ITS improve traffic flow?",
    answer:
      "ITS improves traffic flow by adapting signal timing to demand, coordinating corridors, prioritizing transit and emergency vehicles, and helping operators detect and respond to incidents quickly.",
  },
  {
    question: "Can ITS be integrated with existing traffic infrastructure?",
    answer:
      "Yes. Many ITS deployments are designed to integrate with existing signal controllers, surveillance equipment, communication networks and city control systems using open standards and phased modernization strategies.",
  },
  {
    question: "Is ITS only for large cities?",
    answer:
      "No. ITS solutions can be scaled to fit smaller cities, major corridors, campuses, industrial zones and strategic transport networks depending on operational needs and traffic conditions.",
  },
  {
    question: "Does Saudi Controls provide ITS services in Saudi Arabia?",
    answer:
      "Yes. Saudi Controls helps design, implement and support intelligent traffic and mobility solutions across Saudi Arabia to improve efficiency, safety and network performance.",
  },
  {
    question: "Can ITS systems connect to a traffic control center?",
    answer:
      "Yes. Field devices such as cameras, sensors, ANPR, VMS and traffic signals can be connected through network infrastructure to centralized traffic management and control-center platforms.",
  },
  {
    question: "Does Saudi Controls support operation and maintenance for ITS?",
    answer:
      "Yes. Long-term operation and maintenance can include preventive maintenance, corrective maintenance, troubleshooting, monitoring, equipment replacement and lifecycle support.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Intelligent Traffic System (ITS) in Saudi Arabia",
  serviceType: "Intelligent Transportation System and Traffic Management",
  provider: {
    "@type": "Organization",
    name: "Saudi Controls",
    url: "https://www.saudicontrols.com/",
  },
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  description:
    "Intelligent Traffic System (ITS) solutions in Saudi Arabia covering adaptive traffic signal control, highway and corridor management, monitoring, analytics, priority systems and smart mobility infrastructure.",
  url: "https://www.saudicontrols.com/solutions/intelligent-traffic-system-its",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 12H5M11 18l-6-6 6-6"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12 4 4L19 6" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            light ? "text-blue-400" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

function IntelligentTrafficSystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="bg-background text-foreground">
        <SiteNav />

        <section className="relative isolate overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
          <div className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-radial-mint opacity-70 blur-2xl" />
          <div className="pointer-events-none absolute -top-10 right-0 h-[22rem] w-[22rem] rounded-full bg-radial-amber opacity-60 blur-2xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(from_var(--color-background)_l_c_h_/_0.9))]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <motion.div {...fadeUp} className="mb-6">
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground/60 transition-colors hover:text-foreground"
              >
                <ArrowIcon />
                Back to Solutions
              </a>
            </motion.div>

            <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/80 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
                  <TrafficCone className="h-3.5 w-3.5" />
                  Intelligent Traffic Systems
                </div>

                <h1 className="mt-7 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl lg:text-[4.5rem]">
                  Smarter mobility for faster, safer, and more resilient cities.
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/70">
                  Saudi Controls delivers Intelligent Traffic Systems that optimize urban movement,
                  improve road safety, and support the smooth operation of critical transport
                  corridors.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#its-services"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5"
                  >
                    Explore capabilities
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5"
                  >
                    Talk to our team
                  </a>
                </div>

                <dl className="mt-10 grid max-w-xl grid-cols-3 gap-5">
                  {[
                    ["24/7", "Traffic visibility"],
                    ["Low", "Queue delay"],
                    ["Smart", "Signal response"],
                  ].map(([value, label], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="rounded-2xl border border-foreground/10 bg-background/70 p-4 backdrop-blur-sm"
                    >
                      <dt className="text-2xl font-bold tracking-tight text-foreground">{value}</dt>
                      <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-foreground/55">
                        {label}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-secondary/50 p-5 shadow-card">
                  <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                        Live operations
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-foreground">
                        Traffic Control Center
                      </h2>
                    </div>
                    <div className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      Online
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      { label: "Intersection flow", value: "86% efficient" },
                      { label: "Queue reduction", value: "-32%" },
                      { label: "Transit priority", value: "12 corridors" },
                      { label: "Incident detection", value: "< 90 sec" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-foreground/10 bg-background/80 p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-foreground/60">{item.label}</span>
                          <span className="text-sm font-semibold text-foreground">
                            {item.value}
                          </span>
                        </div>
                        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-foreground/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: item.value.includes("%")
                                ? "86%"
                                : item.value.includes("-32")
                                  ? "68%"
                                  : "77%",
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/50">
                What is ITS?
              </div>

              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Data-driven traffic intelligence for safer, smarter mobility.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-foreground/65 md:text-lg">
                Intelligent Traffic Systems connect signal controllers, sensors, surveillance,
                communication networks and analytics into a unified platform for safer roads and
                more efficient movement.
              </p>

              <p className="mt-5 text-base leading-relaxed text-foreground/65">
                At Saudi Controls, we design and support ITS deployments that help cities and
                operators improve intersection performance, reduce congestion, support public
                transport and respond faster to incidents and changing traffic demand.
              </p>

              <p className="mt-5 text-base leading-relaxed text-foreground/65">
                From major arterial corridors to strategic urban networks, intelligent systems can
                be configured to meet sustainability, safety and operational objectives at scale.
              </p>
            </div>

            <div className="rounded-[2rem] border border-foreground/10 bg-secondary/50 p-7 shadow-card">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: MapPinned, label: "Corridor monitoring" },
                  { icon: Signal, label: "Adaptive control" },
                  { icon: CarFront, label: "Traffic analytics" },
                  { icon: Gauge, label: "Real-time performance" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-foreground/10 bg-background/80 p-5"
                  >
                    <Icon className="h-7 w-7 text-foreground" />
                    <p className="mt-4 text-sm font-medium text-foreground/80">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="its-services"
          className="border-t border-foreground/10 bg-secondary/40 py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Core capabilities"
              title="Integrated systems for street-level performance and network visibility."
              description="Our ITS offering combines control, communications, field devices and analytics into a cohesive operating model for modern transport networks."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="rounded-[1.75rem] border border-foreground/10 bg-background p-6 shadow-card"
                >
                  <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                    {service.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/65">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="ITS technology stack"
              title="From roadside devices to central operations, every layer is connected."
              description="A modern ITS deployment needs detection, control, communications, analytics and a clear operational workflow to perform under real traffic conditions."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {technologySolutions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="rounded-[1.5rem] border border-foreground/10 bg-secondary/30 p-6"
                  >
                    <div className="mb-4 inline-flex rounded-full bg-background p-3 text-foreground shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-foreground/65">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Traffic systems"
              title="Technology that belongs in the real world — not only on paper."
              description="Our solutions are built around detection, control intelligence, communications and the decision-support tools operators rely on daily."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {systems.map((system, index) => (
                <motion.div
                  key={system}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="rounded-[1.5rem] border border-foreground/10 bg-secondary/30 p-5 text-left"
                >
                  <div className="mb-4 inline-flex rounded-full bg-white p-2 text-foreground shadow-sm">
                    <CheckIcon />
                  </div>
                  <p className="text-base font-medium text-foreground/80">{system}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] bg-foreground p-6 text-background sm:p-8">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { value: "32%", label: "Average queue reduction" },
                  { value: "24/7", label: "Network monitoring" },
                  { value: "99%", label: "Operational visibility" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-2xl border border-background/10 bg-background/5 p-5"
                  >
                    <div className="text-4xl font-bold tracking-tight text-background">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm text-background/70">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Built for Saudi roads"
              title="Urban traffic and highways need different ITS strategies."
              description="Saudi Arabia’s transport ecosystem spans dense urban corridors as well as major road links and logistics routes, so each deployment needs a tailored control strategy."
              light
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-2xl font-semibold text-white">Urban ITS</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Urban deployments focus on managing intersections, traffic demand, congestion and
                  real-time conditions across dense road networks.
                </p>
                <ul className="mt-7 space-y-3">
                  {urbanFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-slate-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Truck className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-2xl font-semibold text-white">Highway ITS</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Highway deployments require reliable long-distance monitoring, incident awareness,
                  traveler information and communications infrastructure.
                </p>
                <ul className="mt-7 space-y-3">
                  {highwayFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-slate-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-foreground py-24 text-background md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Benefits"
              title="Operational gains that make transportation calmer and smarter."
              light
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-4 inline-flex rounded-full bg-white/10 p-2">
                    <Zap className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Applications
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                ITS systems designed for dynamic and demanding transport environments.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {applications.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-foreground/10 bg-secondary/30 p-6"
                >
                  <div className="mb-4 inline-flex rounded-full bg-background p-2 text-foreground">
                    <TimerReset className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/65">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-secondary/40 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/50">
                Why it matters
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Better mobility decisions start with better visibility.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/65 md:text-lg">
                When transport data is accurate, connected and actionable, operators can manage
                demand, reduce delays and make safer road decisions across the entire network.
              </p>
              <p className="mt-5 text-base leading-relaxed text-foreground/65">
                Saudi Controls works closely with public agencies, municipalities, developers and
                infrastructure stakeholders to deploy transport systems that are reliable,
                maintainable and aligned with long-term city goals.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Safer roads",
                  text: "Improved operational awareness and coordinated response.",
                },
                {
                  icon: Gauge,
                  title: "Proactive management",
                  text: "Live data supports faster intervention and tuning.",
                },
                {
                  icon: Zap,
                  title: "Energy efficient",
                  text: "Reduced idle time and better corridor performance.",
                },
                {
                  icon: Signal,
                  title: "Smart coordination",
                  text: "Signals and devices work together across the network.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-foreground/10 bg-background p-5 shadow-card"
                >
                  <Icon className="h-7 w-7 text-foreground" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">FAQ</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Common questions about ITS.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[1.5rem] border border-foreground/10 bg-secondary/30 p-5"
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-base leading-7 text-foreground/65">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-foreground/10 bg-foreground py-28 text-background md:py-32">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Build smarter movement
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Need a better transport system for your city, corridor or facility?
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5"
              >
                Start a conversation
                <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground/10 transition-transform group-hover:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-medium text-background/90 transition-colors hover:bg-background/10"
              >
                <ArrowIcon />
                View all solutions
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
