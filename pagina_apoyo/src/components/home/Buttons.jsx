import React from "react";
import { motion } from "framer-motion";
import ButtonRender from "../ButtonRender";

const Buttons = ({ setCurrentView }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-slate-700 to-sky-950 grid grid-cols-3 overflow-hidden"
    >
      <ButtonRender
        setCurrentView={setCurrentView}
        view={"log_services"}
        modelPath="/models/serv_log-draco.glb"
        rotation={[0, Math.PI / 1.6, Math.PI / 40]}
        rotates={false}
        text={"Servicios Logísticos"}
      />
      <ButtonRender
        setCurrentView={setCurrentView}
        view={"confect"}
        modelPath="/models/sewings-draco.glb"
        rotation={[0, Math.PI * 0.18, Math.PI * 0.012]}
        rotates={false}
        scale={[0.85, 0.85, 0.85]}
        text={"Confección"}
      />
      <ButtonRender
        setCurrentView={setCurrentView}
        view={"contact"}
        modelPath="/models/Contact-draco.glb"
        rotation={[0, -Math.PI / 2, Math.PI / 2]}
        rotates={false}
        scale={[1.3, 1.3, 1.3]}
        text={"Contacto"}
      />
    </motion.div>
  );
};

export default Buttons;
