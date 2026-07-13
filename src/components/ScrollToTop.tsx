import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const R = 22;
  const C = 2 * Math.PI * R;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="stt"
          type="button"
          aria-label="Scroll to top"
          onClick={scrollTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.92 }}
          className="group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-foreground text-background shadow-lift ring-1 ring-black/10 transition-shadow hover:shadow-[0_20px_60px_-15px_oklch(0.18_0.02_240/0.55)]"
        >
          {/* progress ring */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 50 50"
          >
            <circle
              cx="25"
              cy="25"
              r={R}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.15"
              strokeWidth="2.5"
            />
            <circle
              cx="25"
              cy="25"
              r={R}
              fill="none"
              stroke="oklch(0.86 0.13 165)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - progress)}
              style={{ transition: "stroke-dashoffset 120ms linear" }}
            />
          </svg>
          <ArrowUp className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
