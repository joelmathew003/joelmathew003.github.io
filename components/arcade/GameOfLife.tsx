"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CELL = 10;

const PRESETS: Record<string, [number, number][]> = {
  glider: [[0, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
  pulsar: (() => {
    const q = [[2,0],[3,0],[4,0],[0,2],[0,3],[0,4],[5,1],[1,5],[2,6],[3,6],[4,6],[6,2],[6,3],[6,4],[5,5]];
    const all: [number, number][] = [];
    for (const [x, y] of q) {
      all.push([x, y], [-x - 1, y], [x, -y - 1], [-x - 1, -y - 1]);
    }
    return all;
  })(),
  lwss: [[0, 0], [3, 0], [4, 1], [0, 2], [4, 2], [1, 3], [2, 3], [3, 3], [4, 3]],
};

export function GameOfLife() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<Uint8Array>(new Uint8Array(0));
  const dimsRef = useRef({ cols: 0, rows: 0 });
  const raf = useRef(0);
  const lastTick = useRef(0);
  const [running, setRunning] = useState(false);
  const [gen, setGen] = useState(0);
  const runningRef = useRef(false);
  const drawing = useRef(false);

  const initGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const cols = Math.floor(rect.width / CELL);
    const rows = Math.floor(rect.height / CELL);
    dimsRef.current = { cols, rows };
    gridRef.current = new Uint8Array(cols * rows);
    setGen(0);
  }, []);

  const step = useCallback(() => {
    const { cols, rows } = dimsRef.current;
    const grid = gridRef.current;
    const next = new Uint8Array(cols * rows);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let neighbors = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = (x + dx + cols) % cols;
            const ny = (y + dy + rows) % rows;
            neighbors += grid[ny * cols + nx];
          }
        }
        const alive = grid[y * cols + x];
        if (alive && (neighbors === 2 || neighbors === 3)) next[y * cols + x] = 1;
        else if (!alive && neighbors === 3) next[y * cols + x] = 1;
      }
    }

    gridRef.current = next;
    setGen((g) => g + 1);
  }, []);

  const placePreset = useCallback((name: string) => {
    const { cols, rows } = dimsRef.current;
    const cells = PRESETS[name];
    if (!cells) return;
    const cx = Math.floor(cols / 2);
    const cy = Math.floor(rows / 2);
    for (const [dx, dy] of cells) {
      const x = ((cx + dx) % cols + cols) % cols;
      const y = ((cy + dy) % rows + rows) % rows;
      gridRef.current[y * dimsRef.current.cols + x] = 1;
    }
  }, []);

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
      initGrid();
    };
    resize();

    const render = (time: number) => {
      if (runningRef.current && time - lastTick.current > 100) {
        lastTick.current = time;
        step();
      }

      const rect = canvas.getBoundingClientRect();
      const { cols, rows } = dimsRef.current;
      const grid = gridRef.current;
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      ctx.clearRect(0, 0, rect.width, rect.height);

      ctx.strokeStyle = isDark ? "#1a1a1a" : "#eee";
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= cols; x++) {
        ctx.beginPath();
        ctx.moveTo(x * CELL, 0);
        ctx.lineTo(x * CELL, rows * CELL);
        ctx.stroke();
      }
      for (let y = 0; y <= rows; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * CELL);
        ctx.lineTo(cols * CELL, y * CELL);
        ctx.stroke();
      }

      ctx.fillStyle = isDark ? "#60a5fa" : "#2563eb";
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (grid[y * cols + x]) {
            ctx.fillRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2);
          }
        }
      }

      raf.current = requestAnimationFrame(render);
    };

    raf.current = requestAnimationFrame(render);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, [initGrid, step]);

  const toggleCell = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.floor((e.clientX - rect.left) / CELL);
    const y = Math.floor((e.clientY - rect.top) / CELL);
    const { cols } = dimsRef.current;
    const idx = y * cols + x;
    if (idx >= 0 && idx < gridRef.current.length) {
      gridRef.current[idx] = gridRef.current[idx] ? 0 : 1;
    }
  };

  const paint = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.floor((e.clientX - rect.left) / CELL);
    const y = Math.floor((e.clientY - rect.top) / CELL);
    const { cols } = dimsRef.current;
    const idx = y * cols + x;
    if (idx >= 0 && idx < gridRef.current.length) {
      gridRef.current[idx] = 1;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-medium">Game of Life</h3>
          <p className="text-xs text-muted mt-0.5">
            Gen {gen} · Click or drag to draw
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          {Object.keys(PRESETS).map((name) => (
            <button
              key={name}
              onClick={() => placePreset(name)}
              className="px-2 py-0.5 text-xs text-muted hover:text-foreground transition-colors"
            >
              {name}
            </button>
          ))}
          <button
            onClick={() => setRunning((r) => !r)}
            className={`px-3 py-0.5 text-xs rounded border transition-colors ${
              running
                ? "border-red-500/50 text-red-400 hover:border-red-500"
                : "border-border hover:border-accent hover:text-accent"
            }`}
          >
            {running ? "Stop" : "Play"}
          </button>
          <button
            onClick={() => { gridRef.current.fill(0); setGen(0); }}
            className="px-2 py-0.5 text-xs text-muted hover:text-foreground transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        onClick={toggleCell}
        onMouseDown={() => { drawing.current = true; }}
        onMouseUp={() => { drawing.current = false; }}
        onMouseLeave={() => { drawing.current = false; }}
        onMouseMove={paint}
        className="w-full h-[300px] rounded-lg border border-border bg-card cursor-crosshair"
      />
    </div>
  );
}
