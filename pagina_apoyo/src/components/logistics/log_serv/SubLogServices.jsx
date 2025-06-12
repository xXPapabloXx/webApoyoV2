import React, { useState } from "react";
import { motion } from "framer-motion";
import Reception from "./sub_components/Reception";
import Storage from "./sub_components/Storage";
import Delivery from "./sub_components/Delivery";
import Transport from "./sub_components/Transport";


const logItems = [
  ["Recepción", "rep"],
  ["Almacenamiento", "alma"],
  ["Despacho", "desp"],
  ["Transporte", "trans"],
];

function renderComponent(key) {
  switch (key) {
    case "rep":
      return <Reception />;
    case "alma":
      return <Storage />;
    case "desp":
      return <Delivery />;
    case "trans":
      return <Transport />;
    default:
      return <Reception />;
  }
}

const SubLogServices = () => {
  let [selectedKey, setSelectedKey] = useState("rep");
  return (
    <div className="w-full bg-gradient-to-b from-stone-950 to-slate-900 justify-center pt-3">
      <h1 className="text-3xl text-white w-1/3 ml-auto mr-auto text-center shadow shadow-emerald-600 pb-1 mb-2 font-bold">
        Servicios Logísticos
      </h1>
      
        <div className="flex flex-wrap justify-center mb-2">
          {logItems.map(([label, key], index) => (
            <motion.button
              key={key}
              onClick={() => setSelectedKey(key)}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(37, 206, 134, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.01 }}
              className="text-sky-50 font-medium px-4 py-2 shadow shadow-emerald-700"
              style={{
                backgroundColor:
                  selectedKey === key
                    ? "rgba(37, 206, 134, 0.3)"
                    : "transparent",
              }}
            >
              {label}
            </motion.button>
          ))}
        </div>
        <div className="text-white max-w-3xl mx-auto overflow-y-hidden">{renderComponent(selectedKey)}</div>
      
    </div>
  );
};

export default SubLogServices;
