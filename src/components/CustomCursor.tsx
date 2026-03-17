"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted,  setMounted]  = useState(false);
  const [isTouch,  setIsTouch]  = useState(false);
  const [visible,  setVisible]  = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Ref avoids stale-closure bug in onMove
  const visibleRef = useRef(false);

  // Dot tracks the mouse exactly
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring follows with a snappier spring (was stiffness:150, damping:18)
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 24, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 24, mass: 0.5 });

  useEffect(() => {
    setMounted(true);

    // Disable on touch/stylus screens
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    // Inject cursor:none so the browser arrow never shows
    const style = document.createElement("style");
    style.id = "custom-cursor-hide";
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      // Only call setState when value actually changes (avoid per-frame re-renders)
      if (!visibleRef.current) {
        setVisible(true);
        visibleRef.current = true;
      }
    };

    const onLeave = () => {
      setVisible(false);
      visibleRef.current = false;
    };
    const onEnter = () => {
      setVisible(true);
      visibleRef.current = true;
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setHovering(
        !!el.closest("a, button, [role='button'], input, textarea, select, label")
      );
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    document.addEventListener("mousemove",  onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);

    return () => {
      document.getElementById("custom-cursor-hide")?.remove();
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
    };
  }, [mouseX, mouseY]);

  if (!mounted || isTouch) return null;

  // Derived scale values
  const dotScale  = visible ? (clicking ? 0.5  : hovering ? 0 : 1) : 0;
  const ringScale = visible ? (clicking ? 0.75 : 1) : 0;

  return (
    <>
      {/* Dot — instant, 8 px, disappears on hover */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: dotScale }}
        transition={{
          scale: clicking
            ? { type: "spring", stiffness: 500, damping: 28 }
            : { type: "spring", stiffness: 380, damping: 26 },
        }}
      />

      {/* Ring — spring-lagged position, elastic size change, click contraction */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:           hovering ? 44 : 28,
          height:          hovering ? 44 : 28,
          scale:           ringScale,
          borderColor:     hovering
            ? "rgba(99,102,241,1.0)"
            : "rgba(99,102,241,0.7)",
          backgroundColor: hovering
            ? "rgba(99,102,241,0.12)"
            : "rgba(0,0,0,0)",
        }}
        transition={{
          width:           { type: "spring", stiffness: 380, damping: 28 },
          height:          { type: "spring", stiffness: 380, damping: 28 },
          scale: clicking
            ? { type: "spring", stiffness: 500, damping: 28 }
            : { type: "spring", stiffness: 380, damping: 28 },
          borderColor:     { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
        }}
      />
    </>
  );
}
