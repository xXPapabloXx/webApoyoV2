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
  let [selectedKey, setSelectedKey] = useState("cont");
  return (
    <div className="w-full justify-center pt-3 mt-3">
      <h1 className="text-3xl text-white w-1/3 ml-auto mr-auto text-center shadow shadow-emerald-500 pb-1 mb-2 font-bold">
        Capacidades de carga
      </h1>

      <div className="flex flex-wrap justify-center mb-2">
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
            className="text-sky-50 font-medium px-4 py-2 shadow shadow-emerald-500"
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
        className="text-white max-w-6xl mx-auto overflow-y-hidden"
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
