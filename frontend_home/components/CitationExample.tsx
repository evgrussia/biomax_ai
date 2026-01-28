import { motion } from "motion/react";
import { ExternalLink, AlertTriangle } from "lucide-react";

export function CitationExample() {
  return (
    <motion.div
      className="rounded-3xl p-8 max-w-3xl mx-auto"
      style={{
        background: "linear-gradient(135deg, rgba(26, 31, 46, 0.95), rgba(26, 31, 46, 0.85))",
        border: "2px solid rgba(0, 212, 255, 0.4)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 0 40px rgba(0, 212, 255, 0.2)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Recommendation */}
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="text-2xl">💡</div>
          <div>
            <h4 className="text-lg font-bold text-gray-200 mb-2">
              Рекомендация:
            </h4>
            <p className="text-xl text-[#00FF94] font-semibold">
              "NMN 500mg утром натощак"
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-6"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)",
        }}
      />

      {/* Sources */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-xl">📚</div>
          <h4 className="text-lg font-bold text-gray-200">Источники:</h4>
        </div>

        <div className="space-y-4">
          {/* Citation 1 */}
          <motion.div
            className="rounded-2xl p-4"
            style={{
              background: "rgba(0, 212, 255, 0.1)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
            }}
            whileHover={{
              borderColor: "rgba(0, 212, 255, 0.6)",
              boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-gray-200">
                    Yi et al., 2023
                  </span>
                  <span className="text-xs text-gray-400">(RCT, n=48)</span>
                  <div
                    className="px-2 py-0.5 rounded text-xs font-bold"
                    style={{
                      background: "rgba(0, 212, 255, 0.3)",
                      color: "#00D4FF",
                    }}
                  >
                    🅱️
                  </div>
                </div>
                <p className="text-sm text-gray-300 italic mb-2">
                  "NMN enhances aerobic capacity"
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs text-[#00D4FF] hover:underline"
                >
                  Читать на PubMed
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Citation 2 */}
          <motion.div
            className="rounded-2xl p-4"
            style={{
              background: "rgba(0, 212, 255, 0.1)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
            }}
            whileHover={{
              borderColor: "rgba(0, 212, 255, 0.6)",
              boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-gray-200">
                    Igarashi et al., 2022
                  </span>
                  <span className="text-xs text-gray-400">(Safety Study)</span>
                  <div
                    className="px-2 py-0.5 rounded text-xs font-bold"
                    style={{
                      background: "rgba(0, 212, 255, 0.3)",
                      color: "#00D4FF",
                    }}
                  >
                    🅱️
                  </div>
                </div>
                <p className="text-sm text-gray-300 italic mb-2">
                  "Long-term NMN safety profile"
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs text-[#00D4FF] hover:underline"
                >
                  Читать на PubMed
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-6"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.5), transparent)",
        }}
      />

      {/* Evidence Assessment */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="text-[#F59E0B] flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="text-sm font-semibold text-[#F59E0B]">
              Evidence Level:
            </span>
            <span className="text-sm text-gray-300 ml-2">
              B (Limited RCT data)
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="text-lg flex-shrink-0">🔬</div>
          <div className="flex-1">
            <span className="text-sm font-semibold text-[#00FF94]">
              Применимость:
            </span>
            <span className="text-sm text-gray-300 ml-2">
              High (matches your profile)
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
