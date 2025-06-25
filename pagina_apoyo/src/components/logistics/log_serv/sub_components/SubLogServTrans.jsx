import { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cargarImagenDesdeRuta } from "./content";

const SubLogServTrans = ({ contenido }) => {
  const [imagenes, setImagenes] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      const nuevas = {};
      for (const ruta of contenido.routes) {
        const img = await cargarImagenDesdeRuta(ruta);
        if (img) nuevas[ruta] = img;
      }
      setImagenes(nuevas);
    };
    cargar();
  }, [contenido]);

  const handleClick = (ruta) => {
    setSelectedImage(imagenes[ruta]);
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="text-white rounded-xl shadow-md p-6 mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-center shadow shadow-amber-300/60 w-1/2 mx-auto">
        {contenido.title}
      </h2>

      <p className="text-lg text-center mb-6 text-gray-200">{contenido.text}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contenido.routes.map((route) => (
          <motion.button
            key={route}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="shadow-md shadow-amber-300/80 cursor-pointer rounded-xl overflow-hidden"
            onClick={() => handleClick(route)}
          >
            {imagenes[route] && (
              <img
                src={imagenes[route]}
                alt={route}
                className="w-full h-64 object-cover"
              />
            )}
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
              className="bg-slate-900 shadow shadow-amber-300 p-4 rounded-xl max-w-3xl w-full"
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
                className="mt-4 w-1/4 shadow shadow-amber-300/60 text-white px-4 py-2 rounded hover:bg-amber-300/30 mx-auto block"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SubLogServTrans;
