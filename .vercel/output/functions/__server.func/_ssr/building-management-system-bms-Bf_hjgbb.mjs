import "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteNav, t as SiteFooter } from "./SiteFooter-BqwPtmLh.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		number: "01",
		title: "BMS Design & Engineering",
		description: "We develop BMS architectures based on the building's operational requirements, equipment, control philosophy and integration requirements."
	},
	{
		number: "02",
		title: "BMS Installation & Implementation",
		description: "Our engineering teams support the installation and implementation of controllers, sensors, field devices, communication networks and BMS workstations."
	},
	{
		number: "03",
		title: "System Integration",
		description: "We integrate building equipment and subsystems into a centralized management platform using appropriate communication and integration technologies."
	},
	{
		number: "04",
		title: "BMS Programming & Configuration",
		description: "Controllers, sequences of operation, alarms, schedules, graphics and control parameters are configured according to project requirements."
	},
	{
		number: "05",
		title: "Monitoring & Centralized Control",
		description: "Operators can monitor equipment status, alarms, temperatures, energy information and other building parameters through a centralized interface."
	},
	{
		number: "06",
		title: "Commissioning & Testing",
		description: "We support testing, commissioning and verification of BMS points, control sequences, alarms, graphics and integrated systems."
	},
	{
		number: "07",
		title: "Maintenance & Technical Support",
		description: "Ongoing support helps maintain system availability, identify faults and ensure that the BMS continues to meet operational requirements."
	},
	{
		number: "08",
		title: "BMS Upgrades & Modernization",
		description: "Existing building automation systems can be upgraded, expanded or integrated with newer technologies to improve functionality and visibility."
	}
];
var bmsSystems = [
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
	"IoT and building automation systems"
];
var benefits = [
	{
		title: "Energy Efficiency",
		description: "A BMS provides visibility into building energy consumption and allows operators to optimize HVAC, lighting and other energy-consuming equipment."
	},
	{
		title: "Centralized Monitoring",
		description: "Instead of monitoring individual systems separately, operators can access information from multiple building systems through a centralized BMS interface."
	},
	{
		title: "Improved HVAC Performance",
		description: "BMS technology enables monitoring and control of HVAC equipment such as chillers, AHUs, FCUs, pumps and ventilation systems."
	},
	{
		title: "Real-Time Alarms",
		description: "A BMS can generate alarms when equipment or monitored parameters move outside predefined limits, allowing facility teams to respond more quickly."
	},
	{
		title: "Predictive & Preventive Maintenance",
		description: "Historical trends and equipment data can help maintenance teams identify abnormal operating conditions before they develop into major failures."
	},
	{
		title: "Improved Occupant Comfort",
		description: "By continuously monitoring environmental conditions, BMS systems can help maintain appropriate temperature, humidity and indoor conditions."
	},
	{
		title: "Centralized Facility Operations",
		description: "A BMS gives facility managers a consolidated view of building systems, helping them manage complex facilities more efficiently."
	}
];
var applications = [
	{
		title: "Commercial Buildings & Offices",
		description: "Centralized HVAC, lighting, energy monitoring and building automation for offices and commercial facilities."
	},
	{
		title: "Hospitals & Healthcare Facilities",
		description: "Monitoring and control of critical environmental conditions and building systems where reliability and precise control are important."
	},
	{
		title: "Hotels & Hospitality",
		description: "Building automation for guest comfort, HVAC operation, energy management and centralized facility monitoring."
	},
	{
		title: "Industrial Facilities",
		description: "Monitoring and control of mechanical, electrical and environmental systems across industrial facilities."
	},
	{
		title: "Shopping Malls & Retail",
		description: "Integrated control of HVAC, lighting, energy consumption and other building systems."
	},
	{
		title: "Government & Institutional Buildings",
		description: "Centralized building automation and monitoring for large government and institutional facilities."
	},
	{
		title: "Educational Facilities",
		description: "Energy-efficient HVAC, lighting and environmental monitoring for schools, universities and other educational buildings."
	}
];
var faqs = [
	{
		question: "What does BMS stand for?",
		answer: "BMS stands for Building Management System. It is a centralized system used to monitor and control building systems such as HVAC, lighting, energy and other connected equipment."
	},
	{
		question: "What is the purpose of a BMS?",
		answer: "The primary purpose of a BMS is to improve the monitoring, control and operation of building systems while supporting energy efficiency, occupant comfort and reliable facility operations."
	},
	{
		question: "What systems can a BMS control?",
		answer: "Depending on the system architecture, a BMS can monitor and control HVAC equipment, chillers, AHUs, FCUs, pumps, lighting, energy meters and other connected building systems."
	},
	{
		question: "What is the difference between BMS and BAS?",
		answer: "BMS means Building Management System, while BAS means Building Automation System. The terms are often used interchangeably, although the exact scope can vary between projects and vendors."
	},
	{
		question: "Can a BMS reduce energy consumption?",
		answer: "Yes. A BMS can help identify energy waste and optimize equipment operation through scheduling, monitoring, automated controls and energy management strategies."
	},
	{
		question: "Can a BMS integrate with existing building systems?",
		answer: "Yes. Modern BMS platforms can integrate with supported existing equipment and third-party systems using appropriate communication protocols and integration technologies."
	},
	{
		question: "Does Saudi Controls provide BMS services in Saudi Arabia?",
		answer: "Yes. Saudi Controls provides BMS and building automation solutions as part of its systems integration capabilities in Saudi Arabia."
	}
];
var serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Building Management System (BMS) in Saudi Arabia",
	serviceType: "Building Management System and Building Automation",
	provider: {
		"@type": "Organization",
		name: "Saudi Controls",
		url: "https://www.saudicontrols.com/"
	},
	areaServed: {
		"@type": "Country",
		name: "Saudi Arabia"
	},
	description: "Building Management System (BMS) solutions in Saudi Arabia covering design, integration, installation, programming, commissioning, monitoring, maintenance and building automation.",
	url: "https://www.saudicontrols.com/solutions/building-management-system-bms"
};
var faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqs.map((faq) => ({
		"@type": "Question",
		name: faq.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: faq.answer
		}
	}))
};
function ArrowIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		className: "h-5 w-5",
		fill: "none",
		stroke: "currentColor",
		viewBox: "0 0 24 24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 2,
			d: "M19 12H5M11 18l-6-6 6-6"
		})
	});
}
function CheckIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		className: "h-5 w-5 shrink-0",
		fill: "none",
		stroke: "currentColor",
		viewBox: "0 0 24 24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 2,
			d: "m5 12 4 4L19 6"
		})
	});
}
function BuildingIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		className: "h-7 w-7",
		fill: "none",
		stroke: "currentColor",
		viewBox: "0 0 24 24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.8,
			d: "M4 21V8l8-5 8 5v13M8 21v-7h8v7M8 10h.01M12 10h.01M16 10h.01M8 6h.01M12 6h.01M16 6h.01"
		})
	});
}
function BuildingManagementSystemPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(serviceSchema) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative isolate overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-radial-mint opacity-70 blur-2xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-10 right-0 h-[22rem] w-[22rem] rounded-full bg-radial-amber opacity-60 blur-2xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(from_var(--color-background)_l_c_h_/_0.9))]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-7xl px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/solutions",
									className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground/60 transition-colors hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowIcon, {}), "Back to Solutions"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/70 backdrop-blur-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildingIcon, {}), "Building Automation & Systems Integration"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-7 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5rem]",
										children: "Building Management System (BMS) in Saudi Arabia"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-8 max-w-2xl text-lg leading-relaxed text-foreground/65 md:text-xl",
										children: "Intelligent Building Management Systems for smarter, more efficient and connected buildings across Saudi Arabia."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-2xl text-base leading-7 text-foreground/65",
										children: "Saudi Controls delivers end-to-end BMS solutions covering system design, integration, installation, programming, commissioning, monitoring, maintenance and building automation."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-10 flex flex-wrap gap-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#bms-services",
											className: "inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5",
											children: "Explore BMS Services"
										})
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[2rem] border border-foreground/10 bg-white/70 p-5 shadow-lift backdrop-blur-xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-5 flex items-center justify-between border-b border-foreground/10 pb-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] uppercase tracking-[0.2em] text-foreground/50",
													children: "Building Management System"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-lg font-medium text-foreground",
													children: "Central Control Dashboard"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "inline-flex items-center gap-2 rounded-full bg-mint-soft px-3 py-1.5 text-xs font-medium text-accent",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-accent" }), "System Online"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-2 gap-3",
												children: [
													{
														value: "24°C",
														label: "HVAC"
													},
													{
														value: "82%",
														label: "Energy"
													},
													{
														value: "47",
														label: "Equipment"
													},
													{
														value: "03",
														label: "Alarms"
													}
												].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-2xl border border-foreground/10 bg-secondary p-4",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs uppercase tracking-[0.18em] text-foreground/50",
															children: item.label
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-2xl font-display text-foreground",
															children: item.value
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-1 text-xs text-foreground/50",
															children: [
																item.label === "HVAC" && "Normal operation",
																item.label === "Energy" && "Monitoring active",
																item.label === "Equipment" && "Devices online",
																item.label === "Alarms" && "Requires attention"
															]
														})
													]
												}, item.label))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-5 rounded-2xl border border-foreground/10 bg-secondary/60 p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-xs uppercase tracking-[0.18em] text-foreground/50",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Building systems" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 space-y-3 text-sm text-foreground/75",
													children: [
														"HVAC & Chillers",
														"Energy & Power Monitoring",
														"Lighting & Automation",
														"Sensors & IoT"
													].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
													}, item))
												})]
											})
										]
									})
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-foreground/10 bg-background py-24 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-medium uppercase tracking-[0.22em] text-foreground/50",
								children: "What is a BMS?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl",
								children: [
									"Intelligent control for ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-accent",
										children: "modern buildings"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-base leading-relaxed text-foreground/65 md:text-lg",
								children: [
									"A ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: "Building Management System (BMS)"
									}),
									" is an integrated building automation and control platform that enables organizations to monitor, manage and optimize critical building systems from a centralized interface."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed text-foreground/65",
								children: "Saudi Controls provides Building Management System solutions across Saudi Arabia, helping building owners and facility operators improve operational visibility, energy performance, occupant comfort and system reliability."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed text-foreground/65",
								children: "A modern BMS can collect information from sensors, controllers, meters and connected equipment and present it through a centralized operator workstation, dashboard or web-based interface."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[2rem] border border-foreground/10 bg-secondary/50 p-7 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-soft text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildingIcon, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-medium text-foreground",
									children: "Systems a BMS can integrate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-foreground/60",
									children: "Centralized monitoring and control"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7 grid gap-3 sm:grid-cols-2",
								children: bmsSystems.map((system) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3 rounded-2xl border border-foreground/10 bg-background p-3 text-sm text-foreground/75",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: system })]
								}, system))
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "bms-services",
					className: "border-t border-foreground/10 bg-secondary/40 py-24 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-12 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium uppercase tracking-[0.22em] text-foreground/50",
									children: "Saudi Controls BMS Solutions"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl",
									children: [
										"End-to-end BMS services in ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-accent",
											children: "Saudi Arabia"
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground/65 md:text-lg",
									children: "We provide BMS solutions for new construction, existing buildings and facility modernization programs, from engineering and integration through commissioning and ongoing support."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4",
							children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group rounded-[1.75rem] border border-foreground/10 bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-soft text-sm font-bold text-accent",
										children: service.number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-medium text-foreground",
										children: service.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-7 text-foreground/68",
										children: service.description
									})
								]
							}, service.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-foreground/10 bg-background py-24 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-12 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-medium uppercase tracking-[0.22em] text-foreground/50",
										children: "BMS Architecture"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl",
										children: [
											"How does a Building Management System",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "italic text-accent",
												children: "work?"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground/65 md:text-lg",
										children: "A BMS combines field devices, controllers, communication networks and software to provide centralized monitoring and automated control."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4",
								children: [
									{
										number: "01",
										title: "Field Devices",
										text: "Sensors and meters collect temperature, humidity, pressure, energy, flow, occupancy and other building data."
									},
									{
										number: "02",
										title: "Controllers",
										text: "Building controllers receive field data and execute programmed control logic for connected equipment."
									},
									{
										number: "03",
										title: "Communication Network",
										text: "Controllers and devices communicate through supported building automation protocols and networks such as BACnet and Modbus."
									},
									{
										number: "04",
										title: "BMS Software",
										text: "The central interface provides equipment monitoring, control, alarms, schedules, trends, historical data and reports."
									}
								].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-[1.75rem] border border-foreground/10 bg-card p-6 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium uppercase tracking-[0.2em] text-accent",
											children: step.number
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 text-xl font-medium text-foreground",
											children: step.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 leading-7 text-foreground/68",
											children: step.text
										})
									]
								}, step.number))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 overflow-hidden rounded-[2rem] bg-foreground p-6 text-background sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-6 text-center text-xs font-medium uppercase tracking-[0.22em] text-background/70",
										children: "BMS Control Architecture"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid items-center gap-4 text-center sm:grid-cols-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl border border-background/15 bg-white/5 px-4 py-5 text-sm font-medium text-background",
												children: [
													"Sensors",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"& Meters"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "hidden text-2xl text-accent sm:block",
												children: "→"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl border border-background/15 bg-white/5 px-4 py-5 text-sm font-medium text-background",
												children: [
													"BMS",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"Controllers"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "hidden text-2xl text-accent sm:block",
												children: "→"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl bg-accent px-4 py-5 text-sm font-medium text-background",
												children: [
													"Central BMS",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"Platform"
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 text-center text-sm text-background/70",
										children: "Monitoring → Control Logic → Equipment Automation → Analytics"
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-foreground/10 bg-foreground py-24 text-background md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-12 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium uppercase tracking-[0.22em] text-background/70",
									children: "Why BMS?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl",
									children: ["Benefits of a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-accent",
										children: "Building Management System"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-5 max-w-3xl text-base leading-relaxed text-background/70 md:text-lg",
									children: "A properly engineered BMS helps facility teams improve visibility, operational control, comfort and building performance."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3",
							children: benefits.map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-[1.75rem] border border-background/10 bg-white/5 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15 text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-medium text-background",
										children: benefit.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 leading-7 text-background/70",
										children: benefit.description
									})
								]
							}, benefit.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-foreground/10 bg-background py-24 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-12 max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium uppercase tracking-[0.22em] text-foreground/50",
									children: "Applications"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl",
									children: [
										"BMS applications across ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-accent",
											children: "Saudi Arabia"
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-base leading-relaxed text-foreground/65 md:text-lg",
									children: "Saudi Controls can tailor building automation and BMS solutions to the operational requirements of different facility types."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
							children: applications.map((application) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group rounded-[1.75rem] border border-foreground/10 bg-secondary/50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-soft text-accent transition group-hover:bg-accent/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildingIcon, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-medium text-foreground",
										children: application.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 leading-7 text-foreground/68",
										children: application.description
									})
								]
							}, application.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-foreground/10 bg-secondary/40 py-24 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-medium uppercase tracking-[0.22em] text-foreground/50",
								children: "BMS Integration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl",
								children: [
									"BMS integration & ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-accent",
										children: "building automation"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base leading-relaxed text-foreground/65 md:text-lg",
								children: "A major advantage of a modern Building Management System is the ability to integrate different building systems into a unified operational environment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed text-foreground/65",
								children: "Saudi Controls specializes in systems integration, allowing BMS platforms to exchange information with supported building equipment and technologies."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed text-foreground/65",
								children: "Depending on the project, integration can include HVAC, lighting, energy monitoring, sensors, IoT devices and other building systems."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								{
									title: "HVAC + BMS",
									items: [
										"Chillers",
										"AHUs",
										"FCUs",
										"VAVs",
										"Pumps"
									]
								},
								{
									title: "Energy + BMS",
									items: [
										"Energy meters",
										"Electrical panels",
										"Power monitoring",
										"Energy dashboards"
									]
								},
								{
									title: "Building Systems + BMS",
									items: [
										"Lighting",
										"Security interfaces",
										"Sensors",
										"IoT devices"
									]
								},
								{
									title: "Operational Interface",
									items: [
										"Central monitoring",
										"Alarms",
										"Trends",
										"Reports"
									]
								}
							].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[1.75rem] border border-foreground/10 bg-card p-6 shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-medium text-foreground",
									children: group.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2",
									children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2 text-sm text-foreground/75",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
										}), item]
									}, item))
								})]
							}, group.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-foreground/10 bg-background py-24 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-medium uppercase tracking-[0.22em] text-foreground/50",
								children: "Saudi Controls"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl",
								children: [
									"Why choose ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-accent",
										children: "Saudi Controls"
									}),
									" for BMS?"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base leading-relaxed text-foreground/65 md:text-lg",
								children: "Saudi Controls combines systems integration, engineering and technology expertise to deliver building automation solutions designed around the requirements of each facility."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed text-foreground/65",
								children: "Our approach treats BMS as part of the wider building technology ecosystem, helping organizations connect systems, improve visibility and support more efficient facility operations."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/",
								className: "mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground",
								children: ["Learn more about Saudi Controls", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowIcon, {})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[2rem] border border-foreground/10 bg-foreground p-8 text-background shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-medium text-background",
								children: "Our BMS capabilities"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-3 sm:grid-cols-2",
								children: [
									"BMS system design",
									"Building automation",
									"Control system integration",
									"HVAC controls",
									"Energy monitoring",
									"IoT integration",
									"Communication systems",
									"System programming",
									"Commissioning",
									"Maintenance and technical support"
								].map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3 rounded-2xl border border-background/10 bg-white/5 p-3 text-sm text-background/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
									}), capability]
								}, capability))
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-foreground/10 bg-secondary/40 py-24 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-4xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-12 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium uppercase tracking-[0.22em] text-foreground/50",
									children: "Frequently Asked Questions"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl",
									children: [
										"Questions about ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-accent",
											children: "BMS"
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg",
									children: "Common questions about Building Management Systems, building automation and BMS services in Saudi Arabia."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: faqs.map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group rounded-[1.5rem] border border-foreground/10 bg-card p-5 shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
									className: "cursor-pointer list-none pr-8 font-medium text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative block",
										children: [faq.question, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute right-0 top-0 text-xl font-normal text-accent transition-transform group-open:rotate-45",
											children: "+"
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 border-t border-foreground/10 pt-4 text-base leading-7 text-foreground/68",
									children: faq.answer
								})]
							}, faq.question))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative border-t border-foreground/10 bg-foreground py-28 text-background md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-7xl px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-3xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-medium uppercase tracking-[0.22em] text-background/70",
										children: "Building Management System"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl",
										children: ["Ready to modernize your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-accent",
											children: "building?"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-base leading-relaxed text-background/70 md:text-lg",
										children: "Improve building visibility, automation and operational efficiency with a professionally engineered Building Management System in Saudi Arabia."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/solutions",
									className: "inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-medium text-background/90 transition-colors hover:bg-background/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowIcon, {}), "Back to Solutions"]
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	] });
}
//#endregion
export { BuildingManagementSystemPage as component };
