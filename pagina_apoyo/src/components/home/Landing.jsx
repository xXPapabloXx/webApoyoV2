import React from "react";
import ModelRender from "../../util/3D/ModelRender";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="w-full mb-6">
      <motion.div
        className="flex flex-col justify-center items-center text-white min-h-[28rem] px-4 pt-10 md:pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-md h-64 md:h-72">
          <ModelRender
            modelPath={"/models/Logo-draco.glb"}
            rotation={[0, -Math.PI / 2, 0]}
            rotates={true}
            scale={[1.5, 1.5, 1.5]}
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center">
          Apoyo Logístico ZF S.A.S
        </h1>
        <p className="text-lg md:text-2xl text-slate-50 font-semibold text-center">
          Proveedor de servicios logísticos
        </p>
      </motion.div>
    </div>
  );
};

export default Landing;
