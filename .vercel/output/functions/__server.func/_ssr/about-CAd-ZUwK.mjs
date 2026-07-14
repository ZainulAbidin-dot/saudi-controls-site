import { o as __toESM } from "../_runtime.mjs";
import { n as company_default, r as svc_iot_3_default, t as about_team_default } from "./svc-iot-3-CHY98PZ7.mjs";
import { n as svc_comms_2_default, t as svc_bms_default } from "./svc-comms-2-J3e2yYtG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowLeft, O as Sparkles, S as Compass, T as ArrowUpRight, d as Quote, g as HeartHandshake, k as CircleCheck, o as Target, y as Eye } from "../_libs/lucide-react.mjs";
import { n as SiteNav, t as SiteFooter } from "./SiteFooter-CLv72zoe.mjs";
import { n as useScroll, t as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CAd-ZUwK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var about_promise_default = "/assets/about-promise-BUYlwgtF.jpeg";
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "About Saudi Controls"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-7 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]",
						children: [
							"Rooted in heritage, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-accent",
								children: "engineered for the future"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/40",
								children: " — and the decades beyond."
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
						children: "We architect future-ready control ecosystems where innovation meets reliability — pairing local talent with global expertise to turn ambition into operational reality."
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
								k: "12+",
								v: "Years of engineering"
							},
							{
								k: "240+",
								v: "Systems deployed"
							},
							{
								k: "90%",
								v: "Client retention"
							},
							{
								k: "24/7",
								v: "Operations & support"
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
					})
				]
			})
		]
	});
}
function Story() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const yBig = useTransform(scrollYProgress, [0, 1], [60, -60]);
	const ySmall = useTransform(scrollYProgress, [0, 1], [-30, 60]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative border-t border-foreground/10 py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						className: "flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: "01"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-foreground/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-3.5 w-3.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our Story" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						...fadeUp,
						className: "mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.25rem]",
						children: [
							"A commitment to excellence, integrity and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-accent",
								children: "measured innovation."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .15
						},
						className: "mt-6 text-base leading-relaxed text-foreground/65 md:text-lg",
						children: "Saudi Controls was founded on a simple conviction: the control systems quietly running modern cities deserve the same rigor as the architecture above them. Our values are rooted in heritage and sharpened by an obsession with what comes next."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .25
						},
						className: "mt-5 text-base leading-relaxed text-foreground/65 md:text-lg",
						children: "We remain focused on adopting new technologies, advancing sustainability and elevating operational efficiency — together with partners who hold themselves to the same standard."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .35
						},
						className: "mt-10 border-l-2 border-accent/50 pl-5 font-display text-lg italic text-foreground/75",
						children: ["“Our progress is measured not in deployments shipped, but in the systems still running flawlessly a decade later.”", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-3 block text-xs not-italic uppercase tracking-[0.2em] text-foreground/50",
							children: "— Founder & Managing Director"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative lg:col-span-7",
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
								src: company_default,
								alt: "Founder portrait",
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
								src: about_team_default,
								alt: "Engineering team",
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
									children: "Founded"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-display text-3xl italic",
									children: "1997"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-foreground/60",
									children: "Independent, engineer-led, privately held."
								})
							]
						})
					]
				})
			})]
		})
	});
}
function Promise$1() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const yImg = useTransform(scrollYProgress, [0, 1], [80, -80]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative border-t border-foreground/10 py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative lg:order-2 lg:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { y: yImg },
					initial: {
						opacity: 0,
						scale: 1.04
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
					className: "aspect-[4/5] overflow-hidden rounded-[2rem] bg-foreground/5 shadow-lift hover-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_promise_default,
						alt: "Control room",
						className: "h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:order-1 lg:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						className: "flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: "02"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-foreground/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-3.5 w-3.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our Promise" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						...fadeUp,
						className: "mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.25rem]",
						children: [
							"We don't just deploy systems — we",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-accent",
								children: "architect ecosystems."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: .15
						},
						className: "mt-6 text-base leading-relaxed text-foreground/65 md:text-lg",
						children: "By integrating local talent with global expertise, we turn long-term infrastructure ambition into operational reality. From smart cities to industrial automation, our work shapes a more connected and intelligent future."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3.5",
						children: [
							"Customized, scalable architectures designed for the next decade",
							"Vendor-neutral systems integration — no lock-in, ever",
							"In-region support engineering with global delivery standards",
							"Sustainability embedded in every commissioning decision"
						].map((b, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
						}, b))
					})
				]
			})]
		})
	});
}
var pillars = [
	{
		icon: Target,
		tag: "Mission",
		title: "Engineering control systems that quietly outperform.",
		copy: "Deliver integrated, future-proof systems that elevate efficiency, safety and sustainability across the built environment.",
		img: svc_bms_default
	},
	{
		icon: Eye,
		tag: "Vision",
		title: "A region of smarter, more resilient infrastructure.",
		copy: "Be the most trusted systems integrator in the region — known for engineering rigor, not marketing volume.",
		img: svc_iot_3_default
	},
	{
		icon: HeartHandshake,
		tag: "Values",
		title: "Integrity, mastery, partnership.",
		copy: "Heritage-rooted values guide how we hire, design and deliver — and how we hold ourselves accountable years after handover.",
		img: svc_comms_2_default
	}
];
function Pillars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t border-foreground/10 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "What guides us" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					...fadeUp,
					transition: {
						...fadeUp.transition,
						delay: .1
					},
					className: "mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl",
					children: [
						"The principles behind",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-accent",
							children: "every commissioning decision."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-5 md:grid-cols-3",
					children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
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
							delay: i * .1,
							ease: EASE
						},
						whileHover: { y: -4 },
						className: "group relative overflow-hidden rounded-3xl border border-foreground/10 bg-background p-6 hover-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[5/3] overflow-hidden rounded-2xl bg-foreground/5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: p.tag,
									className: "h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/55",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-3.5 w-3.5" }), p.tag]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl leading-tight",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-foreground/65",
								children: p.copy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "absolute right-6 top-6 h-4 w-4 text-foreground/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" })
						]
					}, p.tag))
				})
			]
		})
	});
}
var milestones = [
	{
		y: "1997",
		t: "Founded",
		c: "Established with a single mandate: rigorous, vendor-neutral controls engineering."
	},
	{
		y: "2006",
		t: "First city-scale ITS",
		c: "Delivered adaptive signal control across a metropolitan corridor."
	},
	{
		y: "2005",
		t: "Centralized fire monitoring",
		c: "Launched 24/7 multi-site monitoring platform with AI prioritization."
	},
	{
		y: "2007",
		t: "SCADA water practice",
		c: "Opened dedicated utility-grade SCADA practice for national water networks."
	},
	{
		y: "2025",
		t: "Operations & maintenance",
		c: "Scaled long-horizon O&M services for legacy and greenfield systems."
	}
];
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t border-foreground/10 bg-secondary/40 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono",
							children: "04"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-foreground/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Milestones" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					...fadeUp,
					transition: {
						...fadeUp.transition,
						delay: .1
					},
					className: "mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl",
					children: ["A decade of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-accent",
						children: "quiet, compounding work."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-[6.5rem] top-2 bottom-2 hidden w-px bg-foreground/15 md:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-10",
						children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								x: -20
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
								duration: .7,
								delay: i * .08,
								ease: EASE
							},
							className: "grid grid-cols-1 gap-3 md:grid-cols-[7rem_1fr] md:items-start md:gap-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl italic text-accent md:text-4xl",
								children: m.y
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative md:pl-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-[1.05rem] top-3 hidden h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-secondary md:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl md:text-2xl",
										children: m.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-2xl text-sm leading-relaxed text-foreground/65 md:text-base",
										children: m.c
									})
								]
							})]
						}, m.y))
					})]
				})
			]
		})
	});
}
function Pull() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t border-foreground/10 py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mx-auto h-10 w-10 text-accent/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					...fadeUp,
					className: "mt-8 font-display text-3xl leading-[1.15] tracking-tight md:text-5xl",
					children: [
						"“We architect future-ready ecosystems where",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-accent",
							children: "innovation meets reliability"
						}),
						" — turning long-horizon ambition into the systems that quietly run the day.”"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					...fadeUp,
					transition: {
						...fadeUp.transition,
						delay: .15
					},
					className: "mt-8 text-xs uppercase tracking-[0.22em] text-foreground/55",
					children: "The Saudi Controls Promise"
				})
			]
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
						children: ["Curious how we'd approach ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-accent",
							children: "your next system?"
						})]
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
							to: "/solutions",
							className: "inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-medium text-background/90 transition-colors hover:bg-background/10",
							children: ["Explore Solutions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})]
					})
				]
			})
		})
	});
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Promise$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pull, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AboutPage as component };
