
'use client'
import { useEffect, useState, useMemo } from 'react';

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface ApiResponse {
  totalContributions: number;
  weeks: Week[];
  error?: string;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Map contribution count to intensity level 0–4
function countToLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

// Intensity classes using accent color with varying opacity
const LEVEL_STYLES: Record<number, string> = {
  0: 'bg-zinc-900/60 border-zinc-800/40',
  1: 'bg-accent-dark/30 border-accent-dark/50 shadow-[0_0_4px_rgba(176,38,255,0.15)]',
  2: 'bg-accent/40 border-accent/60 shadow-[0_0_6px_rgba(176,38,255,0.25)]',
  3: 'bg-accent-light/60 border-accent-light/70 shadow-[0_0_8px_rgba(202,102,255,0.35)]',
  4: 'bg-accent-light border-accent-light shadow-[0_0_12px_rgba(202,102,255,0.5)]',
};

export default function GithubContribution() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/github')
      .then((res) => res.json())
      .then((json: ApiResponse) => {
        if (json.error) {
          setError(json.error);
        } else {
          setData(json);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(String(err));
        setLoading(false);
      });
  }, []);

  // Derive month labels from weeks data
  const monthLabels = useMemo(() => {
    if (!data?.weeks?.length) return [];
    const labels: { label: string; col: number }[] = [];
    let lastMonth = -1;
    data.weeks.forEach((week, wIdx) => {
      const firstDay = week.contributionDays[0];
      if (!firstDay) return;
      const month = new Date(firstDay.date).getMonth();
      if (month !== lastMonth) {
        labels.push({ label: MONTHS[month], col: wIdx });
        lastMonth = month;
      }
    });
    return labels;
  }, [data]);

  // Loading skeleton
  if (loading) {
    return (
      <div className="w-full rounded-lg border border-zinc-800/60 bg-zinc-950/80 p-4 overflow-hidden relative">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-3 w-40 bg-zinc-800 rounded animate-pulse" />
        </div>
        <div className="flex gap-[2px]">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-[2px]">
              {Array.from({ length: 7 }).map((_, j) => (
                <div key={j} className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-[2px] bg-zinc-900 animate-pulse" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error || !data) {
    return (
      <div className="w-full rounded-lg border border-zinc-800/60 bg-zinc-950/80 p-4 text-center">
        <p className="text-xs text-zinc-500 font-mono">
          {error || 'Failed to load contributions'}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg border border-zinc-800/60 bg-zinc-950/80 p-4 backdrop-blur-sm overflow-hidden relative">
      {/* Scanline overlay for cyberpunk feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(202,102,255,0.1)_2px,rgba(202,102,255,0.1)_4px)]" />
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <p className="text-xs text-zinc-500 font-mono">
          <span className="text-accent-light font-semibold">{data.totalContributions}</span> contributions in the last year
        </p>
        {/* Legend */}
        <div className="hidden md:flex items-center gap-1 text-[10px] text-zinc-600 font-mono">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-[10px] h-[10px] rounded-[2px] border ${LEVEL_STYLES[level]}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>

      {/* Month labels */}
      <div className="relative z-10 ml-6 mb-1 flex overflow-hidden">
        {monthLabels.map((m, i) => (
          <span
            key={i}
            className="text-[10px] text-zinc-600 font-mono"
            style={{ position: 'absolute', left: `${(m.col / data.weeks.length) * 100}%` }}
          >
            {m.label}
          </span>
        ))}
        {/* Spacer for height */}
        <span className="text-[10px] invisible">Jan</span>
      </div>

      {/* Contribution grid */}
      <div className="flex gap-[2px] relative z-10 overflow-x-auto scrollbar-none">
        {/* Day labels */}
        <div className="flex flex-col gap-[2px] mr-1 shrink-0">
          {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((d, i) => (
            <span key={i} className="text-[9px] text-zinc-700 font-mono h-[10px] md:h-[12px] leading-[10px] md:leading-[12px] w-4 text-right">
              {d}
            </span>
          ))}
        </div>

        {/* Weeks */}
        {data.weeks.map((week, wIdx) => (
          <div key={wIdx} className="flex flex-col gap-[2px]">
            {week.contributionDays.map((day, dIdx) => {
              const level = countToLevel(day.contributionCount);
              return (
                <div
                  key={dIdx}
                  className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-[2px] border transition-all duration-300 hover:scale-150 hover:z-10 ${LEVEL_STYLES[level]}`}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Bottom glow line */}
      <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
}
