import React from "react";

interface StatItem {
  icon: React.ReactNode;
  title: string;
  value: string;
  desc?: string;
  action?: React.ReactNode;
}

interface StatsSectionProps {
  stats: StatItem[];
  direction?: "horizontal" | "vertical"; // optionnel si tu veux forcer
}

export function StatsSection({ stats, direction }: StatsSectionProps) {
  const directionClass = direction
    ? direction === "vertical"
      ? "stats-vertical"
      : "stats-horizontal"
    : "stats-vertical lg:stats-horizontal";
  // 🔥 Mobile vertical, Desktop horizontal par défaut

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`
            stats
            ${directionClass}
            w-full
            shadow-xl
            bg-base-200/50
            backdrop-blur-lg
            border
            border-white/10
            rounded-2xl
          `}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                stat 
                px-8 
                py-6 
                transition-all 
                duration-300 
                hover:bg-base-100/40
              "
            >
              {stat.icon && (
                <div className="stat-figure text-primary mb-2 lg:mb-0">
                  {stat.icon}
                </div>
              )}

              <div className="stat-title text-gray-400 text-sm">
                {stat.title}
              </div>

              <div className="stat-value text-primary text-3xl md:text-4xl">
                {stat.value}
              </div>

              {stat.desc && (
                <div className="stat-desc text-gray-500">{stat.desc}</div>
              )}

              {stat.action && (
                <div className="stat-actions mt-2">{stat.action}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
