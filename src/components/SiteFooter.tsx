import { Link } from "@tanstack/react-router";
import logoAsset from "../assets/logo.png";

type Col = {
  h: string;
  links: {
    label: string;
    to?: "/" | "/about" | "/solutions" | "/projects";
    hash?: string;
    href?: string;
  }[];
};

const columns: Col[] = [
  {
    h: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Solutions", to: "/solutions" },
      { label: "Projects", to: "/projects" },
      { label: "Contact", to: "/", hash: "contact" },
    ],
  },
  {
    h: "Practices",
    links: [
      { label: "Intelligent Transport", to: "/solutions" },
      { label: "Building Management", to: "/solutions" },
      { label: "Security Systems", to: "/solutions" },
      { label: "IoT & AI", to: "/solutions" },
    ],
  },
  {
    h: "Contact",
    links: [
      { label: "info@saudicontrols.com", href: "mailto:info@saudicontrols.com" },
      { label: "+966 (11) 480 3338", href: "tel:+966114803338" },
      { label: "Riyadh, Saudi Arabia" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground py-14 text-background/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center" aria-label="Saudi Controls — Home">
            <span className="inline-flex rounded-xl bg-background p-3">
              <img
                src={logoAsset}
                alt="Saudi Controls Limited"
                className="h-12 w-auto object-contain"
              />
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm text-background/60">
            Designing, integrating and maintaining the systems that move industry and cities
            forward.
          </p>
        </div>

        {columns.map((c) => (
          <div key={c.h}>
            <div className="text-xs uppercase tracking-[0.2em] text-background/40">{c.h}</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.links.map((l) => {
                const cls = "text-background/80 transition-colors hover:text-background";
                if (l.to) {
                  return (
                    <li key={l.label}>
                      <Link to={l.to} hash={l.hash} className={cls}>
                        {l.label}
                      </Link>
                    </li>
                  );
                }
                if (l.href) {
                  return (
                    <li key={l.label}>
                      <a href={l.href} className={cls}>
                        {l.label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={l.label} className="text-background/80">
                    {l.label}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-background/10 px-6 pt-6 text-xs text-background/50 sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} Saudi Controls Ltd. All rights reserved.</span>
        <span>Empowering vision. Engineered by trust.</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
