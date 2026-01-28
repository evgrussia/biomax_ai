import { motion } from "motion/react";
import { Shield, Lock } from "lucide-react";

export function SecurityShield() {
  return (
    <div className="relative flex items-center justify-center" style={{ height: 400 }}>
      {/* Outer shield ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          border: "2px dashed rgba(0, 212, 255, 0.3)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Middle shield ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 240,
          height: 240,
          border: "2px dashed rgba(0, 255, 148, 0.3)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Central shield */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div
          className="w-40 h-40 rounded-3xl flex items-center justify-center relative"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(0, 255, 148, 0.3))",
            border: "3px solid rgba(0, 212, 255, 0.6)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 60px rgba(0, 212, 255, 0.5)",
          }}
        >
          {/* Shield icon */}
          <Shield size={60} className="text-[#00D4FF] absolute" />
          
          {/* Lock icon */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Lock size={30} className="text-[#00FF94] relative z-10" />
          </motion.div>

          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent)",
              filter: "blur(20px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Data stream particles */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * 2 * Math.PI;
        const radius = 180;
        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: i % 2 === 0 ? "#00D4FF" : "#00FF94",
              boxShadow: `0 0 10px ${i % 2 === 0 ? "#00D4FF" : "#00FF94"}`,
            }}
            animate={{
              x: [
                Math.cos(angle) * radius,
                Math.cos(angle) * 80,
                Math.cos(angle) * radius,
              ],
              y: [
                Math.sin(angle) * radius,
                Math.sin(angle) * 80,
                Math.sin(angle) * radius,
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Encrypted tunnel visualization */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`tunnel-${i}`}
          className="absolute rounded-full border-2"
          style={{
            width: 120 + i * 40,
            height: 120 + i * 40,
            borderColor: `rgba(0, 212, 255, ${0.1 - i * 0.02})`,
            borderStyle: "dashed",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
