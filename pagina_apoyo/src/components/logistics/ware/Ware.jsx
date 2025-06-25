import { useState } from "react";
import { motion } from "framer-motion";
import { simples, desplegables } from "./content";
import ItemCard from "./ItemCard";
import {
  Tag,
  ClipboardCheck,
  Box,
  Package,
  SearchCheck,
  Replace,
  Layers,
  PackageCheck,
  Printer,
  Shirt,
  Gem,
  Sparkles,
  Utensils,
  Footprints,
  Puzzle,
} from "lucide-react";

const iconMap = {
  Tag,
  ClipboardCheck,
  Box,
  Package,
  SearchCheck,
  Replace,
  Layers,
  PackageCheck,
  Printer,
  Shirt,
  Gem,
  Sparkles,
  Utensils,
  Footprints,
  Puzzle,
};

export default function LogisticWare() {
  const [selectedKey, setSelectedKey] = useState("internos");

  return (
    <div className="w-full pt-6 pb-10 px-4 text-white">
      <h1 className="text-2xl md:text-3xl text-center mx-auto mb-6 p-2 shadow shadow-purple-500 font-bold rounded-md w-full md:w-1/2">
        Manejo de mercancía
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Panel izquierdo */}
        <div className="shadow shadow-purple-500 p-4 rounded-lg h-fit">
          <h2 className="text-center text-lg font-semibold pb-2 mb-4 shadow shadow-purple-500">
            Procesos generales
          </h2>
          <div className="space-y-3">
            {simples.map((item, i) => (
              <ItemCard
                key={i}
                title={item.titulo}
                description={item.descripcion}
                IconComponent={iconMap[item.icon]}
              />
            ))}
          </div>
        </div>

        {/* Panel derecho */}
        <div className="md:col-span-2 shadow shadow-purple-500 p-4 rounded-lg flex flex-col gap-4 h-fit">
          <h2 className="text-center text-lg font-semibold pb-2 mb-4 shadow shadow-purple-500">
            Procesos específicos
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {desplegables.map(({ titulo, key }, index) => (
              <motion.button
                key={key}
                onClick={() => setSelectedKey(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className={`text-sm md:text-base font-medium px-4 py-2 shadow shadow-purple-400 border rounded transition-colors duration-200 ${
                  selectedKey === key
                    ? "bg-purple-500/60 border-purple-600"
                    : "bg-transparent border-purple-300 hover:bg-purple-300/10"
                }`}
              >
                {titulo}
              </motion.button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {desplegables
              .find((d) => d.key === selectedKey)
              .subtareas.map((item, i) => (
                <ItemCard
                  key={i}
                  title={item.titulo}
                  description={item.descripcion}
                  IconComponent={iconMap[item.icon]}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
