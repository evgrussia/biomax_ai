import { motion } from "motion/react";
import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  delay?: number;
  rotateY?: number;
}

export function PhoneMockup({ children, delay = 0, rotateY = 0 }: PhoneMockupProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="relative"
        whileHover={{ 
          scale: 1.05,
          rotateY: rotateY + 5,
        }}
        transition={{ duration: 0.3 }}
        style={{
          transformStyle: "preserve-3d",
          rotateY,
        }}
      >
        {/* Phone Frame */}
        <div
          className="relative rounded-[3rem] p-3 mx-auto"
          style={{
            width: "320px",
            background: "linear-gradient(135deg, rgba(30, 30, 40, 0.95), rgba(20, 20, 30, 0.95))",
            border: "3px solid rgba(60, 60, 70, 0.8)",
            boxShadow: `
              0 30px 60px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.1) inset,
              0 50px 100px rgba(0, 212, 255, 0.15)
            `,
          }}
        >
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 rounded-b-3xl z-20"
            style={{
              background: "linear-gradient(135deg, rgba(30, 30, 40, 0.95), rgba(20, 20, 30, 0.95))",
              border: "2px solid rgba(60, 60, 70, 0.8)",
              borderTop: "none",
            }}
          >
            {/* Speaker */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-gray-800" />
          </div>

          {/* Screen */}
          <div
            className="relative rounded-[2.5rem] overflow-hidden"
            style={{
              height: "650px",
              background: "linear-gradient(135deg, #0A0F1E, #1A1F2E)",
            }}
          >
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-gray-700" />
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-[3rem] -z-10"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.3), transparent 70%)",
            filter: "blur(30px)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
}
