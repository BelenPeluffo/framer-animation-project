import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";
import IdentityMiniCard from "./IdentityMiniCard";
import { useState } from "react";
import { usePopper } from "react-popper";

const IdentityIcon = ({ size, item }) => {
  const navigate = useNavigate();
  const [identityCircle, setIdentityCircle] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const { styles, attributes } = usePopper(identityCircle, tooltip);

  const handleNavigation = () => {
    navigate(`/${item.type == "group" ? "groups" : "idols"}/${item.id}`);
  };

  return (
    <div onMouseEnter={() => setShowTooltip(true)}>
      <motion.div
        ref={setIdentityCircle}
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
      <div
        ref={setTooltip}
        style={(styles.popper, { display: showTooltip })}
        {...attributes.popper}
      >
        <IdentityMiniCard item={item} />
      </div>
    </div>
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
