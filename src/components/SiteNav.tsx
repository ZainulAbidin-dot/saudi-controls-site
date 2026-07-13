import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "../assets/logo.png";

const navLinks: {
  to: "/" | "/about" | "/solutions" | "/projects";
  label: string;
  exact?: boolean;
}[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projects", label: "Projects" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "py-2 backdrop-blur-xl bg-background/70 border-b border-foreground/10 shadow-[0_8px_30px_-12px_oklch(0.18_0.02_240/0.15)]"
          : "py-3 bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 md:flex md:justify-between">
        <Link
          to="/"
          className="flex min-w-0 items-center"
          onClick={() => setOpen(false)}
          aria-label="Saudi Controls — Home"
        >
          <img
            src={logoAsset}
            alt="Saudi Controls Limited"
            className="h-10 w-auto md:h-12 shrink-0 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={l.exact ? { exact: true } : undefined}
              activeProps={{
                className: "story-link text-sm font-medium text-foreground",
              }}
              inactiveProps={{
                className:
                  "story-link text-sm text-foreground/70 transition-colors hover:text-foreground",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="contact"
            onClick={() => setOpen(false)}
            className="group hidden items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lift md:inline-flex"
          >
            Contact Us
            <Phone className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/10 bg-background/60 text-foreground transition-all hover:bg-background md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 pb-6 pt-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={l.exact ? { exact: true } : undefined}
              onClick={() => setOpen(false)}
              activeProps={{
                className:
                  "rounded-xl bg-foreground/5 px-4 py-3 text-base font-semibold text-foreground",
              }}
              inactiveProps={{
                className:
                  "rounded-xl px-4 py-3 text-base text-foreground/75 transition-colors hover:bg-foreground/5 hover:text-foreground",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
          >
            Contact Us
            <Phone className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default SiteNav;
