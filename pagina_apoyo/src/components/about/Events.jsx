import { useState } from "react";
import { imagenes } from "./images";
import { motion, AnimatePresence } from "framer-motion";

const categorias = ["ver_todo", ...Object.keys(imagenes)];

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [categoria, setCategoria] = useState("ver_todo");

  const handleClick = (img) => {
    setSelectedImage(img.src);
  };

  const closeModal = () => setSelectedImage(null);

  const imagenesFiltradas =
    categoria === "ver_todo"
      ? Object.values(imagenes).flat()
      : imagenes[categoria];

  return (
    <div className="mt-8 text-texto px-4 sm:px-6 md:px-10 ">
      <h1 className="mt-5 text-2xl md:text-3xl text-center font-bold mb-6 pb-2 shadow-md shadow-secundario w-full md:w-1/3 mx-auto rounded">
        Actividades
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categorias.map((cat) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`text-sm md:text-base px-4 py-2 rounded shadow-md transition-colors ${
              categoria === cat
                ? "bg-complemento/40 shadow-acento/60"
                : "bg-transparent shadow-acento/60 hover:bg-complemento/40"
            }`}
          >
            {cat === "ver_todo"
              ? "Ver Todo"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Galería */}
      <div className="h-96 overflow-y-scroll overflow-x-hidden rounded-2xl mb-5 custom-scroll shadow-inner shadow-secundario/20 bg-secundario/20 p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 pb-8 ">
          {imagenesFiltradas.map((img, idx) => (
            <motion.button
              key={img.src}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="shadow-md shadow-complemento/60 cursor-pointer rounded-xl overflow-hidden"
              onClick={() => handleClick(img)}
            >
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-48 object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-secundario shadow shadow-acento p-4 rounded-xl w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={selectedImage}
                alt="Vista ampliada"
                className="w-full h-[22rem] sm:h-[28rem] object-cover rounded"
              />
              <button
                className="mt-4 w-full sm:w-1/2 shadow shadow-complemento text-white px-4 py-2 rounded hover:bg-complemento/20 mx-auto block"
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
