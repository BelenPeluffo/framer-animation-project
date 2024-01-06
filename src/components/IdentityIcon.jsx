import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";

const IdentityIcon = ({ size, item }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/${item.type == "group" ? "groups" : "idols"}/${item.id}`);
  };

  return (
    <motion.div
      className={`item-circle ${size}`}
      whileHover={{
        scale: [1, 1.05, 1], // this exact succession of values is what garantees that the motion will be like the object is breathing instead of beating, like a heart.
        transition: {
          type: "keyframes",
          repeat: Infinity,
          delay: 0.25,
          duration: 1,
        },
      }}
      onClick={handleNavigation}
    >
      {/* Here we could add a Link element instead, so that the URL would be shown on the browser when hovering over */}
      <div className={size === "big" ? "title" : "text"}>{item.name}</div>
    </motion.div>
  );
};

IdentityIcon.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  item: PropTypes.shape({
    name: PropTypes.string.required,
    type: PropTypes.string.required,
    id: PropTypes.number.required,
  }).required,
};

export default IdentityIcon;
