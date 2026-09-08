import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const StaggerItem = ({ children, className = "" }) => (
  <motion.div className={className} variants={itemVariants}>
    {children}
  </motion.div>
);

export default StaggerItem;