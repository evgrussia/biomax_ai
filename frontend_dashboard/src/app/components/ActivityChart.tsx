import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { time: "00:00", heartRate: 62, steps: 0 },
  { time: "04:00", heartRate: 58, steps: 0 },
  { time: "08:00", heartRate: 72, steps: 1200 },
  { time: "12:00", heartRate: 85, steps: 3800 },
  { time: "16:00", heartRate: 78, steps: 5600 },
  { time: "20:00", heartRate: 70, steps: 7200 },
  { time: "23:59", heartRate: 65, steps: 8450 },
];

export function ActivityChart() {
  return (
    <div className="glass-card glass-card-hover h-full p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Activity Overview</h3>
          <p className="text-sm text-white/50">Last 24 hours</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#00D4FF]" />
            <span className="text-xs text-white/60">Heart Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#00FF94]" />
            <span className="text-xs text-white/60">Steps</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorHeartRate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00D4FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00FF94" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00FF94" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 12 }}
            axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
          />
          <YAxis
            yAxisId="left"
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 12 }}
            axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 12 }}
            axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(26, 31, 46, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              backdropFilter: "blur(20px)",
              color: "white",
            }}
          />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="heartRate"
            stroke="#00D4FF"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorHeartRate)"
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="steps"
            stroke="#00FF94"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorSteps)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
