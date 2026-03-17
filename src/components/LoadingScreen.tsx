"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function LoadingScreen() {
  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const windowLoaded = useRef(false);
  const timerFired = useRef(false);

  useEffect(() => {
    const tryDone = () => {
      if (windowLoaded.current && timerFired.current) setVisible(false);
    };

    if (document.readyState === "complete") {
      windowLoaded.current = true;
    } else {
      const onLoad = () => {
        windowLoaded.current = true;
        tryDone();
      };
      window.addEventListener("load", onLoad);
    }

    const t = setTimeout(
      () => {
        timerFired.current = true;
        tryDone();
      },
      prefersReduced ? 0 : 2000
    );

    return () => clearTimeout(t);
  }, [prefersReduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f]"
          aria-hidden="true"
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo mark */}
          <p className="text-5xl font-bold gradient-text mb-3">
            AR<span className="logo-dot">.</span>
          </p>

          {/* Name */}
          <p className="font-mono text-xs tracking-[0.35em] uppercase text-text-muted mb-10">
            Abdul Rehman
          </p>

          {/* Loading bar */}
          <div className="w-48 h-[2px] bg-surface-2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : { duration: 1.6, ease: [0.22, 1, 0.36, 1] }
              }
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
