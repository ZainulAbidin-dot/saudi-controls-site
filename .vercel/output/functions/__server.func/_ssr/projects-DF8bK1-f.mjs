import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowUpRight, P as Building2, R as ArrowLeft, S as MapPin, _ as Plane, a as Trophy, m as Radio, p as ShieldCheck, t as Zap, w as Handshake, z as Sparkles } from "../_libs/lucide-react.mjs";
import { n as SiteNav, t as SiteFooter } from "./SiteFooter-BCI8bdFC.mjs";
import { n as useScroll, t as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as svc_ev_default } from "./svc-ev-BrRBicNa.mjs";
import { t as svc_bms_2_default } from "./svc-bms-2-DVniynm9.mjs";
import { t as svc_security_3_default } from "./svc-security-3-CvnVouFC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DF8bK1-f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EASE = [
	.16,
	1,
	.3,
	1
];
var fadeUp = {
	initial: {
		opacity: 0,
		y: 28
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		margin: "-80px"
	},
	transition: {
		duration: .8,
		ease: EASE
	}
};
var milestones = [
	{
		year: "2024",
		title: "Nationwide EV Charging Rollout",
		subtitle: "Strategic mobility partner",
		body: "Engineered and commissioned a multi-city network of fast-charging stations, integrating energy metering, payment systems and remote diagnostics into a single operations layer.",
		category: "Mobility",
		tag: "Flagship"
	},
	{
		year: "2024",
		title: "Jizan Airport",
		subtitle: "End-to-end intelligent infrastructure",
		body: "Designed, supplied and installed the full ICT and low-current backbone for a new regional airport — covering BMS, security, public address and structured cabling.",
		category: "Aviation",
		tag: "Flagship"
	},
	{
		year: "2024",
		title: "Sports District Traffic Control",
		subtitle: "Advanced ATCS deployment",
		body: "Delivered an advanced traffic control platform for a marquee sports and entertainment district, balancing event surges with everyday city flow.",
		category: "Mobility"
	},
	{
		year: "2024",
		title: "Heritage District SCADA & RTUs",
		subtitle: "50 RTUs and a unified SCADA core",
		body: "Built a unified SCADA backbone and 50 remote terminal units for a flagship heritage development authority, giving operators a single window across utilities.",
		category: "Industrial"
	},
	{
		year: "2023",
		title: "Airbase Atmosphere & Perimeter Suite",
		subtitle: "Mission-critical defense integration",
		body: "Implemented atmosphere detection, perimeter intrusion and security gate access control across a major air base, hardened for 24/7 operations.",
		category: "Security",
		tag: "Defense"
	},
	{
		year: "2022",
		title: "BMS for 11 Academy Buildings",
		subtitle: "Joint venture delivery",
		body: "Designed and commissioned a unified building management system across 11 academy buildings, standardizing controls and energy reporting at scale.",
		category: "Buildings"
	},
	{
		year: "2021",
		title: "BMS for 71 Academy Buildings",
		subtitle: "Largest BMS contract to date",
		body: "Extended a single BMS architecture across 71 buildings — a step-change in operational visibility, alarm response and lifecycle service planning.",
		category: "Buildings",
		tag: "Flagship"
	},
	{
		year: "2021",
		title: "Perimeter Intrusion Detection",
		subtitle: "Layered physical security",
		body: "Deployed a fence-line intrusion detection platform fused with CCTV analytics and access control, integrated into the existing command center.",
		category: "Security"
	},
	{
		year: "2020",
		title: "Strategic Technology Alliances",
		subtitle: "Tier-one industrial partners",
		body: "Signed long-term agreements with global leaders in industrial automation and energy systems, broadening our power, oil and gas portfolio.",
		category: "Industrial"
	},
	{
		year: "2020",
		title: "Diplomatic & Hospitality BMS",
		subtitle: "Three landmark contracts in one year",
		body: "Delivered building management systems for a major embassy, a ministry headquarters expansion and a flagship five-star hotel — all within a single calendar year.",
		category: "Buildings"
	},
	{
		year: "2019",
		title: "Smart Traffic Systems, Holy City",
		subtitle: "Crowd-aware mobility",
		body: "Partnered to deliver a smart traffic program engineered for one of the world's most demanding crowd and pilgrimage cycles.",
		category: "Mobility"
	},
	{
		year: "2019",
		title: "Central Fire Detection — POC",
		subtitle: "Proof of concept for a national agency",
		body: "Completed a successful proof of concept for a centralized fire detection platform serving a national security agency.",
		category: "Security"
	},
	{
		year: "2018",
		title: "Security HQ Development BMS",
		subtitle: "Ministry-grade controls",
		body: "Major contract to supply the building management spine for the development of national security headquarters facilities.",
		category: "Buildings"
	},
	{
		year: "2016",
		title: "1,500+ Camera ATCS Rollout",
		subtitle: "City-scale visual telemetry",
		body: "Supplied more than 1,500 high-grade traffic cameras and accessories for the capital's advanced traffic control program.",
		category: "Mobility"
	},
	{
		year: "2015",
		title: "Capital ATCS — 350+ Intersections",
		subtitle: "Citywide signal modernization",
		body: "Co-delivered an advanced traffic control system spanning over 350 intersections, reshaping how the capital moves.",
		category: "Mobility",
		tag: "Flagship"
	},
	{
		year: "2015",
		title: "PTP Wireless Backhaul",
		subtitle: "Carrier-grade intersection link",
		body: "Designed a point-to-point wireless network connecting every traffic intersection to the central traffic management center for live video and telemetry.",
		category: "Mobility"
	},
	{
		year: "2014",
		title: "Land Forces HQ BMS",
		subtitle: "Defense-sector building controls",
		body: "Significant defense contract for the supply and implementation of a building management system at a major land forces headquarters.",
		category: "Buildings"
	},
	{
		year: "2014",
		title: "Airbase Fault Signaling & IT LAN",
		subtitle: "Support for next-generation aircraft",
		body: "Delivered a fault signaling system and IT LAN backbone at a strategic air base, supporting an advanced fighter program.",
		category: "Aviation"
	},
	{
		year: "2013",
		title: "300+ Projects Delivered",
		subtitle: "Milestone celebration",
		body: "Crossed the threshold of 300 successfully handed-over projects — a marker of repeat trust across the public and private sectors.",
		category: "Industrial",
		tag: "Milestone"
	},
	{
		year: "2013",
		title: "Classified Telepresence System",
		subtitle: "Ministry-grade video infrastructure",
		body: "Supplied and implemented a hardened telepresence platform for a highly classified ministry program in the capital.",
		category: "Security"
	},
	{
		year: "2010",
		title: "Air Force Mission Systems Upgrade",
		subtitle: "Four airbases, one upgrade program",
		body: "Major contract to upgrade mission-critical and ground crew support systems across four air bases in a single coordinated rollout.",
		category: "Aviation"
	},
	{
		year: "2009",
		title: "First Smart Building, Ministry HQ",
		subtitle: "A national first",
		body: "Delivered the first fully realized smart building application for a national ministry headquarters — a reference point for projects that followed.",
		category: "Buildings",
		tag: "First"
	},
	{
		year: "2007",
		title: "Tunnel Ventilation Automation",
		subtitle: "Pioneering road tunnel controls",
		body: "Pioneered automated ventilation control for a major road tunnel, balancing air quality, fan duty cycles and emergency scenarios.",
		category: "Industrial"
	},
	{
		year: "2007",
		title: "International Airport Control Upgrade",
		subtitle: "Control & monitoring modernization",
		body: "Replaced and upgraded the central control and monitoring systems for a major international airport campus.",
		category: "Aviation"
	},
	{
		year: "2006",
		title: "National Guard Water Network",
		subtitle: "Automated supply & distribution",
		body: "Pioneered automatic control across the water supply and distribution network of two national guard military cities.",
		category: "Industrial"
	},
	{
		year: "2006",
		title: "National Energy Lab BMS",
		subtitle: "Research-grade controls",
		body: "Executed one of the most prestigious building management projects for a national energy research and development laboratory campus.",
		category: "Buildings"
	},
	{
		year: "2001",
		title: "National Energy Facilities BMS",
		subtitle: "Multi-site rollout",
		body: "Became the primary building management supplier for a portfolio of national energy facilities — from core annexes to gas plants.",
		category: "Industrial"
	},
	{
		year: "1999",
		title: "Hospitality Group Facility Management",
		subtitle: "Hospital, academy and tower",
		body: "Signed a landmark agreement to deliver facility management across a hospital, academy and skyline tower for a major holding group.",
		category: "Buildings"
	},
	{
		year: "1998",
		title: "Medical City BMS Handover",
		subtitle: "Healthcare-grade reliability",
		body: "Successfully completed and handed over the building management systems for a major medical city campus.",
		category: "Buildings"
	},
	{
		year: "1997",
		title: "Airport & Defense CCMS",
		subtitle: "Two landmark programs",
		body: "Delivered two major command, control and monitoring system projects — one for an international airport, one for a flagship defense program.",
		category: "Aviation",
		tag: "Founding era"
	},
	{
		year: "1997",
		title: "Saudi Controls Founded",
		subtitle: "Engineering company established",
		body: "Founded with a singular focus: bringing world-class building and industrial controls expertise to the Kingdom's most ambitious programs.",
		category: "Industrial",
		tag: "Origin"
	}
];
var categoryIcon = {
	Aviation: Plane,
	Buildings: Building2,
	Mobility: Radio,
	Security: ShieldCheck,
	Industrial: Zap
};
var categories = [
	"All",
	"Aviation",
	"Buildings",
	"Mobility",
	"Security",
	"Industrial"
];
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
	const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
	const yCopy = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const yImg = useTransform(scrollYProgress, [0, 1], [0, -60]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative isolate overflow-hidden pt-20 pb-24 md:pt-32 md:pb-22",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: yOrb1 },
				className: "pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-radial-mint opacity-70 blur-2xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: yOrb2 },
				className: "pointer-events-none absolute -top-10 right-0 h-[22rem] w-[22rem] rounded-full bg-radial-amber opacity-60 blur-2xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(from_var(--color-background)_l_c_h_/_0.9))]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { y: yCopy },
				className: "relative mx-auto max-w-7xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						...fadeUp,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground/60 hover:text-foreground transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), "Back to Home"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .1
						},
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Project Archive"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-7 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]",
						children: [
							"Three decades of ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-accent",
								children: "mission-critical"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/40",
								children: "infrastructure, delivered."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .25
						},
						className: "mt-8 max-w-2xl text-lg text-foreground/65 leading-relaxed",
						children: "From the first smart ministry building to nationwide mobility, aviation and defense programs — every milestone in the Saudi Controls archive is a system still running, every day, somewhere in the Kingdom."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .35
						},
						className: "mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 md:grid-cols-4",
						children: [
							{
								k: "300+",
								v: "Projects delivered"
							},
							{
								k: "27",
								v: "Years of operation"
							},
							{
								k: "350+",
								v: "ATCS intersections"
							},
							{
								k: "71",
								v: "Buildings on one BMS"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-background p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl italic md:text-4xl",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-xs uppercase tracking-[0.18em] text-foreground/55",
								children: s.v
							})]
						}, s.k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						style: { y: yImg },
						initial: {
							opacity: 0,
							scale: 1.03
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: {
							once: true,
							margin: "-100px"
						},
						transition: {
							duration: 1.2,
							ease: EASE
						},
						className: "relative mt-20 overflow-hidden rounded-[2.25rem] border border-foreground/10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: svc_bms_2_default,
								alt: "Mission control hub for Saudi Controls projects",
								className: "h-[26rem] w-full object-cover transition-transform duration-[1300ms] ease-out hover:scale-[1.03] md:h-[34rem]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-none absolute left-6 bottom-6 max-w-xl rounded-3xl bg-slate-950/20 px-4 py-3 text-sm text-white backdrop-blur-md md:left-8 md:px-5 md:py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white",
									children: "Project spotlight"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-white/80",
									children: "A force-multiplier for Saudi Controls' intelligent infrastructure, mobility, and security programs."
								})]
							})
						]
					})
				]
			})
		]
	});
}
function Featured() {
	const featured = [
		{
			year: "2024",
			title: "Electric Vehicle Charging Stations",
			desc: "A comprehensive network of electric vehicle charging stations.",
			img: svc_ev_default,
			tag: "Mobility"
		},
		{
			year: "2024",
			title: "Jizan Airport Building Management & Security",
			desc: "End-to-end low-current solution for a new regional aviation hub.",
			img: svc_bms_2_default,
			tag: "Aviation"
		},
		{
			year: "2023",
			title: "RCRC Security & Monitoring Systems",
			desc: "Perimeter intrusion, gate access and atmosphere detection across a major air base.",
			img: svc_security_3_default,
			tag: "Defense"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t border-foreground/10 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				...fadeUp,
				className: "flex items-end justify-between gap-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono",
							children: "01"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-foreground/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3.5 w-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Featured Programs" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-5xl",
					children: [
						"The flagship engagements",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-accent",
							children: "defining this decade."
						})
					]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-3",
				children: featured.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .9,
						delay: i * .12,
						ease: EASE
					},
					className: "group relative overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-lift hover-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: f.img,
								alt: f.title,
								className: "h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-5 top-5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground",
									children: f.year
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white",
									children: f.tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-5 bottom-5 text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl leading-tight",
									children: f.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-white/80",
									children: f.desc
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-foreground opacity-0 transition-all group-hover:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
							})
						]
					})
				}, f.title))
			})]
		})
	});
}
function Timeline() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const filtered = (0, import_react.useMemo)(() => filter === "All" ? milestones : milestones.filter((m) => m.category === filter), [filter]);
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t border-foreground/10 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono",
							children: "02"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-foreground/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Project Archive" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-5xl",
					children: ["Every milestone is ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-accent",
						children: "a system still running."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: categories.map((c) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilter(c),
							className: `rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all ${filter === c ? "border-foreground bg-foreground text-background" : "border-foreground/15 text-foreground/65 hover:border-foreground/40 hover:text-foreground"}`,
							children: c
						}, c);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "relative mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-4 top-0 h-full w-px bg-foreground/10 md:left-1/2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: {
							scaleY: lineScale,
							transformOrigin: "top"
						},
						className: "pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent via-accent to-accent/40 md:left-1/2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-12 md:space-y-20",
						children: filtered.map((m, i) => {
							const Icon = categoryIcon[m.category];
							const right = i % 2 === 1;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								initial: {
									opacity: 0,
									y: 32
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: {
									once: true,
									margin: "-80px"
								},
								transition: {
									duration: .8,
									ease: EASE
								},
								className: "relative grid grid-cols-1 gap-6 pl-12 md:grid-cols-2 md:gap-12 md:pl-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-4 top-6 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-background ring-2 ring-accent md:left-1/2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `${right ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/55 ${right ? "" : "md:justify-end"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-3xl italic text-foreground md:text-4xl",
													children: m.year
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-2.5 py-1 text-[10px]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3" }), m.category]
												}),
												m.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-accent/10 px-2.5 py-1 text-[10px] text-accent",
													children: m.tag
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `${right ? "md:order-1 md:pr-12 md:text-right" : "md:pl-12"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "group rounded-2xl border border-foreground/10 bg-background/60 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lift",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-2xl leading-tight tracking-tight md:text-[1.65rem]",
													children: m.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-xs uppercase tracking-[0.18em] text-foreground/55",
													children: m.subtitle
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-4 text-sm leading-relaxed text-foreground/70 md:text-base",
													children: m.body
												})
											]
										})
									})
								]
							}, `${m.year}-${m.title}`);
						})
					})
				]
			})]
		})
	});
}
function Partners() {
	const partners = [
		"Tier-one automation OEMs",
		"Global building controls",
		"Defense & aerospace primes",
		"Energy systems leaders",
		"Telecom infrastructure",
		"Smart mobility platforms"
	];
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative border-t border-foreground/10 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						className: "flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: "03"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-foreground/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "h-3.5 w-3.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Alliances" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						...fadeUp,
						className: "mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl",
						children: ["Long-term partners, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-accent",
							children: "not vendor lists."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .15
						},
						className: "mt-6 max-w-md text-base leading-relaxed text-foreground/65",
						children: "Decades of project delivery are only possible because we treat partners as co-engineers — from the first joint study through the tenth year of operations and maintenance."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y },
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 sm:grid-cols-2",
					children: partners.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .6,
							delay: i * .06,
							ease: EASE
						},
						className: "group flex items-center justify-between bg-background p-6 transition-all hover:bg-accent/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg md:text-xl",
							children: p
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" })]
					}, p))
				})
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-foreground py-24 text-background md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-30",
			style: { backgroundImage: "radial-gradient(60% 50% at 20% 30%, oklch(0.85 0.13 160 / 0.35), transparent), radial-gradient(50% 50% at 80% 70%, oklch(0.82 0.13 75 / 0.35), transparent)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-12 md:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "md:col-span-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full border border-background/20 bg-background/10 px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] text-background/80 backdrop-blur",
					children: "Start a project"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl",
					children: ["Your next milestone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-accent",
						children: "belongs in this archive."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				transition: {
					...fadeUp.transition,
					delay: .15
				},
				className: "md:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-background/70",
					children: "Tell us about your program. We will respond with a scoped engineering point of view — not a brochure."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						hash: "contact",
						className: "group inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift",
						children: ["Contact Saudi Controls", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:rotate-45" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/solutions",
						className: "inline-flex items-center gap-2 rounded-full border border-background/25 px-5 py-3 text-sm text-background/85 transition-all hover:bg-background/10",
						children: "Explore Solutions"
					})]
				})]
			})]
		})]
	});
}
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Featured, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Partners, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProjectsPage as component };
