"use client";

import { useRef, useEffect, useCallback, useState } from "react";

const SCRIPTS = [
  "アイウエオカキクケコサシスセソタチツテトナニヌネノ",
  "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩ",
  "ابتثجحخدذرزسشصضطظعغفقكلمنهوي",
  "αβγδεζηθικλμνξοπρστυφχψω",
  "가나다라마바사아자차카타파하",
];

const ALL_CHARS = SCRIPTS.join("");

function randomChar() {
  return ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)];
}

interface WaveNameProps {
  text: string;
}

export function WaveName({ text }: WaveNameProps) {
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [resolved, setResolved] = useState(false);

  const chars = text.replace(/ /g, "").split("");

  useEffect(() => {
    const totalChars = chars.length;
    setDisplayed(chars.map(() => randomChar()));

    const resolveDelays: NodeJS.Timeout[] = [];

    const scrambleInterval = setInterval(() => {
      setDisplayed((prev) =>
        prev.map((ch, i) => {
          if (ch === chars[i]) return ch;
          return randomChar();
        })
      );
    }, 90);

    chars.forEach((char, i) => {
      const delay = 600 + i * 150;
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[i] = char;
          return next;
        });

        if (i === totalChars - 1) {
          setTimeout(() => {
            clearInterval(scrambleInterval);
            setResolved(true);
          }, 150);
        }
      }, delay);
      resolveDelays.push(timeout);
    });

    return () => {
      clearInterval(scrambleInterval);
      resolveDelays.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const INFLUENCE = 90;
  const MAX_PUSH = 10;

  const animate = useCallback(() => {
    const { x: mx, y: my } = mouseRef.current;

    for (const el of charRefs.current) {
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - mx;
      const dy = cy - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > INFLUENCE || dist === 0) {
        el.style.transform = "translate(0px, 0px)";
        continue;
      }

      const t = 1 - dist / INFLUENCE;
      const ease = t * t * (3 - 2 * t);
      const angle = Math.atan2(dy, dx);
      const pushX = Math.cos(angle) * MAX_PUSH * ease;
      const pushY = Math.sin(angle) * MAX_PUSH * ease;

      el.style.transform = `translate(${pushX}px, ${pushY}px)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight leading-[1.05]">
      {words.map((word, wi) => {
        const wordChars = word.split("").map((_, ci) => {
          const idx = charIndex++;
          const isResolved = resolved || displayed[idx] === chars[idx];
          return (
            <span
              key={`${wi}-${ci}`}
              ref={(el) => {
                charRefs.current[idx] = el;
              }}
              className="relative inline-block will-change-transform cursor-default"
              style={{
                transition:
                  "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), color 0.3s ease",
                color: isResolved ? undefined : "var(--accent)",
              }}
            >
              <span className="invisible">{chars[idx]}</span>
              <span className="absolute inset-0 flex items-center justify-center">
                {displayed[idx] ?? chars[idx]}
              </span>
            </span>
          );
        });

        return (
          <span key={wi} className="inline-block mr-[0.25em] whitespace-nowrap">
            {wordChars}
          </span>
        );
      })}
    </h1>
  );
}
