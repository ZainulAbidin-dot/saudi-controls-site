import { o as __toESM } from "../_runtime.mjs";
import { t as logo_default } from "./logo-Dp6Mx8tO.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { P as useRouter, _ as Link, c as HeadContent, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, m as lazyRouteComponent, p as Outlet, s as Scripts, u as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowUp } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as company, r as data_default, t as aboutData } from "./routes-BpdpevyR.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DncIsmy4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-S07rTp60.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function PageTransition({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		mode: "wait",
		initial: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 18,
				filter: "blur(6px)"
			},
			animate: {
				opacity: 1,
				y: 0,
				filter: "blur(0px)"
			},
			exit: {
				opacity: 0,
				y: -12,
				filter: "blur(6px)"
			},
			transition: {
				duration: .55,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			children
		}, pathname)
	});
}
function ScrollToTop() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			const scrolled = h.scrollTop;
			const height = h.scrollHeight - h.clientHeight;
			setProgress(height > 0 ? scrolled / height : 0);
			setVisible(scrolled > 480);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const scrollTop = () => window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
	const R = 22;
	const C = 2 * Math.PI * R;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		type: "button",
		"aria-label": "Scroll to top",
		onClick: scrollTop,
		initial: {
			opacity: 0,
			y: 20,
			scale: .8
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 20,
			scale: .8
		},
		transition: {
			duration: .35,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		whileHover: { y: -4 },
		whileTap: { scale: .92 },
		className: "group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-foreground text-background shadow-lift ring-1 ring-black/10 transition-shadow hover:shadow-[0_20px_60px_-15px_oklch(0.18_0.02_240/0.55)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 h-full w-full -rotate-90",
			viewBox: "0 0 50 50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "25",
				r: R,
				fill: "none",
				stroke: "currentColor",
				strokeOpacity: "0.15",
				strokeWidth: "2.5"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "25",
				r: R,
				fill: "none",
				stroke: "oklch(0.86 0.13 165)",
				strokeWidth: "2.5",
				strokeLinecap: "round",
				strokeDasharray: C,
				strokeDashoffset: C * (1 - progress),
				style: { transition: "stroke-dashoffset 120ms linear" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5" })]
	}, "stt") });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Saudi Controls" },
			{
				name: "description",
				content: "Saudi Controls designs, integrates and maintains advanced control, automation and infrastructure systems for industry and smart cities."
			},
			{
				property: "og:title",
				content: "Saudi Controls"
			},
			{
				property: "og:description",
				content: "Saudi Controls designs, integrates and maintains advanced control, automation and infrastructure systems for industry and smart cities."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Saudi Controls"
			},
			{
				name: "twitter:description",
				content: "Saudi Controls designs, integrates and maintains advanced control, automation and infrastructure systems for industry and smart cities."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6657f9cc-5e89-43ed-89a0-b54d74bdea31/id-preview-0a4b1891--0ed63f24-8992-4fa1-92a8-bd89a96326c8.lovable.app-1781969074834.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6657f9cc-5e89-43ed-89a0-b54d74bdea31/id-preview-0a4b1891--0ed63f24-8992-4fa1-92a8-bd89a96326c8.lovable.app-1781969074834.png"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: logo_default,
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: logo_default,
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollToTop, {})]
	});
}
var $$splitComponentImporter$4 = () => import("./solutions-BPCXnBIk.mjs");
var Route$4 = createFileRoute("/solutions")({
	head: () => ({ meta: [
		{ title: "Solutions —  Saudi Controls" },
		{
			name: "description",
			content: "Bespoke technological solutions across intelligent transport, smart buildings, centralized fire monitoring and SCADA water management."
		},
		{
			property: "og:title",
			content: "Solutions — Saudi Controls"
		},
		{
			property: "og:description",
			content: "Elevating innovation through bespoke technological mastery — where vision meets precision."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./projects-1Sh6Zbzn.mjs");
var Route$3 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Projects — Saudi Controls" },
		{
			name: "description",
			content: "Three decades of mission-critical control, automation and intelligent infrastructure projects delivered across the Kingdom."
		},
		{
			property: "og:title",
			content: "Projects — Saudi Controls"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-kLXak1P6.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Saudi Controls " },
		{
			name: "description",
			content: "Rooted in heritage, engineered for the future. Saudi Controls architects future-ready control ecosystems where innovation meets reliability."
		},
		{
			property: "og:title",
			content: "About — Saudi Controls "
		},
		{
			property: "og:description",
			content: "Where local talent meets global expertise to turn ambition into operational reality."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-CgnPQg_t.mjs");
data_default.latest_news;
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [{ title: `${company.name} — ${company.tagline}` }, {
		name: "description",
		content: aboutData.summary
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./building-management-system-bms-Bf_hjgbb.mjs");
var Route = createFileRoute("/solutions/building-management-system-bms")({
	head: () => ({
		meta: [
			{ title: "Building Management System (BMS) in Saudi Arabia | Saudi Controls" },
			{
				name: "description",
				content: "Saudi Controls delivers Building Management System (BMS) solutions in Saudi Arabia for centralized HVAC, lighting, energy, security and building automation, including design, integration, installation and maintenance."
			},
			{
				name: "keywords",
				content: "building management system Saudi Arabia, BMS Saudi Arabia, BMS solutions, BMS services, building automation system, building automation Saudi Arabia, BMS company Saudi Arabia, BMS contractor Saudi Arabia, BMS integration, HVAC controls, BMS installation, BMS maintenance, BMS commissioning"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Building Management System (BMS) in Saudi Arabia | Saudi Controls"
			},
			{
				property: "og:description",
				content: "End-to-end Building Management System and building automation solutions in Saudi Arabia from Saudi Controls."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.saudicontrols.com/solutions/building-management-system-bms"
			},
			{
				property: "og:site_name",
				content: "Saudi Controls"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Building Management System (BMS) in Saudi Arabia | Saudi Controls"
			},
			{
				name: "twitter:description",
				content: "Building Management System, building automation, HVAC controls and systems integration solutions in Saudi Arabia."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.saudicontrols.com/solutions/building-management-system-bms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SolutionsRoute = Route$4.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$5
});
var ProjectsRoute = Route$3.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var SolutionsRouteChildren = { SolutionsBuildingManagementSystemBmsRoute: Route.update({
	id: "/building-management-system-bms",
	path: "/building-management-system-bms",
	getParentRoute: () => SolutionsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ProjectsRoute,
	SolutionsRoute: SolutionsRoute._addFileChildren(SolutionsRouteChildren)
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
