import { motion } from "framer-motion";
import "../assets/styles.css";

const FirstMotionComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="framer-div"
    >
      <h1 className="title">This is where it all starts.</h1>
    </motion.div>
  );
};

export default FirstMotionComponent;
