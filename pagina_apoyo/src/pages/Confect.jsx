import React, { useState } from "react";
import { motion } from "framer-motion";
import { clothingOptions } from "../components/confect/clothingOptions";
import ModelCanvas from "../util/3D/ModelCanvas";

const Confect = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedModelId(null);
  };

  const currentOptions = clothingOptions[selectedCategory] || [];
  const selectedModel =
    currentOptions.find((m) => m.id === selectedModelId) || null;

  return (
    <div className="grid grid-cols-5 h-screen text-white">
      {/* Columna izquierda: categorías */}
      <div className="p-4 flex flex-col gap-4 items-center">
        <h2 className="text-3xl font-semibold mb-2 shadow shadow-rose-400 w-2/3 text-center rounded-sm p-2">
          Categoría
        </h2>
        {Object.keys(clothingOptions).map((catKey) => (
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            key={catKey}
            onClick={() => handleCategoryChange(catKey)}
            className={`px-4 py-2 text-xl rounded shadow ${
              selectedCategory === catKey
                ? "shadow-rose-400 bg-rose-400/30"
                : "shadow-rose-300/60"
            }`}
          >
            {catKey.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </motion.button>
        ))}
        {selectedModel && (
          <div className="flex flex-col items-center mt-4">
            <label className="text-sm mb-1">Color</label>
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-20 h-10 rounded-md border"
            />
          </div>
        )}
      </div>

      {/* Centro: modelo base + modelo seleccionado */}
      <div className="col-span-3">
        <ModelCanvas
          selectedModel={selectedModel}
          category={selectedCategory}
          color={selectedColor}
        />
      </div>

      {/* Columna derecha: opciones de ropa */}
      <div className="p-4 flex flex-col items-center gap-4 text-white">
        <h2 className="text-3xl font-semibold  shadow shadow-rose-400 w-2/3 text-center rounded-sm p-2">
          Tipos
        </h2>
        {currentOptions.map((model) => (
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            key={model.id}
            onClick={() =>
              setSelectedModelId((prev) =>
                prev === model.id ? null : model.id
              )
            }
            className={`px-4 py-2 w-32 rounded shadow text-xl ${
              selectedModelId === model.id
                ? " shadow-rose-300"
                : "shadow shadow-rose-400"
            }`}
          >
            {model.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Confect;
