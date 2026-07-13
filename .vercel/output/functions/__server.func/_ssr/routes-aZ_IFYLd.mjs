import { o as __toESM } from "../_runtime.mjs";
import { t as about_team_default } from "./about-team-CVRaeKnQ.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as ArrowRight, E as CircleCheck, S as ArrowUpRight, T as Sparkles, f as Phone, i as TrafficCone, l as Radio, o as Star, r as TrendingUp, s as Shield, t as Zap, w as ArrowLeft, x as Building2, y as Cpu } from "../_libs/lucide-react.mjs";
import { i as svc_iot_default, n as SiteNav, r as svc_comms_default, t as SiteFooter } from "./SiteFooter-Cz3vs7qX.mjs";
import { t as svc_bms_default } from "./svc-bms-C2q78Dmr.mjs";
import { n as useScroll, t as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as svc_security_default, t as svc_ev_default } from "./svc-security-Cbam7hwb.mjs";
import { n as company, r as data_default, t as aboutData } from "./routes-BLj6_wov.mjs";
import { t as svc_traffic_default } from "./svc-traffic-D-qfbC3_.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-aZ_IFYLd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_portrait_default = "/assets/hero-portrait-G3nmNcRF.jpg";
var about_founder_default = "/assets/about-founder-D5X3yAw6.png";
var avatar_2_default = "/assets/avatar-2-Brzr378V.jpg";
data_default.latest_news;
var projects = data_default.projects;
var values = data_default.values;
var callToAction = data_default.call_to_action;
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
function SplitWords({ text, className, delay = 0, stagger = .06 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: text.split(" ").map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden align-bottom pb-[0.12em]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: "inline-block",
				initial: { y: "110%" },
				whileInView: { y: "0%" },
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .9,
					delay: delay + i * stagger,
					ease: EASE
				},
				children: [w, "\xA0"]
			})
		}, i))
	});
}
function Pill({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), children]
	});
}
function PrimaryButton({ children, icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }) }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: "group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-float transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 transition-transform duration-500 group-hover:translate-x-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative grid h-7 w-7 place-items-center rounded-full bg-background/15 transition-transform duration-500 group-hover:rotate-45",
				children: icon
			})
		]
	});
}
function GhostButton({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: "group inline-flex items-center gap-2.5 rounded-full border border-foreground/15 bg-white/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-white/80",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" })]
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const yPortrait = useTransform(scrollYProgress, [0, 1], [0, 140]);
	const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, -90]);
	const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
	const opacityCopy = useTransform(scrollYProgress, [0, .8], [1, .2]);
	const yCopy = useTransform(scrollYProgress, [0, 1], [0, 60]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative overflow-hidden bg-hero pb-28 pt-40 md:pb-36 md:pt-44",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				style: { y: yOrb1 },
				className: "pointer-events-none absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full bg-radial-mint blur-2xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				style: { y: yOrb2 },
				className: "pointer-events-none absolute -right-40 top-40 h-[600px] w-[600px] rounded-full bg-radial-amber blur-2xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 opacity-[0.06]",
				style: {
					backgroundImage: "linear-gradient(to right, var(--ink) 1px, transparent 1px)",
					backgroundSize: "120px 100%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						opacity: opacityCopy,
						y: yCopy
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								ease: EASE
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: `Founded ${company.founded} · ${company.headquarters.city}` })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-8 text-balance text-[52px] font-bold leading-[0.96] tracking-[-0.035em] text-ink sm:text-7xl lg:text-[92px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: company.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display italic font-normal text-emerald-800",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
										text: company.slogan,
										delay: .25
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							...fadeUp,
							transition: {
								...fadeUp.transition,
								delay: .5
							},
							className: "mt-8 max-w-xl text-lg leading-relaxed text-foreground/70 sm:text-xl",
							children: aboutData.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...fadeUp,
							transition: {
								...fadeUp.transition,
								delay: .6
							},
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, { children: "Talk to Sales" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, { children: "View Solutions" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							...fadeUp,
							transition: {
								...fadeUp.transition,
								delay: .75
							},
							className: "mt-16 flex flex-wrap items-center gap-3",
							children: values.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-foreground/10 bg-white/70 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm",
								children: value
							}, value))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y: yPortrait },
					initial: {
						opacity: 0,
						scale: .94,
						y: 40
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					transition: {
						duration: 1.1,
						ease: EASE
					},
					className: "relative mx-auto w-full max-w-md lg:max-w-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-[4/5] w-full overflow-hidden rounded-t-[280px] rounded-b-3xl bg-mint-gradient shadow-lift ring-1 ring-white/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: hero_portrait_default,
								alt: "Saudi Controls engineering lead",
								width: 1024,
								height: 1280,
								initial: { scale: 1.15 },
								animate: { scale: 1 },
								transition: {
									duration: 1.6,
									ease: EASE
								},
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 40,
								y: -10
							},
							animate: {
								opacity: 1,
								x: 0,
								y: 0
							},
							transition: {
								delay: .7,
								duration: .8,
								ease: EASE
							},
							whileHover: { y: -4 },
							className: "absolute -left-4 top-16 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-float ring-1 ring-black/5 backdrop-blur sm:-left-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex -space-x-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: about_founder_default,
										alt: "",
										className: "h-8 w-8 rounded-full ring-2 ring-white"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: avatar_2_default,
										alt: "",
										className: "h-8 w-8 rounded-full ring-2 ring-white"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-8 w-8 place-items-center rounded-full bg-foreground text-[10px] font-semibold text-background ring-2 ring-white",
										children: "+98"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs font-medium leading-tight",
								children: [
									"98% Satisfied",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground/60",
										children: "Clients"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 40,
								y: 20
							},
							animate: {
								opacity: 1,
								x: 0,
								y: 0
							},
							transition: {
								delay: .85,
								duration: .8,
								ease: EASE
							},
							whileHover: { y: -4 },
							className: "absolute -right-2 bottom-8 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-float ring-1 ring-black/5 sm:-right-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-mint",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "leading-tight",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xl font-bold tracking-tight",
										children: "100+"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-foreground/60",
										children: "Success Stories"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ml-3 flex h-10 items-end gap-1",
									children: [
										6,
										10,
										8,
										14,
										18
									].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-1.5 rounded-full bg-emerald-500",
										style: { height: `${h}px` }
									}, i))
								})
							]
						})
					]
				})]
			})
		]
	});
}
function Marquee() {
	const items = [
		"Engineering Experts",
		"Systems Integration",
		"Automation Solutions",
		"Control Systems",
		"Project Execution",
		"Smart Engineering"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-foreground/10 bg-background py-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-max animate-marquee gap-10 whitespace-nowrap",
			children: [
				...items,
				...items,
				...items
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-10 text-foreground/70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl italic",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-mint" })]
			}, i))
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative bg-background py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					...fadeUp,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "About Saudi Controls" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
					...fadeUp,
					transition: {
						...fadeUp.transition,
						delay: .05
					},
					className: "mt-6 max-w-6xl text-balance text-2xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:text-5xl",
					children: aboutData.vision
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							ease: EASE
						},
						className: "group relative aspect-[16/10] overflow-hidden rounded-3xl bg-foreground shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: about_team_default,
								alt: "Saudi Controls engineering team",
								loading: "lazy",
								width: 1600,
								height: 900,
								initial: { scale: 1.15 },
								whileInView: { scale: 1 },
								viewport: {
									once: true,
									margin: "-80px"
								},
								transition: {
									duration: 1.6,
									ease: EASE
								},
								className: "h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur",
								children: "10+ Years Strong"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								...fadeUp,
								className: "col-span-2 rounded-3xl bg-mint-gradient p-6 ring-1 ring-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-5xl italic",
									children: company.founded
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-foreground/70",
									children: "Year founded"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								...fadeUp,
								className: "rounded-3xl bg-secondary p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-5 w-5 text-emerald-700" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 font-display text-3xl italic",
										children: company.headquarters.city
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-foreground/60",
										children: "Headquarters"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								...fadeUp,
								className: "rounded-3xl bg-foreground p-5 text-background",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5 text-mint" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 font-display text-3xl italic",
										children: "300+"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-background/60",
										children: "Projects completed"
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					...fadeUp,
					className: "mt-12 max-w-3xl text-lg leading-relaxed text-foreground/70",
					children: aboutData.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }),
						children: "Our Story"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, { children: "Meet the Team" })]
				})
			]
		})
	});
}
var services = [
	{
		title: "Transportation Systems",
		desc: "Smart transport solutions enabling smooth mobility with intelligent traffic integration.",
		img: svc_traffic_default,
		icon: TrafficCone
	},
	{
		title: "Building Management",
		desc: "Smart-building stacks optimising energy, security and real-time operational efficiency.",
		img: svc_bms_default,
		icon: Building2
	},
	{
		title: "EV Infrastructure",
		desc: "Advanced EV solutions — smart charging, telemetry and optimised station design.",
		img: svc_ev_default,
		icon: Zap
	},
	{
		title: "IoT & AI",
		desc: "IoT platforms that capture real-time data, automate systems and integrate fleets of devices.",
		img: svc_iot_default,
		icon: Cpu
	},
	{
		title: "Communication Systems",
		desc: "Carrier-grade communication technology ensuring seamless connectivity and data exchange.",
		img: svc_comms_default,
		icon: Radio
	},
	{
		title: "Security Systems",
		desc: "Industrial security suites integrating with SCADA for real-time threat protection.",
		img: svc_security_default,
		icon: Shield
	}
];
function OMRow({ s, i, secondary }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const yBig = useTransform(scrollYProgress, [0, 1], [60, -60]);
	const ySmall = useTransform(scrollYProgress, [0, 1], [-40, 40]);
	const reversed = i % 2 === 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: `grid items-center gap-8 py-12 sm:py-20 lg:grid-cols-[1fr_1.05fr] ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[460px] sm:h-[560px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: yBig },
				initial: {
					opacity: 0,
					scale: .94
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: 1,
					ease: EASE
				},
				className: `group absolute top-0 h-[78%] w-[62%] overflow-hidden rounded-[36px] shadow-lift ring-1 ring-black/5 ${reversed ? "right-0" : "left-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.img,
					alt: s.title,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { y: ySmall },
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
					duration: 1,
					delay: .15,
					ease: EASE
				},
				className: `group absolute bottom-0 h-[52%] w-[48%] overflow-hidden rounded-[28px] shadow-card ring-1 ring-black/5 ${reversed ? "left-0" : "right-0"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: secondary,
					alt: "",
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 backdrop-blur",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				margin: "-80px"
			},
			transition: {
				duration: .8,
				ease: EASE
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-display text-sm italic text-emerald-700",
					children: ["/ 0", i + 1]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl",
					children: s.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-base leading-relaxed text-foreground/65 sm:text-lg",
					children: s.desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground",
					children: ["Explore capability", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
				})
			]
		})]
	});
}
function Services() {
	const secondaries = [
		svc_comms_default,
		svc_ev_default,
		svc_iot_default,
		svc_bms_default,
		svc_security_default,
		svc_traffic_default
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "solutions",
		className: "bg-mint-soft/40 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-6 sm:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					...fadeUp,
					className: "text-balance text-4xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl",
					children: [
						"Operation &",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic font-normal text-emerald-700",
							children: "Maintenance"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					...fadeUp,
					className: "text-base text-foreground/65 sm:text-lg",
					children: "Embedding O&M from the earliest design phase keeps systems efficient and cost-effective — and when you need complete maintenance or infrastructure support, we are there end-to-end."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 divide-y divide-foreground/10",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OMRow, {
					s,
					i,
					secondary: secondaries[i]
				}, s.title))
			})]
		})
	});
}
var showcaseItems = [
	{
		title: "EV Infrastructure",
		desc: "Smart charging networks",
		icon: "⚡",
		count: "50+",
		label: "Stations deployed"
	},
	{
		title: "BMS Solutions",
		desc: "Building automation",
		icon: "🏢",
		count: "71",
		label: "Buildings managed"
	},
	{
		title: "Traffic Systems",
		desc: "City-scale mobility",
		icon: "🚦",
		count: "350+",
		label: "Intersections"
	},
	{
		title: "IoT Platforms",
		desc: "Real-time data capture",
		icon: "🔌",
		count: "1000+",
		label: "Devices connected"
	},
	{
		title: "Security Suite",
		desc: "Mission-critical protection",
		icon: "🛡️",
		count: "24/7",
		label: "Monitoring active"
	},
	{
		title: "Defense Programs",
		desc: "Aerospace & military",
		icon: "✈️",
		count: "15+",
		label: "Facilities supported"
	}
];
function Carousel3D() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "center",
		dragFree: false
	});
	const [selected, setSelected] = (0, import_react.useState)(0);
	const [count, setCount] = (0, import_react.useState)(0);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const scrollPrev = (0, import_react.useCallback)(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = (0, import_react.useCallback)(() => emblaApi?.scrollNext(), [emblaApi]);
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		if (!emblaApi || isPaused) return;
		const intervalId = window.setInterval(() => emblaApi.scrollNext(), 4e3);
		return () => window.clearInterval(intervalId);
	}, [emblaApi, isPaused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onMouseEnter: () => setIsPaused(true),
		onMouseLeave: () => setIsPaused(false),
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: emblaRef,
			className: "overflow-hidden",
			style: { perspective: "1000px" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-6 -ml-6 pl-6",
				children: showcaseItems.map((item, i) => {
					const isCenter = i === selected;
					Math.abs(i - selected);
					const offset = i > selected ? 1 : -1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[45%]",
						initial: {
							opacity: 0,
							rotateY: 45
						},
						animate: {
							opacity: isCenter ? 1 : .4,
							rotateY: isCenter ? 0 : 45 * offset,
							scale: isCenter ? 1 : .85
						},
						transition: {
							duration: .5,
							ease: "easeOut"
						},
						style: { transformStyle: "preserve-3d" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700/40 to-amber-600/20 p-8 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-emerald-500/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-emerald-900/20 to-transparent transition-opacity duration-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex flex-col h-full justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-5xl mb-3",
											children: item.icon
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-bold text-white",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-white/70 text-sm",
											children: item.desc
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-4xl font-display italic text-emerald-300",
											children: item.count
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase tracking-[0.15em] text-white/60",
											children: item.label
										})]
									})]
								}),
								isCenter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									layoutId: "carousel-indicator",
									className: "absolute inset-0 rounded-3xl border-2 border-emerald-400",
									transition: { duration: .3 }
								})
							]
						})
					}, item.title);
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1.5",
				children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					onClick: () => emblaApi?.scrollTo(i),
					animate: {
						width: i === selected ? 32 : 12,
						backgroundColor: i === selected ? "rgb(16 185 129)" : "rgba(16 185 129 / 0.2)"
					},
					className: "h-1.5 rounded-full transition-all"
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: scrollPrev,
					"aria-label": "Previous",
					className: "grid h-10 w-10 place-items-center rounded-full border border-emerald-500/30 bg-emerald-600/10 transition-all hover:border-emerald-500 hover:bg-emerald-600/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4 text-emerald-400" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: scrollNext,
					"aria-label": "Next",
					className: "grid h-10 w-10 place-items-center rounded-full border border-emerald-500/30 bg-emerald-600/10 transition-all hover:border-emerald-500 hover:bg-emerald-600/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-emerald-400" })
				})]
			})]
		})]
	});
}
function Bento() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-background py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radial-mint opacity-60 blur-3xl"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-6 sm:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					...fadeUp,
					className: "text-balance text-4xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl",
					children: [
						"What sets us",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic font-normal text-emerald-700",
							children: "apart?"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					...fadeUp,
					className: "text-base text-foreground/65 sm:text-lg",
					children: "A partnership-driven approach designed for sustainable growth and long-term reliability."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						className: "md:col-span-4 md:row-span-2 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 hover-lift border border-white/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.2em] text-emerald-400",
								children: "/ 01"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 max-w-lg text-balance text-2xl font-semibold leading-[1.1] text-white sm:text-3xl",
								children: "Over 100 projects successfully delivered"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel3D, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						whileHover: { y: -4 },
						className: "md:col-span-2 rounded-3xl bg-mint-gradient p-8 ring-1 ring-black/5 hover-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.2em] text-foreground/60",
								children: "/ 02"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-balance text-2xl font-semibold leading-tight",
								children: "$50M+ in revenue driven for our clients."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 200 90",
								className: "mt-6 w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "ar",
										x1: "0",
										x2: "0",
										y1: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "oklch(0.55 0.13 150)",
											stopOpacity: "0.35"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "oklch(0.55 0.13 150)",
											stopOpacity: "0"
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
										initial: { pathLength: 0 },
										whileInView: { pathLength: 1 },
										viewport: { once: true },
										transition: {
											duration: 1.4,
											ease: EASE
										},
										d: "M0 78 Q40 68 60 56 T120 32 T200 6",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.5",
										className: "text-foreground"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M0 78 Q40 68 60 56 T120 32 T200 6 L200 90 L0 90 Z",
										fill: "url(#ar)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
										initial: { scale: 0 },
										whileInView: { scale: 1 },
										viewport: { once: true },
										transition: {
											delay: 1.2,
											duration: .4,
											ease: EASE
										},
										cx: "200",
										cy: "6",
										r: "5",
										className: "fill-emerald-600"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						whileHover: { y: -4 },
						className: "md:col-span-2 rounded-3xl bg-secondary p-8 hover-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.2em] text-foreground/60",
								children: "/ 03"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl font-semibold leading-tight",
								children: "Always here to support you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-foreground/60",
								children: "Clear, timely and dependable support for infrastructure, smart cities and industrial operations across the Kingdom."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2.5 w-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium",
									children: "24 / 7 online"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						whileHover: { y: -4 },
						className: "md:col-span-3 rounded-3xl bg-secondary p-8 hover-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.2em] text-foreground/60",
								children: "/ 04"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 max-w-sm text-balance text-2xl font-semibold leading-tight",
								children: "Trusted experts delivering real results for you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex -space-x-3",
								children: [[
									about_founder_default,
									avatar_2_default,
									about_founder_default,
									avatar_2_default
								].map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									initial: {
										opacity: 0,
										x: -10
									},
									whileInView: {
										opacity: 1,
										x: 0
									},
									viewport: { once: true },
									transition: {
										delay: .1 + i * .08,
										duration: .5,
										ease: EASE
									},
									src: a,
									alt: "",
									className: "h-12 w-12 rounded-full object-cover ring-2 ring-secondary"
								}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 place-items-center rounded-full bg-foreground text-xs font-semibold text-background ring-2 ring-secondary",
									children: "+42"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 text-xs text-foreground/60",
								children: "Experienced team"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						whileHover: { y: -4 },
						className: "md:col-span-3 rounded-3xl bg-foreground p-8 text-background hover-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.2em] text-mint",
								children: "/ 05"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-end gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: { once: true },
									transition: {
										duration: .7,
										ease: EASE
									},
									className: "font-display text-7xl italic leading-none",
									children: "90%"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pb-2 text-sm text-background/70",
									children: "client retention — they stay because we keep delivering value."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex -space-x-2",
								children: [
									avatar_2_default,
									about_founder_default,
									avatar_2_default,
									about_founder_default,
									avatar_2_default
								].map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: a,
									alt: "",
									className: "h-9 w-9 rounded-full object-cover ring-2 ring-foreground"
								}, i))
							})
						]
					})
				]
			})]
		})]
	});
}
var solutions = data_default.solutions.map((title, index) => ({
	n: String(index + 1).padStart(2, "0"),
	t: title,
	d: title
}));
function SolutionsList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "bg-background py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-6 sm:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					...fadeUp,
					className: "text-balance text-4xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl",
					children: ["Solutions & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display italic font-normal",
						children: "Technologies"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					...fadeUp,
					className: "text-base text-foreground/65 sm:text-lg",
					children: "Smart, integrated solutions for energy, utilities and industry — enhancing efficiency, safety and reliability across operations."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 divide-y divide-foreground/10 border-y border-foreground/10",
				children: solutions.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						margin: "-30px"
					},
					transition: {
						duration: .5,
						delay: i * .04
					},
					className: "group grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-6 py-7 transition-colors hover:bg-mint-soft/30 sm:gap-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl italic text-foreground/40 sm:text-3xl",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold tracking-tight sm:text-2xl",
								children: s.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 truncate text-sm text-foreground/60",
								children: s.d
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 text-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" })
					]
				}, s.n))
			})]
		})
	});
}
var recentWork = projects.map((title, index) => ({
	tag: title.split(" - ")[0] || "Project",
	title,
	img: [
		svc_traffic_default,
		svc_comms_default,
		svc_bms_default,
		svc_ev_default,
		svc_iot_default,
		svc_security_default
	][index % 6]
}));
function RecentWork() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
		dragFree: false
	});
	const [selected, setSelected] = (0, import_react.useState)(0);
	const [count, setCount] = (0, import_react.useState)(0);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const scrollPrev = (0, import_react.useCallback)(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = (0, import_react.useCallback)(() => emblaApi?.scrollNext(), [emblaApi]);
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		if (!emblaApi || isPaused) return;
		const intervalId = window.setInterval(() => emblaApi.scrollNext(), 1600);
		return () => window.clearInterval(intervalId);
	}, [emblaApi, isPaused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-24 sm:py-32",
		onMouseEnter: () => setIsPaused(true),
		onMouseLeave: () => setIsPaused(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-6 sm:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					...fadeUp,
					className: "text-balance text-4xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl",
					children: [
						"View our",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic font-normal text-emerald-700",
							children: "recent work"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					...fadeUp,
					className: "text-base text-foreground/65 sm:text-lg",
					children: "Results that reflect real growth, clear direction, and long-term impact across industries we serve."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					margin: "-80px"
				},
				transition: {
					duration: .7,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: emblaRef,
					className: "overflow-hidden rounded-[32px] border border-foreground/10 bg-white/70 shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-5 -ml-5 pl-5",
						children: recentWork.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-0 shrink-0 grow-0 basis-[88%] sm:basis-[60%] lg:basis-[42%]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group overflow-hidden rounded-[30px] bg-background shadow-card ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: w.img,
										alt: w.title,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-x-0 bottom-0 rounded-b-[inherit] bg-gradient-to-t from-ink/80 to-transparent px-5 py-4 text-sm text-background",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold",
											children: w.tag
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-sm text-white/80",
											children: w.title
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-4 px-6 py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "truncate text-lg font-semibold tracking-tight sm:text-xl",
										children: w.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" })]
								})]
							})
						}, w.title))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1.5",
						children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Go to slide ${i + 1}`,
							onClick: () => emblaApi?.scrollTo(i),
							className: `h-1.5 rounded-full transition-all ${i === selected ? "w-8 bg-foreground" : "w-3 bg-foreground/20 hover:bg-foreground/40"}`
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: scrollPrev,
							"aria-label": "Previous",
							className: "grid h-11 w-11 place-items-center rounded-full border border-foreground/15 bg-background transition-all hover:border-foreground hover:bg-foreground hover:text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: scrollNext,
							"aria-label": "Next",
							className: "grid h-11 w-11 place-items-center rounded-full border border-foreground/15 bg-background transition-all hover:border-foreground hover:bg-foreground hover:text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						})]
					})]
				})]
			})]
		})
	});
}
function Testimonial() {
	const metrics = [
		{
			k: "100+",
			v: "Projects delivered"
		},
		{
			k: "24/7",
			v: "Support availability"
		},
		{
			k: "90%",
			v: "Client retention"
		},
		{
			k: String(company.founded),
			v: "Since founding"
		},
		{
			k: String(data_default.solutions.length),
			v: "Core solutions"
		},
		{
			k: company.headquarters.city,
			v: "Headquarters"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-foreground py-24 text-background sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "What our clients say" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl",
						children: [
							"Hear from clients on how we helped them gain",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display italic font-normal text-mint",
								children: "clarity"
							}),
							" and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display italic font-normal text-mint",
								children: "progress"
							}),
							"."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex w-max animate-marquee gap-4 whitespace-nowrap",
						children: [
							...metrics,
							...metrics,
							...metrics
						].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-[180px] flex-col rounded-2xl border border-background/15 bg-background/5 px-6 py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl italic",
								children: m.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 text-xs text-background/60",
								children: m.v
							})]
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-8 rounded-3xl border border-background/10 bg-background/5 p-8 sm:grid-cols-[1fr_auto] sm:items-end sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl leading-snug sm:text-3xl",
						children: [
							"“",
							company.ceo.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about_founder_default,
							alt: "",
							className: "h-14 w-14 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold",
								children: company.ceo.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-background/60",
								children: company.ceo.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-center gap-0.5 text-amber-400",
								children: [Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-xs text-background/60",
									children: "Trusted partner"
								})]
							})
						] })]
					})]
				})
			]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-mint-soft/50 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					...fadeUp,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "Let's build it together" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					...fadeUp,
					className: "mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
					children: [
						"Engineered for ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic font-normal",
							children: "reliability."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Designed for",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic font-normal text-emerald-700",
							children: "growth."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					...fadeUp,
					className: "mx-auto mt-6 max-w-xl text-base text-foreground/65 sm:text-lg",
					children: "Tell us about your project. We'll respond within one business day with a clear next step."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "mt-9 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, { children: callToAction.message }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, { children: callToAction.email })]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bento, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionsList, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentWork, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonial, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Index as component };
