import { motion } from "framer-motion";

const Fade = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}      // Start from opacity 0
      animate={{ opacity: 1 }}      // Animate to opacity 1 (fade in)
      exit={{ opacity: 0 }}         // Optionally, set exit to fade out
      transition={{ duration: 1 }}  // Duration of the fade animation
    >
      {children}
    </motion.div>
  );
};

export default Fade;
