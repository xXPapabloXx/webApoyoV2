import React, { useState } from "react";
import { motion } from "framer-motion";
import SubLogServTrans from "./sub_components/SubLogServTrans";
import content from "./sub_components/content";

const logItems = [
  ["Recepción / Despacho", "rep"],
  ["Almacenamiento", "alma"],
  ["Transporte", "trans"],
];

function renderComponent(key) {
  switch (key) {
    case "rep":
      return <SubLogServTrans contenido={content.recepcion} />;
    case "alma":
      return <SubLogServTrans contenido={content.almacenamiento} />;
    case "trans":
      return <SubLogServTrans contenido={content.transporte} />;
    default:
      return <SubLogServTrans contenido={content.recepcion} />;
  }
}

const SubLogServices = () => {
  let [selectedKey, setSelectedKey] = useState("rep");
  return (
    <div className="w-full bg-gradient-to-b justify-center pt-3">
      <h1 className="text-3xl text-white w-1/3 ml-auto mr-auto text-center shadow shadow-amber-300 pb-1 mb-2 font-bold">
        Servicios Logísticos
      </h1>

      <div className="flex flex-wrap justify-center mb-2">
        {logItems.map(([label, key], index) => (
          <motion.button
            key={key}
            onClick={() => setSelectedKey(key)}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(216, 227, 29, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.01 }}
            className="text-sky-50 font-medium px-4 py-2 shadow shadow-amber-300"
            style={{
              backgroundColor:
                selectedKey === key ? "rgba(216, 227, 29, 0.3)" : "transparent",
            }}
          >
            {label}
          </motion.button>
        ))}
      </div>
      <motion.div
        className="text-white max-w-5xl mx-auto overflow-y-hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {renderComponent(selectedKey)}
      </motion.div>
    </div>
  );
};

export default SubLogServices;
