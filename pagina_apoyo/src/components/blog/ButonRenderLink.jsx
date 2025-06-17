import React from "react";
import ModelRender from "../../util/3D/ModelRender";
import { motion } from "framer-motion";

const ButonRenderLink = ({ text, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
    >
      <motion.button
        whileHover={{ scale: 1.06, backgroundColor: "rgba(137, 17, 186, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full shadow shadow-purple-500 rounded-2xl cursor-pointer"
      >
        <ModelRender
          modelPath={"/models/Certificate-draco.glb"}
          rotation={[Math.PI / 2, 0, 0]}
          rotates={true}
          scale={[1.2, 1.2, 1.2]}
        />
        <h2 className="text-center text-white text-2xl shadow shadow-purple-500 rounded-md p-2 pt-3">
          {text}
        </h2>
      </motion.button>
    </a>
  );
};

export default ButonRenderLink;
