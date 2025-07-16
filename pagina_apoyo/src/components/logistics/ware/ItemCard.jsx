import { motion } from "framer-motion";

const ItemCard = ({ title, description, image, IconComponent }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-4 rounded-lg shadow shadow-acento bg-secundario/5 hover:bg-secundario/20  text-texto flex flex-col items-center gap-2 text-center"
    >
      {image ? (
        <img src={image} alt={title} className="w-16 h-16 object-contain" />
      ) : IconComponent ? (
        <IconComponent className="w-8 h-8 text-secundario" />
      ) : null}
      <h3 className="text-md font-semibold">{title}</h3>
      {description && <p className="text-sm text-texto">{description}</p>}
    </motion.div>
  );
};

export default ItemCard;
