"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface Creature {
  x: number;
  y: number;
  vx: number;
  vy: number;
  energy: number;
  type: "prey" | "predator";
}

const PREY_SPEED = 1.2;
const PRED_SPEED = 1.8;
const PREY_PERCEPTION = 60;
const PRED_PERCEPTION = 120;
const REPRODUCTION_ENERGY = 150;
const PREY_ENERGY_GAIN = 0.3;
const PRED_ENERGY_COST = 0.15;
const PREY_FLEE_WEIGHT = 2.5;
const COHESION_WEIGHT = 0.3;
const SEPARATION_DIST = 18;

const EXTINCTION_LINES = [
  "Ecosystem collapsed.",
  "Overhunting has consequences.",
  "Nothing left to eat.",
  "The balance was fragile.",
  "You broke the food chain.",
];

function randomAngle() {
  return Math.random() * Math.PI * 2;
}

export function EcosystemSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const creatures = useRef<Creature[]>([]);
  const raf = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });
  const extinctionTimer = useRef<NodeJS.Timeout | null>(null);
  const [extinction, setExtinction] = useState<string | null>(null);
  const [fadeClass, setFadeClass] = useState("");

  const init = useCallback((w: number, h: number) => {
    const list: Creature[] = [];
    for (let i = 0; i < 60; i++) {
      const a = randomAngle();
      list.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(a) * PREY_SPEED,
        vy: Math.sin(a) * PREY_SPEED,
        energy: 80 + Math.random() * 40,
        type: "prey",
      });
    }
    for (let i = 0; i < 3; i++) {
      const a = randomAngle();
      list.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(a) * PRED_SPEED,
        vy: Math.sin(a) * PRED_SPEED,
        energy: 200,
        type: "predator",
      });
    }
    creatures.current = list;
  }, []);

  const triggerExtinction = useCallback(() => {
    if (extinctionTimer.current) return;

    const line = EXTINCTION_LINES[Math.floor(Math.random() * EXTINCTION_LINES.length)];
    setExtinction(line);
    setFadeClass("opacity-0");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFadeClass("opacity-100");
      });
    });

    extinctionTimer.current = setTimeout(() => {
      setFadeClass("opacity-0");
      setTimeout(() => {
        setExtinction(null);
        const { w, h } = sizeRef.current;
        init(w, h);
        extinctionTimer.current = null;
      }, 800);
    }, 2500);
  }, [init]);

  useEffect(() => {
    return () => {
      if (extinctionTimer.current) clearTimeout(extinctionTimer.current);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      sizeRef.current = { w: rect.width, h: rect.height };
    };

    resize();
    init(sizeRef.current.w, sizeRef.current.h);

    const tick = () => {
      const { w, h } = sizeRef.current;
      const list = creatures.current;
      const newborn: Creature[] = [];

      for (const c of list) {
        if (c.type === "prey") {
          let fleeX = 0, fleeY = 0;
          let cohX = 0, cohY = 0, cohCount = 0;
          let sepX = 0, sepY = 0;

          for (const o of list) {
            const dx = o.x - c.x, dy = o.y - c.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 1) continue;

            if (o.type === "predator" && dist < PREY_PERCEPTION) {
              fleeX -= dx / dist;
              fleeY -= dy / dist;
            }
            if (o.type === "prey" && dist < PREY_PERCEPTION) {
              cohX += o.x; cohY += o.y; cohCount++;
              if (dist < SEPARATION_DIST) {
                sepX -= dx / dist;
                sepY -= dy / dist;
              }
            }
          }

          c.vx += fleeX * PREY_FLEE_WEIGHT + sepX * 0.5;
          c.vy += fleeY * PREY_FLEE_WEIGHT + sepY * 0.5;

          if (cohCount > 0) {
            c.vx += ((cohX / cohCount - c.x) * COHESION_WEIGHT) / PREY_PERCEPTION;
            c.vy += ((cohY / cohCount - c.y) * COHESION_WEIGHT) / PREY_PERCEPTION;
          }

          c.vx += (Math.random() - 0.5) * 0.3;
          c.vy += (Math.random() - 0.5) * 0.3;

          const mag = Math.sqrt(c.vx * c.vx + c.vy * c.vy);
          if (mag > PREY_SPEED) {
            c.vx = (c.vx / mag) * PREY_SPEED;
            c.vy = (c.vy / mag) * PREY_SPEED;
          }

          c.energy += PREY_ENERGY_GAIN;
          if (c.energy > REPRODUCTION_ENERGY && list.filter(x => x.type === "prey").length < 120) {
            c.energy *= 0.5;
            const a = randomAngle();
            newborn.push({
              x: c.x + (Math.random() - 0.5) * 10,
              y: c.y + (Math.random() - 0.5) * 10,
              vx: Math.cos(a) * PREY_SPEED,
              vy: Math.sin(a) * PREY_SPEED,
              energy: c.energy * 0.5,
              type: "prey",
            });
          }
        }

        if (c.type === "predator") {
          let nearDist = Infinity, nearX = 0, nearY = 0;
          for (const o of list) {
            if (o.type !== "prey") continue;
            const dx = o.x - c.x, dy = o.y - c.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < nearDist) {
              nearDist = dist; nearX = dx; nearY = dy;
            }
          }

          if (nearDist < PRED_PERCEPTION && nearDist > 0) {
            c.vx += (nearX / nearDist) * 0.4;
            c.vy += (nearY / nearDist) * 0.4;
          } else {
            c.vx += (Math.random() - 0.5) * 0.5;
            c.vy += (Math.random() - 0.5) * 0.5;
          }

          const mag = Math.sqrt(c.vx * c.vx + c.vy * c.vy);
          if (mag > PRED_SPEED) {
            c.vx = (c.vx / mag) * PRED_SPEED;
            c.vy = (c.vy / mag) * PRED_SPEED;
          }

          if (nearDist < 8) {
            const prey = list.find(o => o.type === "prey" && Math.hypot(o.x - c.x, o.y - c.y) < 8);
            if (prey) {
              prey.energy = -1;
              c.energy += 60;
            }
          }

          c.energy -= PRED_ENERGY_COST;
        }

        c.x += c.vx;
        c.y += c.vy;

        if (c.x < 0) { c.x = 0; c.vx *= -1; }
        if (c.x > w) { c.x = w; c.vx *= -1; }
        if (c.y < 0) { c.y = 0; c.vy *= -1; }
        if (c.y > h) { c.y = h; c.vy *= -1; }
      }

      creatures.current = [...list.filter(c => c.energy > 0), ...newborn];

      const preyCount = creatures.current.filter(c => c.type === "prey").length;
      if (preyCount === 0 && creatures.current.length > 0) {
        for (const c of creatures.current) {
          if (c.type === "predator") c.energy = Math.min(c.energy, 30);
        }
      }
      if (creatures.current.length === 0) {
        triggerExtinction();
      }

      ctx.clearRect(0, 0, w, h);

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      for (const c of creatures.current) {
        ctx.beginPath();
        if (c.type === "prey") {
          ctx.fillStyle = isDark ? "#4ade80" : "#16a34a";
          ctx.arc(c.x, c.y, 3, 0, Math.PI * 2);
        } else {
          ctx.fillStyle = isDark ? "#f87171" : "#dc2626";
          const e = c.energy;
          const alpha = e < 50 ? 0.3 + (e / 50) * 0.7 : 1;
          ctx.globalAlpha = alpha;
          ctx.arc(c.x, c.y, 5, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, [init, triggerExtinction]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (extinction) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const a = randomAngle();
    creatures.current.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      vx: Math.cos(a) * PRED_SPEED,
      vy: Math.sin(a) * PRED_SPEED,
      energy: 200,
      type: "predator",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-medium">Ecosystem</h3>
          <p className="text-xs text-muted mt-0.5">Click to drop a predator</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500" /> prey
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500" /> predator
          </span>
        </div>
      </div>
      <div className="relative">
        <canvas
          ref={canvasRef}
          onClick={handleClick}
          className="w-full h-[300px] rounded-lg border border-border bg-card cursor-crosshair"
        />
        {extinction && (
          <div
            className={`absolute inset-0 flex items-center justify-center rounded-lg bg-card/90 backdrop-blur-sm transition-opacity duration-700 ${fadeClass}`}
          >
            <div className="text-center">
              <p className="text-2xl font-display font-bold tracking-tight mb-2">
                {extinction}
              </p>
              <p className="text-xs text-muted">Reseeding...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
