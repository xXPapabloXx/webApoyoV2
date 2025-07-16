import { motion } from "framer-motion";
import ButtonRender from "../ButtonRender";
import cajas from "../../assets/images/general/cajas.png"
import contacto from "../../assets/images/general/contacto.png"

const Buttons = ({ setCurrentView }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4 md:px-8 py-6"
    >
      <ButtonRender
        setCurrentView={setCurrentView}
        view={"log_services"}
        image={cajas}
        text={"Servicios Logísticos"}
      />
      <ButtonRender
        setCurrentView={setCurrentView}
        view={"contact"}
        image={contacto}
        text={"Contacto"}
      />
    </motion.div>
  );
};

export default Buttons;
