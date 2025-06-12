import React from "react";
import { motion } from "framer-motion";
import ModelRender from "../../../../util/3D/ModelRender"; 


export default function Reception() {
  return (
    <div className="text-white rounded-xl shadow-md p-6 mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Recepción de mercancía</h2>

      <p className="text-lg text-center mb-6 text-gray-200">
        En esta sección gestionamos la llegada de productos, verificamos su integridad,
        y registramos el ingreso al sistema logístico.
      </p>

      {/* Modelo 3D opcional */}
      <div className="">
        <ModelRender
          modelPath="/models/serv_log-draco.glb"
          rotates={true}
          rotation={[0, Math.PI / 1.6, 0]}
          scale={[1, 1, 1]}
        />
      </div>

      {/* Opciones de proceso */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          ["Registrar llegada", "📦"],
          ["Verificar documentos", "📄"],
          ["Asignar ubicación", "📍"],
        ].map(([label, icon], i) => (
          <motion.button
            key={label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl shadow"
          >
            <span className="text-xl mr-2">{icon}</span>
            {label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
