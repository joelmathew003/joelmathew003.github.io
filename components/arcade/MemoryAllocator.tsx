"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface Block {
  start: number;
  size: number;
  color: string;
  id: number;
  age: number;
}

const COLORS = [
  "#60a5fa", "#f87171", "#4ade80", "#facc15", "#a78bfa",
  "#fb923c", "#2dd4bf", "#e879f9", "#38bdf8", "#34d399",
];

const TOTAL_MEM = 128;
const BLOCK_SIZES = [4, 6, 8, 10, 12, 16];

let nextId = 0;

export function MemoryAllocator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blocksRef = useRef<Block[]>([]);
  const raf = useRef(0);
  const lastAlloc = useRef(0);
  const compacting = useRef(false);
  const compactProgress = useRef(0);
  const compactTargets = useRef<{ id: number; from: number; to: number }[]>([]);
  const [stats, setStats] = useState({ used: 0, fragments: 0 });

  const allocate = useCallback(() => {
    const blocks = blocksRef.current;
    const size = BLOCK_SIZES[Math.floor(Math.random() * BLOCK_SIZES.length)];
    const occupied = new Uint8Array(TOTAL_MEM);
    for (const b of blocks) {
      for (let i = b.start; i < b.start + b.size && i < TOTAL_MEM; i++) occupied[i] = 1;
    }

    for (let i = 0; i <= TOTAL_MEM - size; i++) {
      let fits = true;
      for (let j = i; j < i + size; j++) {
        if (occupied[j]) { fits = false; break; }
      }
      if (fits) {
        blocks.push({
          start: i,
          size,
          color: COLORS[nextId % COLORS.length],
          id: nextId++,
          age: 0,
        });
        return;
      }
    }
  }, []);

  const free = useCallback(() => {
    const blocks = blocksRef.current;
    if (blocks.length === 0) return;
    const oldest = blocks.reduce((a, b) => (a.age > b.age ? a : b));
    blocksRef.current = blocks.filter((b) => b.id !== oldest.id);
  }, []);

  const compact = useCallback(() => {
    if (compacting.current) return;
    const blocks = blocksRef.current;
    if (blocks.length === 0) return;

    const sorted = [...blocks].sort((a, b) => a.start - b.start);
    const targets: { id: number; from: number; to: number }[] = [];
    let cursor = 0;
    for (const b of sorted) {
      if (b.start !== cursor) {
        targets.push({ id: b.id, from: b.start, to: cursor });
      }
      cursor += b.size;
    }

    if (targets.length === 0) return;
    compactTargets.current = targets;
    compactProgress.current = 0;
    compacting.current = true;
  }, []);

  const updateStats = useCallback(() => {
    const blocks = blocksRef.current;
    const used = blocks.reduce((s, b) => s + b.size, 0);
    const occupied = new Uint8Array(TOTAL_MEM);
    for (const b of blocks) {
      for (let i = b.start; i < b.start + b.size && i < TOTAL_MEM; i++) occupied[i] = 1;
    }
    let fragments = 0;
    let inGap = false;
    for (let i = 0; i < TOTAL_MEM; i++) {
      if (!occupied[i] && !inGap) { fragments++; inGap = true; }
      if (occupied[i]) inGap = false;
    }
    setStats({ used, fragments });
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
    };
    resize();

    const tick = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cellW = w / TOTAL_MEM;
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      if (!compacting.current && time - lastAlloc.current > 600) {
        lastAlloc.current = time;
        if (Math.random() < 0.3 && blocksRef.current.length > 2) {
          free();
        } else {
          allocate();
        }
        for (const b of blocksRef.current) b.age++;
        updateStats();
      }

      if (compacting.current) {
        compactProgress.current += 0.03;
        if (compactProgress.current >= 1) {
          for (const t of compactTargets.current) {
            const block = blocksRef.current.find((b) => b.id === t.id);
            if (block) block.start = t.to;
          }
          compacting.current = false;
          compactTargets.current = [];
          updateStats();
        }
      }

      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = isDark ? "#1a1a1a" : "#f0f0f0";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < TOTAL_MEM; i++) {
        ctx.strokeStyle = isDark ? "#252525" : "#e0e0e0";
        ctx.strokeRect(i * cellW, 0, cellW, h);
      }

      for (const b of blocksRef.current) {
        let drawStart = b.start;

        if (compacting.current) {
          const target = compactTargets.current.find((t) => t.id === b.id);
          if (target) {
            const t = compactProgress.current;
            const ease = t * t * (3 - 2 * t);
            drawStart = target.from + (target.to - target.from) * ease;
          }
        }

        const x = drawStart * cellW;
        const bw = b.size * cellW;
        const pad = 2;

        ctx.fillStyle = b.color;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.roundRect(x + pad, pad, bw - pad * 2, h - pad * 2, 4);
        ctx.fill();
        ctx.globalAlpha = 1;

        if (bw > 20) {
          ctx.fillStyle = isDark ? "#000" : "#fff";
          ctx.font = "10px system-ui";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(`${b.size}`, x + bw / 2, h / 2);
        }
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, [allocate, free, updateStats]);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-medium">Memory Allocator</h3>
          <p className="text-xs text-muted mt-0.5">
            {stats.used}/{TOTAL_MEM} used · {stats.fragments} fragment{stats.fragments !== 1 && "s"}
          </p>
        </div>
        <button
          onClick={compact}
          className="px-3 py-1 text-xs rounded border border-border hover:border-accent hover:text-accent transition-colors"
        >
          Compact
        </button>
      </div>
      <canvas
        ref={canvasRef}
        className="w-full h-[80px] rounded-lg border border-border"
      />
    </div>
  );
}
