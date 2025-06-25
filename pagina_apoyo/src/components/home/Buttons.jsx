import React from "react";
import { motion } from "framer-motion";
import ButtonRender from "../ButtonRender";
import pale from "../../assets/models/serv_log-draco.glb"
import contact from "../../assets/models/Contact-draco.glb"

const Buttons = ({ setCurrentView }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4 md:px-8 py-6"
    >
      <ButtonRender
        setCurrentView={setCurrentView}
        view={"log_services"}
        modelPath={pale}
        rotation={[0, Math.PI / 1.6, Math.PI / 40]}
        rotates={false}
        text={"Servicios Logísticos"}
      />
      <ButtonRender
        setCurrentView={setCurrentView}
        view={"contact"}
        modelPath={contact}
        rotation={[0, -Math.PI / 2, Math.PI / 2]}
        rotates={false}
        scale={[1.3, 1.3, 1.3]}
        text={"Contacto"}
      />
    </motion.div>
  );
};

export default Buttons;
