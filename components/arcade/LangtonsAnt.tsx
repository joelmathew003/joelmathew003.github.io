"use client";

import { useEffect, useRef, useState } from "react";

const CELL = 6;
const STEPS_PER_FRAME = 8;

const DIRS = [
  [0, -1], // up
  [1, 0],  // right
  [0, 1],  // down
  [-1, 0], // left
];

export function LangtonsAnt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<Uint8Array>(new Uint8Array(0));
  const antRef = useRef({ x: 0, y: 0, dir: 0 });
  const dimsRef = useRef({ cols: 0, rows: 0 });
  const raf = useRef(0);
  const [running, setRunning] = useState(true);
  const runningRef = useRef(true);
  const [stepCount, setStepCount] = useState(0);
  const stepRef = useRef(0);

  useEffect(() => { runningRef.current = running; }, [running]);

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
      const cols = Math.floor(rect.width / CELL);
      const rows = Math.floor(rect.height / CELL);
      dimsRef.current = { cols, rows };
      gridRef.current = new Uint8Array(cols * rows);
      antRef.current = { x: Math.floor(cols / 2), y: Math.floor(rows / 2), dir: 0 };
      stepRef.current = 0;
      setStepCount(0);
    };
    resize();

    const tick = () => {
      const { cols, rows } = dimsRef.current;
      const grid = gridRef.current;
      const ant = antRef.current;

      if (runningRef.current) {
        for (let s = 0; s < STEPS_PER_FRAME; s++) {
          const idx = ant.y * cols + ant.x;

          if (grid[idx]) {
            ant.dir = (ant.dir + 3) % 4; // turn left
            grid[idx] = 0;
          } else {
            ant.dir = (ant.dir + 1) % 4; // turn right
            grid[idx] = 1;
          }

          ant.x = (ant.x + DIRS[ant.dir][0] + cols) % cols;
          ant.y = (ant.y + DIRS[ant.dir][1] + rows) % rows;
          stepRef.current++;
        }
        setStepCount(stepRef.current);
      }

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      const onColor = isDark ? "#60a5fa" : "#2563eb";
      const offColor = isDark ? "#141414" : "#fafaf9";
      ctx.fillStyle = offColor;
      ctx.fillRect(0, 0, rect.width, rect.height);

      ctx.fillStyle = onColor;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (grid[y * cols + x]) {
            ctx.fillRect(x * CELL, y * CELL, CELL - 0.5, CELL - 0.5);
          }
        }
      }

      ctx.fillStyle = isDark ? "#f87171" : "#dc2626";
      ctx.fillRect(ant.x * CELL, ant.y * CELL, CELL - 0.5, CELL - 0.5);

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const reset = () => {
    const { cols, rows } = dimsRef.current;
    gridRef.current = new Uint8Array(cols * rows);
    antRef.current = { x: Math.floor(cols / 2), y: Math.floor(rows / 2), dir: 0 };
    stepRef.current = 0;
    setStepCount(0);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-medium">Langton&apos;s Ant</h3>
          <p className="text-xs text-muted mt-0.5">
            Step {stepCount.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setRunning((r) => !r)}
            className={`px-3 py-0.5 text-xs rounded border transition-colors ${
              running
                ? "border-red-500/50 text-red-400 hover:border-red-500"
                : "border-border hover:border-accent hover:text-accent"
            }`}
          >
            {running ? "Pause" : "Play"}
          </button>
          <button
            onClick={reset}
            className="px-2 py-0.5 text-xs text-muted hover:text-foreground transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className="w-full h-[300px] rounded-lg border border-border"
      />
    </div>
  );
}
