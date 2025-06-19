import React from "react";
import { motion } from "framer-motion";
import Landing from "../components/home/Landing";
import Buttons from "../components/home/Buttons";

const Home = ({ setCurrentView }) => {
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Landing />
      <Buttons setCurrentView={setCurrentView} />
    </motion.div>
  );
};

export default Home;
