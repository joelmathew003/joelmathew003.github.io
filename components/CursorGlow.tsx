"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -300, y: -300 });
  const pos = useRef({ x: -300, y: -300 });
  const visible = useRef(false);
  const raf = useRef(0);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const glow = glowRef.current;
    const wrapper = wrapperRef.current;
    if (!glow || !wrapper) return;

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;
      glow.style.transform = `translate(${pos.current.x - 300}px, ${pos.current.y - 300}px)`;
      raf.current = requestAnimationFrame(loop);
    };

    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        wrapper.style.opacity = "1";
      }
    };

    const handleLeave = () => {
      visible.current = false;
      wrapper.style.opacity = "0";
    };

    const handleEnter = () => {
      visible.current = true;
      wrapper.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
    >
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--glow-color) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
