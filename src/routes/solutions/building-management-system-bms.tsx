import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/solutions/building-management-system-bms")({
  head: () => ({
    meta: [
      {
        title: "Building Management System (BMS) in Saudi Arabia | Saudi Controls",
      },
      {
        name: "description",
        content:
          "Saudi Controls delivers Building Management System (BMS) solutions in Saudi Arabia for centralized HVAC, lighting, energy, security and building automation, including design, integration, installation and maintenance.",
      },
      {
        name: "keywords",
        content:
          "building management system Saudi Arabia, BMS Saudi Arabia, BMS solutions, BMS services, building automation system, building automation Saudi Arabia, BMS company Saudi Arabia, BMS contractor Saudi Arabia, BMS integration, HVAC controls, BMS installation, BMS maintenance, BMS commissioning",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content: "Building Management System (BMS) in Saudi Arabia | Saudi Controls",
      },
      {
        property: "og:description",
        content:
          "End-to-end Building Management System and building automation solutions in Saudi Arabia from Saudi Controls.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://www.saudicontrols.com/solutions/building-management-system-bms",
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
        content: "Building Management System (BMS) in Saudi Arabia | Saudi Controls",
      },
      {
        name: "twitter:description",
        content:
          "Building Management System, building automation, HVAC controls and systems integration solutions in Saudi Arabia.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.saudicontrols.com/solutions/building-management-system-bms",
      },
    ],
  }),

  component: BuildingManagementSystemPage,
});

const services = [
  {
    number: "01",
    title: "BMS Design & Engineering",
    description:
      "We develop BMS architectures based on the building's operational requirements, equipment, control philosophy and integration requirements.",
  },
  {
    number: "02",
    title: "BMS Installation & Implementation",
    description:
      "Our engineering teams support the installation and implementation of controllers, sensors, field devices, communication networks and BMS workstations.",
  },
  {
    number: "03",
    title: "System Integration",
    description:
      "We integrate building equipment and subsystems into a centralized management platform using appropriate communication and integration technologies.",
  },
  {
    number: "04",
    title: "BMS Programming & Configuration",
    description:
      "Controllers, sequences of operation, alarms, schedules, graphics and control parameters are configured according to project requirements.",
  },
  {
    number: "05",
    title: "Monitoring & Centralized Control",
    description:
      "Operators can monitor equipment status, alarms, temperatures, energy information and other building parameters through a centralized interface.",
  },
  {
    number: "06",
    title: "Commissioning & Testing",
    description:
      "We support testing, commissioning and verification of BMS points, control sequences, alarms, graphics and integrated systems.",
  },
  {
    number: "07",
    title: "Maintenance & Technical Support",
    description:
      "Ongoing support helps maintain system availability, identify faults and ensure that the BMS continues to meet operational requirements.",
  },
  {
    number: "08",
    title: "BMS Upgrades & Modernization",
    description:
      "Existing building automation systems can be upgraded, expanded or integrated with newer technologies to improve functionality and visibility.",
  },
];

const bmsSystems = [
  "HVAC and air-conditioning systems",
  "Chillers and chilled-water systems",
  "Air handling units (AHUs)",
  "Fan coil units (FCUs)",
  "Variable air volume (VAV) systems",
  "Building lighting systems",
  "Electrical and energy monitoring",
  "Power meters",
  "Pumps and mechanical equipment",
  "Temperature and humidity sensors",
  "Indoor air-quality monitoring",
  "Access control interfaces",
  "Fire and life-safety interfaces",
  "IoT and building automation systems",
];

const benefits = [
  {
    title: "Energy Efficiency",
    description:
      "A BMS provides visibility into building energy consumption and allows operators to optimize HVAC, lighting and other energy-consuming equipment.",
  },
  {
    title: "Centralized Monitoring",
    description:
      "Instead of monitoring individual systems separately, operators can access information from multiple building systems through a centralized BMS interface.",
  },
  {
    title: "Improved HVAC Performance",
    description:
      "BMS technology enables monitoring and control of HVAC equipment such as chillers, AHUs, FCUs, pumps and ventilation systems.",
  },
  {
    title: "Real-Time Alarms",
    description:
      "A BMS can generate alarms when equipment or monitored parameters move outside predefined limits, allowing facility teams to respond more quickly.",
  },
  {
    title: "Predictive & Preventive Maintenance",
    description:
      "Historical trends and equipment data can help maintenance teams identify abnormal operating conditions before they develop into major failures.",
  },
  {
    title: "Improved Occupant Comfort",
    description:
      "By continuously monitoring environmental conditions, BMS systems can help maintain appropriate temperature, humidity and indoor conditions.",
  },
  {
    title: "Centralized Facility Operations",
    description:
      "A BMS gives facility managers a consolidated view of building systems, helping them manage complex facilities more efficiently.",
  },
];

