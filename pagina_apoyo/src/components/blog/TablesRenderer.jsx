import React, { useState } from "react";
import ContainerCap from "./tables/ContainerCap";
import VehicleCap from "./tables/VehicleCap";
import { motion } from "framer-motion";

const logItems = [
  ["Por contenedor", "cont"],
  ["Por vehículo", "veh"],
];

function renderComponent(key) {
  switch (key) {
    case "cont":
      return <ContainerCap />;
    case "veh":
      return <VehicleCap />;
    default:
      return <ContainerCap />;
  }
}

const TablesRenderer = () => {
  const [selectedKey, setSelectedKey] = useState("cont");

  return (
    <motion.div
      className="w-full mt-6 pt-6 px-4 md:px-8 text-texto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl md:text-3xl  text-center mx-auto mb-4 pb-2 font-bold shadow shadow-secundario w-full md:w-1/2 rounded-md">
        Capacidades de carga
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {logItems.map(([label, key], index) => (
          <motion.button
            key={key}
            onClick={() => setSelectedKey(key)}
            whileHover={{
              scale: 1.1
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.01 }}
            className={`font-medium px-4 py-2 rounded-md shadow shadow-acento transition-colors duration-300 ${
              selectedKey === key
                ? "bg-complemento/20"
                : "bg-transparent hover:bg-complemento/40"
            }`}
          >
            {label}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="w-full overflow-x-auto"
        key={selectedKey}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {renderComponent(selectedKey)}
      </motion.div>
    </motion.div>
  );
};

export default TablesRenderer;
