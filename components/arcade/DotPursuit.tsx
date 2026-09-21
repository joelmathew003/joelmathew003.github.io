"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Cell = "empty" | "wall";
type Algo = "astar" | "dijkstra" | "greedy";

interface Node {
  x: number;
  y: number;
  g: number;
  h: number;
  f: number;
  parent: Node | null;
}

const CELL = 16;
const CHASE_SPEED = 80;

function heuristic(ax: number, ay: number, bx: number, by: number) {
  return Math.abs(ax - bx) + Math.abs(ay - by);
}

function findPath(
  grid: Cell[][],
  sx: number, sy: number,
  ex: number, ey: number,
  algo: Algo,
  cols: number, rows: number,
): [number, number][] {
  const open: Node[] = [{ x: sx, y: sy, g: 0, h: heuristic(sx, sy, ex, ey), f: 0, parent: null }];
  open[0].f = algo === "dijkstra" ? 0 : open[0].h;
  const closed = new Set<string>();
  const dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]];

  while (open.length > 0) {
    open.sort((a, b) => a.f - b.f);
    const cur = open.shift()!;
    const key = `${cur.x},${cur.y}`;
    if (closed.has(key)) continue;
    closed.add(key);

    if (cur.x === ex && cur.y === ey) {
      const path: [number, number][] = [];
      let n: Node | null = cur;
      while (n) { path.unshift([n.x, n.y]); n = n.parent; }
      return path;
    }

    for (const [dx, dy] of dirs) {
      const nx = cur.x + dx, ny = cur.y + dy;
      if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) continue;
      if (grid[ny][nx] === "wall") continue;
      if (closed.has(`${nx},${ny}`)) continue;

      const g = cur.g + 1;
      const h = heuristic(nx, ny, ex, ey);
      let f: number;
      if (algo === "astar") f = g + h;
      else if (algo === "dijkstra") f = g;
      else f = h;

      open.push({ x: nx, y: ny, g, h, f, parent: cur });
    }
  }
  return [];
}

