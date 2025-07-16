import ModelRender from "../../util/3D/ModelRender";
import { motion } from "framer-motion";
import modeloLogo from "../../assets/models/Logo-draco.glb";
import logo from "../../assets/images/general/logo.png";
import montacarga from "../../assets/images/general/montacarga.png";

const Landing = () => {
  return (
    <div className="w-full mb-6">
      <motion.div
        className="flex flex-col justify-center items-center text-texto min-h-[28rem] px-4 pt-10 md:pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="items-center">
            <div className="w-full max-w-md h-48 sm:h-64 md:h-72 mx-auto">
              <img src={logo} alt="Logo" className="w-2/5 sm:w-3/5 max-h-fit object-cover mx-auto rounded-full shadow-xl shadow-secundario" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
                Apoyo Logístico ZF S.A.S
              </h1>
              <p className="text-base sm:text-lg md:text-3xl font-semibold">
                Proveedor de servicios logísticos
              </p>
            </div>
          </div>

          <div className="w-full mx-auto flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-4xl text-center font-semibold p-3 shadow shadow-secundario mb-3">
              TU CARGA, NUESTRA MISIÓN
            </h3>
            <div className="w-full max-w-md h-48 sm:h-64 md:h-72">
              <img
                src={montacarga}
                alt="montacarga"
                className="w-1/2 mb-3 sm:w-4/6 object-contain mx-auto shadow-xl shadow-secundario/80"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
