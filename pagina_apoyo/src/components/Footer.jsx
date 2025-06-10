import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-4 text-center text-sky-50 bg-black backdrop-blur-md shadow-inner shadow-gray-700"
    >
      © 2025 Todos los derechos reservados.
    </motion.footer>
  );
}
