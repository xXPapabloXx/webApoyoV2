import { motion } from "framer-motion";

const navItems = [
  ["Inicio", "home"],
  ["Logística", "log_services"],
  ["Confección", "confect"],
  ["Quienes somos", "about"],
  ["Contacto", "contact"],
  ["Blog", "blog"],
];

export default function NavBar({ onSelect, currentView }) {
  return (
    <nav className="w-1/1 flex flex-wrap gap-5 p-4 justify-center bg-stone-950 backdrop-blur-md">
      {navItems.map(([label, key], index) => (
        <motion.button
          key={key}
          onClick={() => onSelect(key)}
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(37, 193, 206, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{  duration: 0.25, delay: index * 0.01 }}
          className="text-sky-50 font-medium px-4 py-2 shadow shadow-cyan-500/60"
          style={{
            backgroundColor:
              currentView === key ? "rgba(37, 193, 206, 0.3)" : "transparent",
          }}
        >
          {label}
        </motion.button>
      ))}
    </nav>
  );
}
