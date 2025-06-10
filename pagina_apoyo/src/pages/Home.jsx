import React from "react";
import ModelRender from "../util/ModelRender";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-black via-slate-700 to-indigo-950 grid grid-cols-2">
      <motion.div
        className="flex flex-col justify-center items-center text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-1/2 ">
          <ModelRender
            modelPath={"/models/Logo.glb"}
            rotation={[0, -Math.PI / 2, 0]}
            rotates={true}
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">Apoyo Logístico ZF S.A.S</h1>
        <p className="text-lg text-slate-300">
          Proveedor de servicios logísticos
        </p>
      </motion.div>

      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {
          <ModelRender
            modelPath="/models/montacargas.glb"
            rotation={[0, Math.PI / 4, 0]}
            rotates={false}
          />
        }
      </motion.div>
    </div>
  );
};

export default Home;
