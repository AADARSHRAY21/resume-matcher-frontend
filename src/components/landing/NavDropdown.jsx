import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function NavDropdown({ label, width = 860, children }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const timer = useRef(null);
  const { pathname } = useLocation();

  const show = () => {
    clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 120);
  };
  const close = () => setOpen(false);

  // close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // close on Esc / click outside
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  // clear pending timer on unmount
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    // NOTE: no "relative" here, so the panel positions against the fixed <nav>
    <div ref={wrapRef} onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={show}
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
          open
            ? "text-text bg-panel-hover"
            : "text-text-muted hover:text-text"
        }`}
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -8, x: "-50%" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ width: `min(${width}px, calc(100vw - 3rem))` }}
            className="absolute left-1/2 top-full pt-2"
          >
            <div className="rounded-2xl border border-line bg-panel shadow-xl p-3">
              {typeof children === "function" ? children(close) : children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}