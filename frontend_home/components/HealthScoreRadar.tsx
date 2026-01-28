import { motion } from "motion/react";

interface Dimension {
  name: string;
  value: number;
  color: string;
}

interface HealthScoreRadarProps {
  dimensions: Dimension[];
  size?: number;
}

export function HealthScoreRadar({ dimensions, size = 400 }: HealthScoreRadarProps) {
  const center = size / 2;
  const maxRadius = size / 2 - 40;
  const numSides = dimensions.length;

  // Calculate polygon points
  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / numSides - Math.PI / 2;
    const radius = (value / 100) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  // Create path for the data polygon
  const dataPoints = dimensions.map((d, i) => getPoint(i, d.value));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  // Create points for grid circles
  const gridLevels = [20, 40, 60, 80, 100];

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <defs>
          <radialGradient id="radarGradient">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00FF94" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Grid circles */}
        {gridLevels.map((level, i) => (
          <circle
            key={level}
            cx={center}
            cy={center}
            r={(level / 100) * maxRadius}
            fill="none"
            stroke="rgba(0, 212, 255, 0.1)"
            strokeWidth="1"
            strokeDasharray={i === gridLevels.length - 1 ? "none" : "4 4"}
          />
        ))}

        {/* Grid lines from center to vertices */}
        {dimensions.map((_, i) => {
          const point = getPoint(i, 100);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={point.x}
              y2={point.y}
              stroke="rgba(0, 212, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data polygon with gradient fill */}
        <motion.path
          d={dataPath}
          fill="url(#radarGradient)"
          stroke="#00D4FF"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))",
          }}
        />

        {/* Data points */}
        {dimensions.map((dim, i) => {
          const point = getPoint(i, dim.value);
          return (
            <motion.g key={i}>
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="6"
                fill={dim.color}
                stroke="rgba(26, 31, 46, 0.9)"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                style={{
                  filter: `drop-shadow(0 0 8px ${dim.color})`,
                }}
              />
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="3"
                fill={dim.color}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            </motion.g>
          );
        })}

        {/* Labels */}
        {dimensions.map((dim, i) => {
          const labelPoint = getPoint(i, 115);
          return (
            <motion.text
              key={i}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-medium"
              fill={dim.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.05 }}
            >
              {dim.name}
            </motion.text>
          );
        })}
      </svg>
    </div>
  );
}
