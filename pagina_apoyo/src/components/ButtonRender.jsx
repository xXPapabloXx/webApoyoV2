import React from "react";
import ModelRender from "../util/3D/ModelRender";
import { motion } from "framer-motion";

const ButtonRender = ({ text, modelPath, rotation, rotates }) => {
  return (
    <>
      <motion.button
        onClick={() => console.log("algo")}
        whileHover={{
          scale: 1.04,
          backgroundColor: "rgba(200,200,200,0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-x-hidden  items-center"
      >
        <div className="h-50">
          <ModelRender
            modelPath={modelPath}
            rotation={rotation}
            rotates={rotates}
          />
        </div>
        <h1 className="text-white text-2xl mb-3 pt-2 pb-2 rounded-2xl bg-cyan-800 w-1/2 ml-auto mr-auto">
          {text}
        </h1>
      </motion.button>
    </>
  );
};

export default ButtonRender;
