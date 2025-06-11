import React from "react";
import ModelRender from "../util/3D/ModelRender";
import { motion } from "framer-motion";
import ButtonRender from "../components/ButtonRender";

const Home = () => {
  return (
    <>
      <div className="w-full h-96 bg-gradient-to-b from-stone-950 to-slate-700 grid grid-cols-2">
        <motion.div
          className="flex flex-col justify-center items-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-1/2 ">
            <ModelRender
              modelPath={"/models/Logo-draco.glb"}
              rotation={[0, -Math.PI / 2, 0]}
              rotates={true}
              scale={[1.3, 1.3, 1.3]}
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Apoyo Logístico ZF S.A.S</h1>
          <p className="text-lg text-slate-300">
            Proveedor de servicios logísticos
          </p>
        </motion.div>

        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {
            <ModelRender
              modelPath="/models/montacarga.glb"
              rotation={[0, Math.PI / 4, 0]}
              rotates={false}
            />
          }
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-slate-700 to-sky-950 grid grid-cols-3 overflow-hidden"
      >
        <ButtonRender
          modelPath="/models/serv_log.glb"
          rotation={[0, Math.PI / 1.6, Math.PI / 40]}
          rotates={false}
          text={"Servicios Logísticos"}
        />
        <ButtonRender
          modelPath="/models/sewings.glb"
          rotation={[0, Math.PI * 0.1, Math.PI / 60]}
          rotates={false}
          scale={[0.85, 0.85, 0.85]}
          text={"Confección"}
        />
        <ButtonRender
          modelPath="/models/montacargas.glb"
          rotation={[0, Math.PI / 4, 0]}
          rotates={false}
          text={"Contacto"}
        />
      </motion.div>
    </>
  );
};

export default Home;
