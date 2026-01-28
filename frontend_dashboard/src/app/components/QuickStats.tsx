import { Activity, Battery, Moon, Zap } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "Active Minutes",
    value: "142",
    total: "180",
    icon: Activity,
    color: "cyan",
    percentage: 79,
  },
  {
    id: 2,
    label: "Sleep Score",
    value: "87",
    total: "100",
    icon: Moon,
    color: "purple",
    percentage: 87,
  },
  {
    id: 3,
    label: "Energy Level",
    value: "92",
    total: "100",
    icon: Zap,
    color: "green",
    percentage: 92,
  },
  {
    id: 4,
    label: "Recovery",
    value: "94",
    total: "100",
    icon: Battery,
    color: "cyan",
    percentage: 94,
  },
];

export function QuickStats() {
  const colorMap = {
    cyan: "from-[#00D4FF] to-[#0099CC]",
    green: "from-[#00FF94] to-[#00CC75]",
    purple: "from-[#8B5CF6] to-[#6D28D9]",
  };

  return (
    <div className="glass-card glass-card-hover p-6">
      <h3 className="mb-6 text-lg font-semibold text-white">Quick Stats</h3>
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const gradient = colorMap[stat.color as keyof typeof colorMap];

          return (
            <div key={stat.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-white/60" />
                  <span className="text-sm text-white/60">{stat.label}</span>
                </div>
                <span className="text-sm font-semibold text-white">
                  {stat.value}/{stat.total}
                </span>
              </div>
              <div className="relative h-2 overflow-hidden rounded-full bg-white/5">
                <div
                  className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-500`}
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
