import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { clothingOptions } from "../components/confect/clothingOptions";
import ModelCanvas from "../util/3D/ModelCanvas";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Confect = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("prendas_superiores");
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [colorMap, setColorMap] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedModelId(null);
  };

  const currentOptions = clothingOptions[selectedCategory] || [];
  const selectedModel =
    currentOptions.find((m) => m.id === selectedModelId) || null;

  useEffect(() => {
    const loadMaterials = async () => {
      if (!selectedModel) return;

      const loader = new GLTFLoader();

      loader.load(
        selectedModel.modelPath,
        (gltf) => {
          const foundMaterials = {};
          gltf.scene.traverse((child) => {
            if (child.isMesh && child.material && child.material.name) {
              const matName = child.material.name;
              if (!foundMaterials[matName]) {
                const defaultColor = "#" + child.material.color.getHexString();
                foundMaterials[matName] = defaultColor;
              }
            }
          });
          setColorMap(foundMaterials);
        },
        undefined,
        (err) => {
          console.error("Error cargando modelo para materiales:", err);
        }
      );
    };

    loadMaterials();
  }, [selectedModel]);

  return (
    <div className="mt-6">
      <div>
        <h1 className="text-white text-3xl sm:text-4xl w-4/5 sm:w-1/4 mx-auto text-center p-2 shadow shadow-pink-500">
          Experiencia
        </h1>
        <p className="w-11/12 sm:w-3/5 text-white mx-auto text-base sm:text-xl mt-3 shadow shadow-pink-400/50 text-justify p-3">
          Con más de 15 años de experiencia confeccionamos prendas en tejido de
          punto y vestidos de baño. Contamos con altos estándares de calidad,
          personal capacitado y procesos que garantizan acabados impecables.
        </p>
        <h1 className="text-white text-3xl sm:text-4xl w-4/5 sm:w-1/2 mx-auto text-center mt-8 p-2 shadow shadow-pink-500">
          Prendas confeccionadas
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-white pb-5 mt-6">
        {/* Categorías y colores */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold shadow shadow-rose-400 w-full md:w-2/3 text-center rounded-sm p-2">
            Categoría
          </h2>
          {Object.keys(clothingOptions).map((catKey) => (
            <motion.button
              key={catKey}
              onClick={() => handleCategoryChange(catKey)}
              className={`text-base md:text-xl px-4 py-2 w-40 rounded shadow ${
                selectedCategory === catKey
                  ? "bg-rose-400/60 shadow-rose-500"
                  : "hover:bg-rose-400/60 shadow-rose-300/40"
              }`}
            >
              {catKey
                .replace(/_/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </motion.button>
          ))}
        </div>
        {/* Tipos de ropa */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold shadow shadow-rose-400 w-full md:w-2/3 text-center rounded-sm p-2">
            Tipos
          </h2>
          {currentOptions.map((model) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
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
              className={`text-base md:text-xl px-4 py-2 w-32 rounded shadow ${
                selectedModelId === model.id
                  ? "bg-rose-400 shadow-rose-400"
                  : "hover:bg-rose-400 shadow-rose-300"
              }`}
            >
              {model.label}
            </motion.button>
          ))}

          {Object.keys(colorMap).length > 0 && (
            <div className="w-full mt-6">
              <h3 className="text-lg font-semibold text-center border-t pt-4 border-rose-300 mb-2">
                Selecciona colores
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(colorMap).map(([matName, color]) => (
                  <div key={matName} className="flex flex-col items-center">
                    <label className="text-xs md:text-sm mb-1">{matName}</label>
                    <input
                      type="color"
                      value={color}
                      onChange={(e) =>
                        setColorMap((prev) => ({
                          ...prev,
                          [matName]: e.target.value,
                        }))
                      }
                      className="w-16 h-10 rounded-md border border-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modelo */}
        <div className="md:col-span-3 w-full h-[40vh] md:h-[85vh] shadow shadow-pink-500">
          <ModelCanvas
            selectedModel={selectedModel}
            category={selectedCategory}
            colorMap={colorMap}
          />
        </div>
      </div>
    </div>
  );
};

export default Confect;
