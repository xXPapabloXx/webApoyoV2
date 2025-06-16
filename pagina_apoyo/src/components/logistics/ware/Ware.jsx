import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const simples = [
  "Clasificación de producto por diseño",
  "Inventario inicial de la mercancía",
  "Inventario final por caja",
  "Separación de segundas",
];

const desplegables = [
  {
    titulo: "Procesos internos",
    key: "internos",
    subtareas: [
      "Pre-inspección (en caso necesario)",
      "Des-marquillar, Re-marquillar",
      "Doblar",
      "Empacar",
    ],
  },
  {
    titulo: "Etiquetado y marquillas",
    key: "etiquetas",
    subtareas: [
      "Líneas de producción de etiquetas",
      "Ropa infantil, adultos",
      "Accesorios",
      "Ropa interior",
      "Calzado",
      "Juguetería",
      "Bisutería",
      "Grado alimenticio",
    ],
  },
];

export default function LogisticWare() {
  const [selectedKey, setSelectedKey] = useState("internos");

  return (
    <div className="w-full justify-center pb-10 mt-2 text-white">
      <h1 className="text-3xl text-white w-1/3 mx-auto text-center shadow shadow-purple-500 pb-2 mb-4 font-bold">
        Manejo de mercancía
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Panel izquierdo */}
        <div className="shadow shadow-purple-500 p-4 rounded-lg h-fit">
          <h2 className="text-center text-lg font-semibold pb-2 mb-4 shadow shadow-purple-500">
            Procesos generales
          </h2>
          <ul className="space-y-2">
            {simples.map((item, i) => (
              <li
                key={i}
                className="px-3 py-2 border shadow shadow-purple-600 rounded"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 shadow shadow-purple-500 p-4 rounded-lg flex flex-col gap-4 h-73">
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
                className={`font-medium px-4 py-2 shadow shadow-purple-400 border rounded ${
                  selectedKey === key
                    ? "bg-purple-500/60 border-purple-600"
                    : " border-purple-300"
                }`}
              >
                {titulo}
              </motion.button>
            ))}
          </div>

          <div className="h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {desplegables
                  .find((d) => d.key === selectedKey)
                  .subtareas.map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 border shadow shadow-purple-400 rounded"
                    >
                      {item}
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
