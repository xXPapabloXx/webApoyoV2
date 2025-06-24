import { motion } from "framer-motion";

const ItemCard = ({ title, description, image, IconComponent }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-4 rounded-lg shadow shadow-purple-400 bg-slate-900/40 text-white flex flex-col items-center gap-2 text-center"
    >
      {image ? (
        <img src={image} alt={title} className="w-16 h-16 object-contain" />
      ) : IconComponent ? (
        <IconComponent className="w-8 h-8 text-purple-400" />
      ) : null}
      <h3 className="text-md font-semibold">{title}</h3>
      {description && <p className="text-sm text-gray-300">{description}</p>}
    </motion.div>
  );
};

export default ItemCard;
