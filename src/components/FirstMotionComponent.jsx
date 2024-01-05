import { motion } from "framer-motion";
import "../assets/styles.css";

const FirstMotionComponent = ({text}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="framer-div"
      whileHover={{
        scale: [1, 1.05, 1], // this exact succession of values is what garantees that the motion will be like the object is breathing instead of beating, like a heart.
        transition: {
          type: "keyframes",
          repeat: Infinity,
          delay: 0.25,
          duration: 1,
        },
      }}
    >
      <h1 className="title">{text}</h1>
    </motion.div>
  );
};

export default FirstMotionComponent;
