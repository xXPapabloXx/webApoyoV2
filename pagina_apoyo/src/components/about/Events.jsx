import { useState } from "react";
import { imagenes } from "./images";
import { motion, AnimatePresence } from "framer-motion";

const categorias = ["ver_todo", ...Object.keys(imagenes)];

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [categoria, setCategoria] = useState("ver_todo");

  const handleClick = (img) => {
    console.log(img)
    setSelectedImage(img.src);
  };

  const closeModal = () => setSelectedImage(null);

  const imagenesFiltradas =
    categoria === "ver_todo"
      ? Object.values(imagenes).flat()
      : imagenes[categoria];

  return (
    <div className="mt-6 text-white">
      <h1 className="mt-5 text-3xl text-white text-center mb-3 pb-2 shadow shadow-emerald-400 w-1/3 mx-auto">
        Actividades
      </h1>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {categorias.map((cat) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`px-4 py-2 rounded shadow ${
              categoria === cat
                ? "shadow shadow-emerald-400 bg-emerald-600/60"
                : "shadow shadow-emerald-400"
            }`}
          >
            {cat === "ver_todo"
              ? "Ver Todo"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </div>

      <div className="w-14/15 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 overflow-hidden pb-5">
        {imagenesFiltradas.map((img, idx) => (
          <motion.button
            key={img.src}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="shadow-md shadow-emerald-600/80 cursor-pointer rounded-xl overflow-hidden"
            onClick={() => handleClick(img)}
          >
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-50 object-cover"
            />
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-slate-900 shadow shadow-emerald-300 p-4 rounded-xl max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={selectedImage}
                alt="Vista ampliada"
                className="w-full h-96 rounded object-cover"
              />
              <button
                className="mt-4 w-1/4 shadow shadow-emerald-300/60 text-white px-4 py-2 rounded hover:bg-emerald-300/30 mx-auto block"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