export function DotPursuit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<Cell[][]>([]);
  const chaserRef = useRef({ x: 1, y: 1 });
  const targetRef = useRef({ x: 0, y: 0 });
  const pathRef = useRef<[number, number][]>([]);
  const dimsRef = useRef({ cols: 0, rows: 0 });
  const raf = useRef(0);
  const lastStep = useRef(0);
  const drawing = useRef(false);
  const [algo, setAlgo] = useState<Algo>("astar");
  const algoRef = useRef<Algo>("astar");

  const initGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const cols = Math.floor(rect.width / CELL);
    const rows = Math.floor(rect.height / CELL);
    dimsRef.current = { cols, rows };

    const grid: Cell[][] = [];
    for (let r = 0; r < rows; r++) {
      const row: Cell[] = [];
      for (let c = 0; c < cols; c++) row.push("empty");
      grid.push(row);
    }
    gridRef.current = grid;
    chaserRef.current = { x: 1, y: 1 };
    targetRef.current = { x: cols - 2, y: rows - 2 };
    pathRef.current = [];
  }, []);

  useEffect(() => { algoRef.current = algo; }, [algo]);

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

    const moveTarget = () => {
      const { cols, rows } = dimsRef.current;
      const grid = gridRef.current;
      const t = targetRef.current;
      const dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]];
      const valid = dirs.filter(([dx, dy]) => {
        const nx = t.x + dx, ny = t.y + dy;
        return nx >= 0 && nx < cols && ny >= 0 && ny < rows && grid[ny][nx] !== "wall";
      });
      if (valid.length > 0 && Math.random() < 0.7) {
        const [dx, dy] = valid[Math.floor(Math.random() * valid.length)];
        t.x += dx; t.y += dy;
      }
    };

    const tick = (time: number) => {
      if (time - lastStep.current > CHASE_SPEED) {
        lastStep.current = time;
        const { cols, rows } = dimsRef.current;
        const c = chaserRef.current;
        const t = targetRef.current;

        moveTarget();

        const path = findPath(gridRef.current, c.x, c.y, t.x, t.y, algoRef.current, cols, rows);
        pathRef.current = path;

        if (path.length > 1) {
          c.x = path[1][0];
          c.y = path[1][1];
        }

        if (c.x === t.x && c.y === t.y) {
          t.x = Math.floor(Math.random() * (cols - 2)) + 1;
          t.y = Math.floor(Math.random() * (rows - 2)) + 1;
          if (gridRef.current[t.y]?.[t.x] === "wall") {
            gridRef.current[t.y][t.x] = "empty";
          }
        }
      }

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const { cols, rows } = dimsRef.current;
      const grid = gridRef.current;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grid[r]?.[c] === "wall") {
            ctx.fillStyle = isDark ? "#2a2a2a" : "#d4d4d4";
            ctx.fillRect(c * CELL, r * CELL, CELL - 1, CELL - 1);
          }
        }
      }

      if (pathRef.current.length > 1) {
        ctx.strokeStyle = isDark ? "rgba(96,165,250,0.15)" : "rgba(37,99,235,0.1)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < pathRef.current.length; i++) {
          const [px, py] = pathRef.current[i];
          const cx = px * CELL + CELL / 2, cy = py * CELL + CELL / 2;
          i === 0 ? ctx.moveTo(cx, cy) : ctx.lineTo(cx, cy);
        }
        ctx.stroke();
      }

      const t = targetRef.current;
      ctx.fillStyle = isDark ? "#4ade80" : "#16a34a";
      ctx.beginPath();
      ctx.arc(t.x * CELL + CELL / 2, t.y * CELL + CELL / 2, 5, 0, Math.PI * 2);
      ctx.fill();

      const ch = chaserRef.current;
      ctx.fillStyle = isDark ? "#60a5fa" : "#2563eb";
      ctx.beginPath();
      ctx.arc(ch.x * CELL + CELL / 2, ch.y * CELL + CELL / 2, 5, 0, Math.PI * 2);
      ctx.fill();

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, [initGrid]);

  const handlePointer = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = Math.floor((e.clientX - rect.left) / CELL);
    const cy = Math.floor((e.clientY - rect.top) / CELL);
    const grid = gridRef.current;
    if (cy < 0 || cy >= dimsRef.current.rows || cx < 0 || cx >= dimsRef.current.cols) return;
    const c = chaserRef.current, t = targetRef.current;
    if ((cx === c.x && cy === c.y) || (cx === t.x && cy === t.y)) return;
    grid[cy][cx] = grid[cy][cx] === "wall" ? "empty" : "wall";
  };

  const handleDrag = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = Math.floor((e.clientX - rect.left) / CELL);
    const cy = Math.floor((e.clientY - rect.top) / CELL);
    if (cy < 0 || cy >= dimsRef.current.rows || cx < 0 || cx >= dimsRef.current.cols) return;
    const grid = gridRef.current;
    const c = chaserRef.current, t = targetRef.current;
    if ((cx === c.x && cy === c.y) || (cx === t.x && cy === t.y)) return;
    grid[cy][cx] = "wall";
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-medium">Dot Pursuit</h3>
          <p className="text-xs text-muted mt-0.5">Click or drag to place walls</p>
        </div>
        <div className="flex gap-1">
          {(["astar", "dijkstra", "greedy"] as Algo[]).map((a) => (
            <button
              key={a}
              onClick={() => setAlgo(a)}
              className={`px-2 py-0.5 text-xs rounded transition-colors ${
                algo === a
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {a === "astar" ? "A*" : a === "dijkstra" ? "Dijkstra" : "Greedy"}
            </button>
          ))}
        </div>
      </div>
      <canvas
        ref={canvasRef}
        onClick={handlePointer}
        onMouseDown={() => { drawing.current = true; }}
        onMouseUp={() => { drawing.current = false; }}
        onMouseLeave={() => { drawing.current = false; }}
        onMouseMove={handleDrag}
        className="w-full h-[300px] rounded-lg border border-border bg-card cursor-crosshair"
      />
    </div>
  );
}
