import React from 'react';
import { motion } from 'framer-motion';
import ButonRenderLink from './ButonRenderLink';

const CurrentNorm = () => {
  return (
    <motion.div
      className="pt-6 pb-10 px-4 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-white text-2xl md:text-3xl text-center mb-8 p-2 w-full md:w-1/3 mx-auto shadow shadow-purple-500 rounded-md">
        Normatividad Actual
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        <div className="w-full sm:w-2/3 h-80 mb-4">
          <ButonRenderLink
            text={"RESOLUCIÓN 2107 DE 2019"}
            url={
              "https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Resolucion/30042225"
            }
          />
        </div>
        <div className="w-full sm:w-2/3 h-80 mb-4">
          <ButonRenderLink
            text={"RESOLUCIÓN 2109 DE 2019"}
            url={
              "https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Resolucion/30042047"
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentNorm;
