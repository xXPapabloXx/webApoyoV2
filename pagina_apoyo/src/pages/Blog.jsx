import React from "react";
import { motion } from "framer-motion";

import CurrentNorm from "../components/blog/CurrentNorm";
import TablesRenderer from "../components/blog/TablesRenderer";

const Blog = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-stone-950 to-slate-800 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <CurrentNorm />
      <TablesRenderer />
    </motion.div>
  );
};

export default Blog;