const applications = [
  {
    title: "Commercial Buildings & Offices",
    description:
      "Centralized HVAC, lighting, energy monitoring and building automation for offices and commercial facilities.",
  },
  {
    title: "Hospitals & Healthcare Facilities",
    description:
      "Monitoring and control of critical environmental conditions and building systems where reliability and precise control are important.",
  },
  {
    title: "Hotels & Hospitality",
    description:
      "Building automation for guest comfort, HVAC operation, energy management and centralized facility monitoring.",
  },
  {
    title: "Industrial Facilities",
    description:
      "Monitoring and control of mechanical, electrical and environmental systems across industrial facilities.",
  },
  {
    title: "Shopping Malls & Retail",
    description:
      "Integrated control of HVAC, lighting, energy consumption and other building systems.",
  },
  {
    title: "Government & Institutional Buildings",
    description:
      "Centralized building automation and monitoring for large government and institutional facilities.",
  },
  {
    title: "Educational Facilities",
    description:
      "Energy-efficient HVAC, lighting and environmental monitoring for schools, universities and other educational buildings.",
  },
];

const faqs = [
  {
    question: "What does BMS stand for?",
    answer:
      "BMS stands for Building Management System. It is a centralized system used to monitor and control building systems such as HVAC, lighting, energy and other connected equipment.",
  },
  {
    question: "What is the purpose of a BMS?",
    answer:
      "The primary purpose of a BMS is to improve the monitoring, control and operation of building systems while supporting energy efficiency, occupant comfort and reliable facility operations.",
  },
  {
    question: "What systems can a BMS control?",
    answer:
      "Depending on the system architecture, a BMS can monitor and control HVAC equipment, chillers, AHUs, FCUs, pumps, lighting, energy meters and other connected building systems.",
  },
  {
    question: "What is the difference between BMS and BAS?",
    answer:
      "BMS means Building Management System, while BAS means Building Automation System. The terms are often used interchangeably, although the exact scope can vary between projects and vendors.",
  },
  {
    question: "Can a BMS reduce energy consumption?",
    answer:
      "Yes. A BMS can help identify energy waste and optimize equipment operation through scheduling, monitoring, automated controls and energy management strategies.",
  },
  {
    question: "Can a BMS integrate with existing building systems?",
    answer:
      "Yes. Modern BMS platforms can integrate with supported existing equipment and third-party systems using appropriate communication protocols and integration technologies.",
  },
  {
    question: "Does Saudi Controls provide BMS services in Saudi Arabia?",
    answer:
      "Yes. Saudi Controls provides BMS and building automation solutions as part of its systems integration capabilities in Saudi Arabia.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Building Management System (BMS) in Saudi Arabia",
  serviceType: "Building Management System and Building Automation",
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
    "Building Management System (BMS) solutions in Saudi Arabia covering design, integration, installation, programming, commissioning, monitoring, maintenance and building automation.",
  url: "https://www.saudicontrols.com/solutions/building-management-system-bms",
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

function BuildingIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M4 21V8l8-5 8 5v13M8 21v-7h8v7M8 10h.01M12 10h.01M16 10h.01M8 6h.01M12 6h.01M16 6h.01"
      />
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

function BuildingManagementSystemPage() {
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
            <div className="mb-6">
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground/60 transition-colors hover:text-foreground"
              >
                <ArrowIcon />
                Back to Solutions
              </a>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/70 backdrop-blur-sm">
                  <BuildingIcon />
                  Building Automation & Systems Integration
                </span>

                <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5rem]">
                  Building Management System (BMS) in Saudi Arabia
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/65 md:text-xl">
                  Intelligent Building Management Systems for smarter, more efficient and connected
                  buildings across Saudi Arabia.
                </p>

                <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/65">
                  Saudi Controls delivers end-to-end BMS solutions covering system design,
                  integration, installation, programming, commissioning, monitoring, maintenance and
                  building automation.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {/* <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    Request a BMS Consultation
                    <ArrowIcon />
                  </a> */}

                  <a
                    href="#bms-services"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                  >
                    Explore BMS Services
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] border border-foreground/10 bg-white/70 p-5 shadow-lift backdrop-blur-xl">
                  <div className="mb-5 flex items-center justify-between border-b border-foreground/10 pb-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                        Building Management System
                      </p>
                      <p className="mt-1 text-lg font-medium text-foreground">
                        Central Control Dashboard
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-mint-soft px-3 py-1.5 text-xs font-medium text-accent">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      System Online
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "24°C", label: "HVAC" },
                      { value: "82%", label: "Energy" },
                      { value: "47", label: "Equipment" },
                      { value: "03", label: "Alarms" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-foreground/10 bg-secondary p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">
                          {item.label}
                        </p>
                        <p className="mt-2 text-2xl font-display text-foreground">{item.value}</p>
                        <p className="mt-1 text-xs text-foreground/50">
                          {item.label === "HVAC" && "Normal operation"}
                          {item.label === "Energy" && "Monitoring active"}
                          {item.label === "Equipment" && "Devices online"}
                          {item.label === "Alarms" && "Requires attention"}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-foreground/10 bg-secondary/60 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-foreground/50">
                      <span>Building systems</span>
                      <span>Live</span>
                    </div>

                    <div className="mt-4 space-y-3 text-sm text-foreground/75">
                      {[
                        "HVAC & Chillers",
                        "Energy & Power Monitoring",
                        "Lighting & Automation",
                        "Sensors & IoT",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckIcon />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/50">
                What is a BMS?
              </div>

              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Intelligent control for <span className="italic text-accent">modern buildings</span>
                .
              </h2>

              <p className="mt-6 text-base leading-relaxed text-foreground/65 md:text-lg">
                A <strong className="text-foreground">Building Management System (BMS)</strong> is
                an integrated building automation and control platform that enables organizations to
                monitor, manage and optimize critical building systems from a centralized interface.
              </p>

              <p className="mt-5 text-base leading-relaxed text-foreground/65">
                Saudi Controls provides Building Management System solutions across Saudi Arabia,
                helping building owners and facility operators improve operational visibility,
                energy performance, occupant comfort and system reliability.
              </p>

              <p className="mt-5 text-base leading-relaxed text-foreground/65">
                A modern BMS can collect information from sensors, controllers, meters and connected
                equipment and present it through a centralized operator workstation, dashboard or
                web-based interface.
              </p>
            </div>

            <div className="rounded-[2rem] border border-foreground/10 bg-secondary/50 p-7 shadow-card">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-soft text-accent">
                  <BuildingIcon />
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    Systems a BMS can integrate
                  </h3>
                  <p className="mt-1 text-sm text-foreground/60">
                    Centralized monitoring and control
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {bmsSystems.map((system) => (
                  <div
                    key={system}
                    className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-background p-3 text-sm text-foreground/75"
                  >
                    <span className="mt-0.5 text-accent">
                      <CheckIcon />
                    </span>
                    <span>{system}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="bms-services"
          className="border-t border-foreground/10 bg-secondary/40 py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/50">
                Saudi Controls BMS Solutions
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                End-to-end BMS services in <span className="italic text-accent">Saudi Arabia</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground/65 md:text-lg">
                We provide BMS solutions for new construction, existing buildings and facility
                modernization programs, from engineering and integration through commissioning and
                ongoing support.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-[1.75rem] border border-foreground/10 bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-soft text-sm font-bold text-accent">
                    {service.number}
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/68">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/50">
                BMS Architecture
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                How does a Building Management System{" "}
                <span className="italic text-accent">work?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground/65 md:text-lg">
                A BMS combines field devices, controllers, communication networks and software to
                provide centralized monitoring and automated control.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Field Devices",
                  text: "Sensors and meters collect temperature, humidity, pressure, energy, flow, occupancy and other building data.",
                },
                {
                  number: "02",
                  title: "Controllers",
                  text: "Building controllers receive field data and execute programmed control logic for connected equipment.",
                },
                {
                  number: "03",
                  title: "Communication Network",
                  text: "Controllers and devices communicate through supported building automation protocols and networks such as BACnet and Modbus.",
                },
                {
                  number: "04",
                  title: "BMS Software",
                  text: "The central interface provides equipment monitoring, control, alarms, schedules, trends, historical data and reports.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.75rem] border border-foreground/10 bg-card p-6 shadow-card"
                >
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-medium text-foreground">{step.title}</h3>
                  <p className="mt-3 leading-7 text-foreground/68">{step.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] bg-foreground p-6 text-background sm:p-8">
              <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.22em] text-background/70">
                BMS Control Architecture
              </p>

              <div className="grid items-center gap-4 text-center sm:grid-cols-5">
                <div className="rounded-2xl border border-background/15 bg-white/5 px-4 py-5 text-sm font-medium text-background">
                  Sensors
                  <br />& Meters
                </div>
                <div className="hidden text-2xl text-accent sm:block">→</div>
                <div className="rounded-2xl border border-background/15 bg-white/5 px-4 py-5 text-sm font-medium text-background">
                  BMS
                  <br />
                  Controllers
                </div>
                <div className="hidden text-2xl text-accent sm:block">→</div>
                <div className="rounded-2xl bg-accent px-4 py-5 text-sm font-medium text-background">
                  Central BMS
                  <br />
                  Platform
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-background/70">
                Monitoring → Control Logic → Equipment Automation → Analytics
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-foreground py-24 text-background md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-background/70">
                Why BMS?
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Benefits of a <span className="italic text-accent">Building Management System</span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-background/70 md:text-lg">
                A properly engineered BMS helps facility teams improve visibility, operational
                control, comfort and building performance.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-[1.75rem] border border-background/10 bg-white/5 p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <CheckIcon />
                  </div>
                  <h3 className="text-xl font-medium text-background">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-background/70">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/50">
                Applications
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                BMS applications across <span className="italic text-accent">Saudi Arabia</span>.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/65 md:text-lg">
                Saudi Controls can tailor building automation and BMS solutions to the operational
                requirements of different facility types.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {applications.map((application) => (
                <article
                  key={application.title}
                  className="group rounded-[1.75rem] border border-foreground/10 bg-secondary/50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-soft text-accent transition group-hover:bg-accent/10">
                    <BuildingIcon />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{application.title}</h3>
                  <p className="mt-3 leading-7 text-foreground/68">{application.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-secondary/40 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/50">
                BMS Integration
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                BMS integration & <span className="italic text-accent">building automation</span>.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-foreground/65 md:text-lg">
                A major advantage of a modern Building Management System is the ability to integrate
                different building systems into a unified operational environment.
              </p>

              <p className="mt-5 text-base leading-relaxed text-foreground/65">
                Saudi Controls specializes in systems integration, allowing BMS platforms to
                exchange information with supported building equipment and technologies.
              </p>

              <p className="mt-5 text-base leading-relaxed text-foreground/65">
                Depending on the project, integration can include HVAC, lighting, energy monitoring,
                sensors, IoT devices and other building systems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "HVAC + BMS",
                  items: ["Chillers", "AHUs", "FCUs", "VAVs", "Pumps"],
                },
                {
                  title: "Energy + BMS",
                  items: [
                    "Energy meters",
                    "Electrical panels",
                    "Power monitoring",
                    "Energy dashboards",
                  ],
                },
                {
                  title: "Building Systems + BMS",
                  items: ["Lighting", "Security interfaces", "Sensors", "IoT devices"],
                },
                {
                  title: "Operational Interface",
                  items: ["Central monitoring", "Alarms", "Trends", "Reports"],
                },
              ].map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.75rem] border border-foreground/10 bg-card p-6 shadow-card"
                >
                  <h3 className="text-xl font-medium text-foreground">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/75">
                        <span className="text-accent">
                          <CheckIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/50">
                Saudi Controls
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Why choose <span className="italic text-accent">Saudi Controls</span> for BMS?
              </h2>

              <p className="mt-6 text-base leading-relaxed text-foreground/65 md:text-lg">
                Saudi Controls combines systems integration, engineering and technology expertise to
                deliver building automation solutions designed around the requirements of each
                facility.
              </p>

              <p className="mt-5 text-base leading-relaxed text-foreground/65">
                Our approach treats BMS as part of the wider building technology ecosystem, helping
                organizations connect systems, improve visibility and support more efficient
                facility operations.
              </p>

              <a
                href="/"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
              >
                Learn more about Saudi Controls
                <ArrowIcon />
              </a>
            </div>

            <div className="rounded-[2rem] border border-foreground/10 bg-foreground p-8 text-background shadow-lift">
              <h3 className="text-xl font-medium text-background">Our BMS capabilities</h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "BMS system design",
                  "Building automation",
                  "Control system integration",
                  "HVAC controls",
                  "Energy monitoring",
                  "IoT integration",
                  "Communication systems",
                  "System programming",
                  "Commissioning",
                  "Maintenance and technical support",
                ].map((capability) => (
                  <div
                    key={capability}
                    className="flex gap-3 rounded-2xl border border-background/10 bg-white/5 p-3 text-sm text-background/80"
                  >
                    <span className="text-accent">
                      <CheckIcon />
                    </span>
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-secondary/40 py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/50">
                Frequently Asked Questions
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Questions about <span className="italic text-accent">BMS</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
                Common questions about Building Management Systems, building automation and BMS
                services in Saudi Arabia.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[1.5rem] border border-foreground/10 bg-card p-5 shadow-card"
                >
                  <summary className="cursor-pointer list-none pr-8 font-medium text-foreground">
                    <span className="relative block">
                      {faq.question}
                      <span className="absolute right-0 top-0 text-xl font-normal text-accent transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-foreground/10 pt-4 text-base leading-7 text-foreground/68">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-foreground/10 bg-foreground py-28 text-background md:py-32">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-background/70">
                Building Management System
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Ready to modernize your <span className="italic text-accent">building?</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-background/70 md:text-lg">
                Improve building visibility, automation and operational efficiency with a
                professionally engineered Building Management System in Saudi Arabia.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5"
              >
                Request a BMS Consultation
                <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground/10 transition-transform group-hover:rotate-45">
                  <ArrowIcon />
                </span>
              </a> */}

              <a
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-medium text-background/90 transition-colors hover:bg-background/10"
              >
                <ArrowIcon />
                Back to Solutions
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
