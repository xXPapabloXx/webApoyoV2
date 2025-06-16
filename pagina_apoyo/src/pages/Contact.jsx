import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 md:px-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Contáctanos</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Mapa embebido */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md shadow-emerald-500">
          <iframe
            title="Ubicación ALogísticos"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.912914851223!2d-75.41689468984919!3d6.154735693806663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469f46df97c475%3A0x972e1c0908aa1584!2sApoyo%20Logistico%20ZF%20S.A.S!5e1!3m2!1ses-419!2sco!4v1750100394694!5m2!1ses-419!2sco"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="border-none"
          ></iframe>
        </div>

        {/* Información de contacto */}
        <motion.div
          className="text-gray-200 bg-gray-800 rounded-xl p-6 shadow shadow-amber-300/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Información</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li>
              <span className="font-semibold">Horario de atención:</span>
              <br />
              Lunes a viernes: 7 a.m. - 5 p.m.
              <br />
              Sábados y domingos: 7 a.m. - 12 m.
            </li>
            <li>
              <span className="font-semibold">NIT:</span> 901.080.526-2
            </li>
            <li>
              <span className="font-semibold">Dirección:</span>
              <br />
              Rionegro (Antioquia), Vereda Chachafruto, Zona Franca, Bodega 192
            </li>
            <li>
              <span className="font-semibold">Atención al cliente:</span>
              <br />
              alogisticosas@aplogistico.com
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
