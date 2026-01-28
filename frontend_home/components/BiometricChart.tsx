import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface BiometricChartProps {
  data: Array<{ time: string; value: number }>;
  color?: "cyan" | "green" | "purple";
  type?: "line" | "area";
  label?: string;
}

export function BiometricChart({ data, color = "cyan", type = "area", label }: BiometricChartProps) {
  const colorMap = {
    cyan: "#00D4FF",
    green: "#00FF94",
    purple: "#8B5CF6",
  };

  const strokeColor = colorMap[color];

  return (
    <div className="w-full">
      {label && <h4 className="mb-3" style={{ color: strokeColor }}>{label}</h4>}
      <ResponsiveContainer width="100%" height={200}>
        {type === "area" ? (
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={strokeColor} stopOpacity={0.3} />
                <stop offset="95%" stopColor={strokeColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(75, 85, 99, 0.2)" />
            <XAxis dataKey="time" stroke="#9CA3AF" style={{ fontSize: 12 }} />
            <YAxis stroke="#9CA3AF" style={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                background: "rgba(26, 31, 46, 0.95)",
                border: `1px solid ${strokeColor}40`,
                borderRadius: "8px",
                color: "#E5E7EB",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={strokeColor}
              strokeWidth={2}
              fill={`url(#gradient-${color})`}
              animationDuration={1500}
            />
          </AreaChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(75, 85, 99, 0.2)" />
            <XAxis dataKey="time" stroke="#9CA3AF" style={{ fontSize: 12 }} />
            <YAxis stroke="#9CA3AF" style={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                background: "rgba(26, 31, 46, 0.95)",
                border: `1px solid ${strokeColor}40`,
                borderRadius: "8px",
                color: "#E5E7EB",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={strokeColor}
              strokeWidth={3}
              dot={false}
              animationDuration={1500}
              style={{
                filter: `drop-shadow(0 0 6px ${strokeColor}80)`,
              }}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
