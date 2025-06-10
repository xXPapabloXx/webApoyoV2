import { motion } from "framer-motion";
import ModelRender from "../util/ModelRender";

const navItems = [
  ["Inicio", "home"],
  ["Servicios", "services"],
  ["Acerca", "about"],
  ["Contacto", "contact"],
];

export default function NavBar({ onSelect }) {
  return (
    <>
      <div className="w-1/1 grid grid-cols-2 bg-black">
        <div className="w-1/2">
          <ModelRender modelPath={"/models/Logo.glb"} rotates={true} />
        </div>
        <nav className="w-1/1 flex flex-wrap gap-5 p-4 justify-end bg-black backdrop-blur-md">
          {navItems.map(([label, key], index) => (
            <motion.button
              key={key}
              onClick={() => onSelect(key)}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-sky-50 font-medium px-4 py-2 shadow shadow-gray-600/50"
            >
              {label}
            </motion.button>
          ))}
        </nav>
      </div>
    </>
  );
}
