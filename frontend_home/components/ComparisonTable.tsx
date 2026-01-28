import { motion } from "motion/react";
import { Check, X, AlertTriangle } from "lucide-react";

interface ComparisonRow {
  feature: string;
  insideTracker: string | boolean;
  levels: string | boolean;
  oura: string | boolean;
  whoop: string | boolean;
  wildHealth: string | boolean;
  biomax: string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Мультиагентный AI",
    insideTracker: false,
    levels: false,
    oura: false,
    whoop: false,
    wildHealth: false,
    biomax: "15 агентов",
  },
  {
    feature: "Custom RAG",
    insideTracker: false,
    levels: false,
    oura: false,
    whoop: false,
    wildHealth: false,
    biomax: "До 50 GB",
  },
  {
    feature: "N=1 эксперименты",
    insideTracker: false,
    levels: false,
    oura: false,
    whoop: false,
    wildHealth: "Manual",
    biomax: "ML-powered",
  },
  {
    feature: "Blood + Sleep + CGM + Genetics",
    insideTracker: "Labs only",
    levels: "CGM only",
    oura: "Sleep only",
    whoop: "Recovery only",
    wildHealth: "Labs+Genetics",
    biomax: "Всё",
  },
  {
    feature: "Россия (152-ФЗ)",
    insideTracker: "warning",
    levels: false,
    oura: "warning",
    whoop: "warning",
    wildHealth: false,
    biomax: "Native",
  },
  {
    feature: "Цена/мес",
    insideTracker: "$15-30",
    levels: "$42-125",
    oura: "$6",
    whoop: "$25-33",
    wildHealth: "$362-495",
    biomax: "990-9,990₽",
  },
];

const competitors = [
  { name: "InsideTracker", color: "#6B7280" },
  { name: "Levels", color: "#6B7280" },
  { name: "Oura", color: "#6B7280" },
  { name: "WHOOP", color: "#6B7280" },
  { name: "Wild Health", color: "#6B7280" },
  { name: "BIOMAX", color: "#00FF94", highlight: true },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check size={24} className="text-[#00FF94] mx-auto" />;
  }
  if (value === false) {
    return <X size={24} className="text-gray-600 mx-auto opacity-50" />;
  }
  if (value === "warning") {
    return <AlertTriangle size={24} className="text-[#F59E0B] mx-auto" />;
  }
  return (
    <span className="text-sm text-gray-400 text-center block">{value}</span>
  );
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <motion.div
        className="min-w-[900px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="grid grid-cols-7 gap-4 mb-4">
          <div className="text-sm font-bold text-gray-400">Feature</div>
          {competitors.map((comp, i) => (
            <motion.div
              key={i}
              className="text-sm font-bold text-center py-3 px-2 rounded-xl"
              style={{
                background: comp.highlight
                  ? "linear-gradient(135deg, rgba(0, 255, 148, 0.2), rgba(0, 212, 255, 0.2))"
                  : "rgba(26, 31, 46, 0.6)",
                border: comp.highlight
                  ? "2px solid rgba(0, 255, 148, 0.6)"
                  : "1px solid rgba(107, 114, 128, 0.3)",
                color: comp.highlight ? "#00FF94" : "#9CA3AF",
                boxShadow: comp.highlight ? "0 0 30px rgba(0, 255, 148, 0.3)" : "none",
              }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {comp.name}
              {comp.highlight && (
                <div className="text-lg mt-1">✅</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Rows */}
        {comparisonData.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="grid grid-cols-7 gap-4 mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
          >
            {/* Feature name */}
            <div
              className="text-sm text-gray-300 font-medium py-4 px-4 rounded-xl flex items-center"
              style={{
                background: "rgba(26, 31, 46, 0.6)",
                border: "1px solid rgba(107, 114, 128, 0.3)",
              }}
            >
              {row.feature}
            </div>

            {/* InsideTracker */}
            <div
              className="py-4 px-2 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(26, 31, 46, 0.4)",
                border: "1px solid rgba(107, 114, 128, 0.2)",
              }}
            >
              <CellValue value={row.insideTracker} />
            </div>

            {/* Levels */}
            <div
              className="py-4 px-2 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(26, 31, 46, 0.4)",
                border: "1px solid rgba(107, 114, 128, 0.2)",
              }}
            >
              <CellValue value={row.levels} />
            </div>

            {/* Oura */}
            <div
              className="py-4 px-2 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(26, 31, 46, 0.4)",
                border: "1px solid rgba(107, 114, 128, 0.2)",
              }}
            >
              <CellValue value={row.oura} />
            </div>

            {/* WHOOP */}
            <div
              className="py-4 px-2 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(26, 31, 46, 0.4)",
                border: "1px solid rgba(107, 114, 128, 0.2)",
              }}
            >
              <CellValue value={row.whoop} />
            </div>

            {/* Wild Health */}
            <div
              className="py-4 px-2 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(26, 31, 46, 0.4)",
                border: "1px solid rgba(107, 114, 128, 0.2)",
              }}
            >
              <CellValue value={row.wildHealth} />
            </div>

            {/* BIOMAX - highlighted */}
            <motion.div
              className="py-4 px-2 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(0, 255, 148, 0.2), rgba(0, 212, 255, 0.2))",
                border: "2px solid rgba(0, 255, 148, 0.5)",
              }}
              whileHover={{
                boxShadow: "0 0 30px rgba(0, 255, 148, 0.4)",
              }}
            >
              <span className="text-sm font-bold text-[#00FF94] text-center">
                {row.biomax}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
