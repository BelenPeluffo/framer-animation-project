import { motion } from "framer-motion";
import "../assets/styles.css";

const FirstMotionComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="framer-div"
      whileHover={{
        scale: [1, 1.05, 1],
        // duration: 0.25,
        transition: {
        //   duration: 0.5,
          type: "keyframes",
          repeat: Infinity,
          delay: 0.25,
          duration: 1,
        },
      }}
    >
      <h1 className="title">This is where it all starts.</h1>
    </motion.div>
  );
};

export default FirstMotionComponent;
