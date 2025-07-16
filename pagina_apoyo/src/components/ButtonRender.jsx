import { motion } from "framer-motion";

const ButtonRender = ({
  setCurrentView,
  view,
  text,
 image,
}) => {
  return (
    <motion.button
      onClick={() => setCurrentView(view)}
      whileHover={{
        scale: 1.04,
        backgroundColor: "rgba(200,200,200,0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-x-hidden items-center cursor-pointer shadow-md shadow-secundario/50 p-4 rounded-3xl"
    >
      <div className="h-60 bg-radial to-70%">
        <img src={image} alt={view} className="h-60 object-cover mx-auto"/>
      </div>
      <h1 className="text-texto text-2xl mb-3 p-2 mt-2 font-bold  shadow-md shadow-primario w-1/2 ml-auto mr-auto ">
        {text}
      </h1>
    </motion.button>
  );
};

export default ButtonRender;
