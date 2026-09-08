import { motion } from "framer-motion";

const MotionButton = ({ children, className = "", ...props }) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.15, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.button>
);

export default MotionButton;