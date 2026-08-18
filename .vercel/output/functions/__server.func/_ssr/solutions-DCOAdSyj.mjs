import { o as __toESM } from "../_runtime.mjs";
import { n as svc_comms_2_default, t as svc_bms_default } from "./svc-comms-2-J3e2yYtG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, l as useLocation, p as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as CircleCheck, E as Flame, I as ArrowUpRight, O as Droplets, P as Building2, R as ArrowLeft, p as ShieldCheck, s as TrafficCone, t as Zap, z as Sparkles } from "../_libs/lucide-react.mjs";
import { n as SiteNav, t as SiteFooter } from "./SiteFooter-BCI8bdFC.mjs";
import { n as useScroll, t as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as svc_ev_default$1 } from "./svc-ev-BrRBicNa.mjs";
import { t as svc_security_3_default } from "./svc-security-3-CvnVouFC.mjs";
import { n as svc_security_default, r as svc_traffic_default, t as svc_iot_default } from "./svc-security-DYAAzP32.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-DCOAdSyj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var svc_traffic_3_default = "/assets/svc-traffic-3-C1_Ne9dE.jpeg";
var svc_bms_3_default = "/assets/svc-bms-3-LPRH2UhQ.jpeg";
var svc_comms_3_default = "/assets/svc-comms-3-B-aB1e7D.jpeg";
var svc_ev_default = "/assets/svc-ev-BEDcqnP9.jpg";
var svc_scada_default = "/assets/svc-scada-B1b9Kkcj.jpeg";
function SolutionsLayout() {
	const { pathname } = useLocation();
	if (pathname === "/solutions/building-management-system-bms" || pathname === "/solutions/intelligent-traffic-system-its") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionsPage, {});
}
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
var solutions = [
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
			"EV charging infrastructure integrated with smart grids"
		],
		primary: svc_traffic_default,
		secondary: svc_traffic_3_default
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
			"Legacy modernization through AI-driven retrofits"
		],
		primary: svc_bms_default,
		secondary: svc_bms_3_default
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
			"Scalable for residential complexes, industrial zones and city grids"
		],
		primary: svc_security_3_default,
		secondary: svc_comms_3_default
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
			"Open architecture that scales from district to national grid"
		],
		primary: svc_comms_2_default,
		secondary: svc_scada_default
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
			"Payment, telemetry and remote diagnostics on one platform"
		],
		primary: svc_ev_default$1,
		secondary: svc_ev_default
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
			"Hardened for defense, energy and critical infrastructure"
		],
		primary: svc_security_default,
		secondary: svc_iot_default
	}
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative isolate overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36",
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Our Solutions"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-7 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]",
						children: [
							"Elevating innovation through",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-accent",
								children: "bespoke technological mastery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/40",
								children: " — where vision meets precision."
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
						children: "Six practice areas. One disciplined engineering approach. We design, integrate and operate the control systems that quietly run modern cities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .35
						},
						className: "mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 md:grid-cols-3 lg:grid-cols-6",
						children: solutions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `#${s.id}`,
							className: "group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-secondary/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-mono text-foreground/40",
										children: s.index
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4 text-foreground/40 transition-colors group-hover:text-accent" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium leading-snug",
									children: s.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-auto h-4 w-4 text-foreground/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" })
							]
						}, s.id))
					})
				]
			})
		]
	});
}
function SolutionBlock({ s, i }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const yBig = useTransform(scrollYProgress, [0, 1], [60, -60]);
	const ySmall = useTransform(scrollYProgress, [0, 1], [-30, 60]);
	const reverse = i % 2 === 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: s.id,
		ref,
		className: "relative border-t border-foreground/10 py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `lg:col-span-5 ${reverse ? "lg:order-2" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							margin: "-100px"
						},
						transition: {
							duration: .7,
							ease: EASE
						},
						className: "flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: s.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-foreground/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-3.5 w-3.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.tag })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
						...fadeUp,
						className: "mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.25rem]",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .15
						},
						className: "mt-6 text-base leading-relaxed text-foreground/65 md:text-lg",
						children: s.copy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3.5",
						children: s.bullets.map((b, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								x: -10
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: {
								once: true,
								margin: "-80px"
							},
							transition: {
								duration: .5,
								delay: .1 + k * .08,
								ease: EASE
							},
							className: "flex items-start gap-3 text-[15px] text-foreground/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
						}, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.blockquote, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .4
						},
						className: "mt-10 border-l-2 border-accent/50 pl-5 font-display text-lg italic text-foreground/75",
						children: "“Our commitment to excellence and innovation drives us to deliver the best outcomes for our clients.”"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `relative lg:col-span-7 ${reverse ? "lg:order-1" : ""}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-6 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: { y: yBig },
							initial: {
								opacity: 0,
								scale: 1.05
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
								duration: 1.1,
								ease: EASE
							},
							className: "col-span-4 row-span-2 aspect-[4/5] overflow-hidden rounded-3xl bg-foreground/5 shadow-lift hover-lift",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.primary,
								alt: s.tag,
								className: "h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: { y: ySmall },
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-100px"
							},
							transition: {
								duration: .9,
								delay: .2,
								ease: EASE
							},
							className: "col-span-2 mt-12 aspect-[3/4] overflow-hidden rounded-3xl bg-foreground/5 shadow-lift hover-lift",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.secondary,
								alt: `${s.tag} — detail`,
								className: "h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-100px"
							},
							transition: {
								duration: .9,
								delay: .35,
								ease: EASE
							},
							className: "col-span-2 rounded-3xl border border-foreground/10 bg-secondary/50 p-5 backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.18em] text-foreground/50",
									children: "Outcome"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-display text-3xl italic",
									children: [
										"+38%",
										"−42%",
										"24/7",
										"99%",
										"50+",
										"15+"
									][i]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-foreground/60",
									children: [
										"average throughput uplift",
										"operational energy reduction",
										"monitoring uptime SLA",
										"leak detection accuracy",
										"EV stations deployed",
										"defense facilities supported"
									][i]
								})
							]
						})
					]
				})
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t border-foreground/10 py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] bg-foreground p-12 text-background md:p-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						...fadeUp,
						className: "relative max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl",
						children: [
							"Have a system that needs to be",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-accent",
								children: "designed, integrated, or rescued?"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .15
						},
						className: "relative mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							hash: "contact",
							className: "group inline-flex items-center gap-3 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5",
							children: ["Start a conversation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-7 w-7 place-items-center rounded-full bg-foreground/10 transition-transform group-hover:rotate-45",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-medium text-background/90 transition-colors hover:bg-background/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to homepage"]
						})]
					})
				]
			})
		})
	});
}
function SolutionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			solutions.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionBlock, {
				s,
				i
			}, s.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { SolutionsLayout as component };
