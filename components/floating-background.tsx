/**
 * Decorative futuristic background: charts and figures floating behind content.
 * Purely presentational, hidden from assistive tech.
 */
export function FloatingBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,oklch(0.83_0.14_84/0.12),transparent_45%),radial-gradient(circle_at_85%_70%,oklch(0.68_0.14_58/0.1),transparent_50%)]" />

      {/* faint grid */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,oklch(0.83_0.14_84)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.83_0.14_84)_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* floating line chart */}
      <div className="animate-float absolute left-[6%] top-[18%] opacity-25">
        <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
          <polyline
            points="0,90 40,70 80,80 120,40 160,55 220,15"
            stroke="oklch(0.86 0.15 90)"
            strokeWidth="2"
            fill="none"
          />
          <polyline
            points="0,90 40,70 80,80 120,40 160,55 220,15 220,120 0,120"
            fill="oklch(0.83 0.14 84 / 0.15)"
            stroke="none"
          />
          {[
            [40, 70],
            [120, 40],
            [220, 15],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3" fill="oklch(0.92 0.11 96)" />
          ))}
        </svg>
      </div>

      {/* floating bar chart */}
      <div className="animate-float-slow absolute right-[9%] top-[24%] opacity-20">
        <svg width="180" height="130" viewBox="0 0 180 130">
          {[60, 95, 45, 110, 80, 125].map((h, i) => (
            <rect
              key={i}
              x={i * 30}
              y={130 - h}
              width="18"
              height={h}
              rx="3"
              fill="oklch(0.72 0.15 62 / 0.7)"
            />
          ))}
        </svg>
      </div>

      {/* floating donut */}
      <div className="animate-drift absolute left-[14%] bottom-[14%] opacity-20">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle
            cx="70"
            cy="70"
            r="52"
            fill="none"
            stroke="oklch(0.3 0.02 75)"
            strokeWidth="16"
          />
          <circle
            cx="70"
            cy="70"
            r="52"
            fill="none"
            stroke="oklch(0.86 0.15 90)"
            strokeWidth="16"
            strokeDasharray="235 327"
            strokeLinecap="round"
            transform="rotate(-90 70 70)"
          />
        </svg>
      </div>

      {/* floating scatter / nodes */}
      <div className="animate-float absolute right-[16%] bottom-[20%] opacity-20">
        <svg width="200" height="120" viewBox="0 0 200 120">
          {[
            [20, 90],
            [55, 60],
            [90, 75],
            [120, 35],
            [150, 55],
            [185, 20],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={4 + (i % 3)}
              fill="oklch(0.83 0.14 84 / 0.8)"
            />
          ))}
        </svg>
      </div>

      {/* floating stat chips */}
      <FloatChip className="left-[38%] top-[12%] animate-float-slow" label="Accuracy" value="99.7%" />
      <FloatChip className="right-[30%] top-[62%] animate-float" label="Bad debt ratio" value="4:1" />
      <FloatChip className="left-[24%] top-[46%] animate-drift" label="Errors reduced" value="-30%" />
    </div>
  )
}

function FloatChip({
  className,
  label,
  value,
}: {
  className?: string
  label: string
  value: string
}) {
  return (
    <div
      className={`absolute rounded-lg border border-primary/25 bg-card/40 px-3 py-2 backdrop-blur-sm opacity-30 ${className ?? ''}`}
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="font-display text-lg font-bold text-gold-gradient">{value}</p>
    </div>
  )
}
