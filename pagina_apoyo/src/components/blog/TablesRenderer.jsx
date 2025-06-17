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
    <div className="w-full pt-6 px-4 md:px-8">
      <h1 className="text-2xl md:text-3xl text-white text-center mx-auto mb-4 pb-2 font-bold shadow shadow-emerald-500 w-full md:w-1/2 rounded-md">
        Capacidades de carga
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {logItems.map(([label, key], index) => (
          <motion.button
            key={key}
            onClick={() => setSelectedKey(key)}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(27, 240, 141, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.01 }}
            className={`text-sky-50 font-medium px-4 py-2 rounded-md border border-emerald-400 shadow `}
            style={{
              backgroundColor:
                selectedKey === key ? "rgba(27, 240, 141, 0.3)" : "transparent",
            }}
          >
            {label}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="text-white w-full overflow-x-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {renderComponent(selectedKey)}
      </motion.div>
    </div>
  );
};

export default TablesRenderer;
