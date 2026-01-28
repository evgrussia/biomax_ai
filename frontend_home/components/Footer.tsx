import { motion } from "motion/react";
import { Mail, MessageCircle, Radio } from "lucide-react";

const productLinks = [
  { name: "Функции", href: "#" },
  { name: "Тарифы", href: "#" },
  { name: "Интеграции", href: "#" },
  { name: "Roadmap", href: "#" },
  { name: "Changelog", href: "#" },
];

const resourceLinks = [
  { name: "Документация", href: "#" },
  { name: "API", href: "#" },
  { name: "Блог", href: "#" },
  { name: "Исследования", href: "#" },
  { name: "Гайды", href: "#" },
];

const companyLinks = [
  { name: "О нас", href: "#" },
  { name: "Партнёрства", href: "#" },
  { name: "Карьера", href: "#" },
  { name: "Пресс-кит", href: "#" },
  { name: "Контакты", href: "#" },
];

const legalLinks = [
  { name: "Политика конфиденциальности", href: "#" },
  { name: "Условия использования", href: "#" },
  { name: "152-ФЗ Compliance", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

const socialLinks = [
  { name: "Telegram", icon: "📱", href: "https://t.me/evgrussia" },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(10, 15, 30, 0.95))",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Contact Info */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.a
              href="mailto:evgrussia@gmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-xl"
              style={{
                background: "rgba(0, 212, 255, 0.1)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(0, 212, 255, 0.6)",
                boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
              }}
            >
              <Mail size={20} className="text-[#00D4FF]" />
              <span className="text-gray-300">evgrussia@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://t.me/evgrussia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl"
              style={{
                background: "rgba(0, 255, 148, 0.1)",
                border: "1px solid rgba(0, 255, 148, 0.3)",
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(0, 255, 148, 0.6)",
                boxShadow: "0 0 20px rgba(0, 255, 148, 0.3)",
              }}
            >
              <MessageCircle size={20} className="text-[#00FF94]" />
              <span className="text-gray-300">@evgrussia</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-bold text-[#00D4FF] mb-4 uppercase tracking-wider">
              Продукт
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold text-[#00FF94] mb-4 uppercase tracking-wider">
              Ресурсы
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold text-[#8B5CF6] mb-4 uppercase tracking-wider">
              Компания
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold text-[#F59E0B] mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: "rgba(26, 31, 46, 0.8)",
                  border: "1px solid rgba(107, 114, 128, 0.3)",
                }}
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(0, 212, 255, 0.6)",
                  boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)",
          }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>© 2026 BIOMAX AI. Все права защищены.</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span>🇷🇺</span>
              <span>Сделано в России с 💚</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-700" />
            <div className="text-xs">
              Данные хранятся в РФ в соответствии с 152-ФЗ
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
