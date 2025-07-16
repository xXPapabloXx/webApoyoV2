import { motion } from "framer-motion";

import certificado from "../../assets/images/general/certificado.png"
const ButonRenderLink = ({ text, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
    >
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full shadow-inner shadow-complemento rounded-2xl cursor-pointer"
      >
        <img src={certificado} alt="certificate"/>
        <h2 className="text-center text-texto font-semibold text-2xl shadow shadow-acento rounded-md p-2 pt-3">
          {text}
        </h2>
      </motion.button>
    </a>
  );
};

export default ButonRenderLink;
