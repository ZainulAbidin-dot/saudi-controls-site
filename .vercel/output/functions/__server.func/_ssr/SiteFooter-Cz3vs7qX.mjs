import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-Cz3vs7qX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var svc_iot_default = "/assets/svc-iot-BvW7_zKN.jpg";
var svc_comms_default = "/assets/svc-comms-sItjs544.jpg";
var navLinks = [
	{
		to: "/",
		label: "Home",
		exact: true
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/solutions",
		label: "Solutions"
	},
	{
		to: "/projects",
		label: "Projects"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "py-2 backdrop-blur-xl bg-background/70 border-b border-foreground/10 shadow-[0_8px_30px_-12px_oklch(0.18_0.02_240/0.15)]" : "py-3 bg-background/40 backdrop-blur-md"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg italic",
							children: "S"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold tracking-tight",
							children: "SAUDI CONTROLS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.18em] text-foreground/60",
							children: "Engineering & Systems Integration"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-9 md:flex",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: l.exact ? { exact: true } : void 0,
						activeProps: { className: "story-link text-sm font-medium text-foreground" },
						inactiveProps: { className: "story-link text-sm text-foreground/70 transition-colors hover:text-foreground" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "contact",
					className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lift",
					children: ["Contact Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 transition-transform group-hover:rotate-12" })]
				})
			]
		})
	});
}
var columns = [
	{
		h: "Company",
		links: [
			{
				label: "About",
				to: "/about"
			},
			{
				label: "Solutions",
				to: "/solutions"
			},
			{
				label: "Projects",
				to: "/projects"
			},
			{
				label: "Contact",
				to: "/",
				hash: "contact"
			}
		]
	},
	{
		h: "Practices",
		links: [
			{
				label: "Intelligent Transport",
				to: "/solutions"
			},
			{
				label: "Building Management",
				to: "/solutions"
			},
			{
				label: "Security Systems",
				to: "/solutions"
			},
			{
				label: "IoT & AI",
				to: "/solutions"
			}
		]
	},
	{
		h: "Contact",
		links: [
			{
				label: "info@saudicontrols.com",
				href: "mailto:info@saudicontrols.com"
			},
			{
				label: "+966 (11) 480 3338",
				href: "tel:+966114803338"
			},
			{ label: "Riyadh, Saudi Arabia" }
		]
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-foreground py-14 text-background/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-9 w-9 place-items-center rounded-xl bg-background text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg italic",
						children: "S"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-bold tracking-tight text-background",
					children: "SAUDI CONTROLS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-[0.18em] text-background/50",
					children: "Engineering & Systems Integration"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xs text-sm text-background/60",
				children: "Designing, integrating and maintaining the systems that move industry and cities forward."
			})] }), columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-[0.2em] text-background/40",
				children: c.h
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2.5 text-sm",
				children: c.links.map((l) => {
					const cls = "text-background/80 transition-colors hover:text-background";
					if (l.to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						hash: l.hash,
						className: cls,
						children: l.label
					}) }, l.label);
					if (l.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: cls,
						children: l.label
					}) }, l.label);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-background/80",
						children: l.label
					}, l.label);
				})
			})] }, c.h))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-background/10 px-6 pt-6 text-xs text-background/50 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Saudi Controls Ltd. All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Empowering vision. Engineered by trust." })]
		})]
	});
}
//#endregion
export { svc_iot_default as i, SiteNav as n, svc_comms_default as r, SiteFooter as t };
