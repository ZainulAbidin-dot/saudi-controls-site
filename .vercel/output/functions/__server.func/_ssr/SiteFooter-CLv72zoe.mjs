import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Menu, n as X, p as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-CLv72zoe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-DWoTB44g.png";
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
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled || open ? "py-2 backdrop-blur-xl bg-background/70 border-b border-foreground/10 shadow-[0_8px_30px_-12px_oklch(0.18_0.02_240/0.15)]" : "py-3 bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 md:flex md:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-w-0 items-center",
					onClick: () => setOpen(false),
					"aria-label": "Saudi Controls — Home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Saudi Controls Limited",
						className: "h-10 w-auto md:h-12 shrink-0 object-contain"
					})
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						hash: "contact",
						onClick: () => setOpen(false),
						className: "group hidden items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lift md:inline-flex",
						children: ["Contact Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 transition-transform group-hover:rotate-12" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((v) => !v),
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/10 bg-background/60 text-foreground transition-all hover:bg-background md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: `md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-6 pb-6 pt-4",
				children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					activeOptions: l.exact ? { exact: true } : void 0,
					onClick: () => setOpen(false),
					activeProps: { className: "rounded-xl bg-foreground/5 px-4 py-3 text-base font-semibold text-foreground" },
					inactiveProps: { className: "rounded-xl px-4 py-3 text-base text-foreground/75 transition-colors hover:bg-foreground/5 hover:text-foreground" },
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "contact",
					onClick: () => setOpen(false),
					className: "mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background",
					children: ["Contact Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" })]
				})]
			})
		})]
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
				to: "/solutions#its"
			},
			{
				label: "Building Management",
				to: "/solutions#bie"
			},
			{
				label: "Security Systems",
				to: "/solutions#fire"
			},
			{
				label: "IoT & AI",
				to: "/solutions#iot"
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "inline-flex items-center",
				"aria-label": "Saudi Controls — Home",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex rounded-xl bg-background p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Saudi Controls Limited",
						className: "h-12 w-auto object-contain"
					})
				})
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
export { SiteNav as n, SiteFooter as t };
