import { motion } from "motion/react";
import { Check, X } from "lucide-react";

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  yearlyPrice?: string;
  description: string;
  features: Feature[];
  ctaText: string;
  ctaSubtext?: string;
  isPopular?: boolean;
  isPremium?: boolean;
  color: string;
  delay?: number;
}

export function PricingCard({
  name,
  price,
  yearlyPrice,
  description,
  features,
  ctaText,
  ctaSubtext,
  isPopular = false,
  isPremium = false,
  color,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10 }}
    >
      {/* Popular badge */}
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold z-10"
          style={{
            background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
            color: "#1A1F2E",
            boxShadow: "0 0 30px rgba(245, 158, 11, 0.6)",
          }}
          animate={{
            boxShadow: [
              "0 0 30px rgba(245, 158, 11, 0.6)",
              "0 0 40px rgba(245, 158, 11, 0.8)",
              "0 0 30px rgba(245, 158, 11, 0.6)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ⭐ ПОПУЛЯРНЫЙ
        </motion.div>
      )}

      <div
        className="rounded-3xl p-8 h-full flex flex-col"
        style={{
          background: isPopular || isPremium
            ? "linear-gradient(135deg, rgba(26, 31, 46, 0.95), rgba(26, 31, 46, 0.85))"
            : "rgba(26, 31, 46, 0.7)",
          border: isPopular || isPremium
            ? `2px solid ${color}`
            : `1px solid ${color}40`,
          backdropFilter: "blur(12px)",
          boxShadow: isPopular || isPremium
            ? `0 0 40px ${color}30`
            : "none",
        }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-3" style={{ color }}>
            {isPremium && "💎 "}
            {name}
          </h3>
          
          {/* Pricing */}
          <div className="mb-2">
            <div className="text-4xl font-bold text-gray-200">
              {price}
            </div>
            {yearlyPrice && (
              <div className="text-sm text-gray-400 mt-2">
                {yearlyPrice}
              </div>
            )}
          </div>

          <p className="text-sm text-gray-400">{description}</p>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
          }}
        />

        {/* Features */}
        <div className="space-y-3 mb-8 flex-1">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + i * 0.05 }}
            >
              {feature.included ? (
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color }} />
              ) : (
                <X size={20} className="flex-shrink-0 mt-0.5 text-gray-600" />
              )}
              <span
                className={`text-sm ${feature.included ? "text-gray-300" : "text-gray-600"}`}
              >
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <motion.a
            href="https://app.biomax-ai.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl font-bold text-lg mb-2 inline-block text-center"
            style={{
              background: isPopular || isPremium
                ? `linear-gradient(135deg, ${color}, ${color}CC)`
                : "rgba(107, 114, 128, 0.3)",
              color: isPopular || isPremium ? "#fff" : color,
              border: isPopular || isPremium ? "none" : `1px solid ${color}60`,
              boxShadow: isPopular || isPremium ? `0 0 30px ${color}40` : "none",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: `0 0 40px ${color}60`,
            }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
          </motion.a>
          {ctaSubtext && (
            <div className="text-xs text-center text-gray-500">{ctaSubtext}</div>
          )}
        </div>
      </div>

      {/* Glow effect for popular/premium */}
      {(isPopular || isPremium) && (
        <div
          className="absolute inset-0 rounded-3xl -z-10"
          style={{
            background: `radial-gradient(circle, ${color}20, transparent)`,
            filter: "blur(30px)",
          }}
        />
      )}
    </motion.div>
  );
}
