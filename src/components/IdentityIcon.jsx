import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";
import IdentityMiniCard from "./IdentityMiniCard";
import { createPopper } from "@popperjs/core";
import { toggleTooltipVisibility } from "../helpers/tooltipActions";
import { useEffect } from "react";

const IdentityIcon = ({ size, item }) => {
  const navigate = useNavigate();
  const iconId = `${item.type}-${item.id}`;
  console.log("iconId?", iconId);
  const identityCircle = document.querySelector(`#${iconId}`);
  const tooltip = document.querySelector(`#tooltip-${iconId}`);

  const popperInstance = createPopper(identityCircle, tooltip);

  const showEvents = ["mouseenter", "focus", "hover"];
  const hideEvents = ["mouseleave", "blur"];

  const handleShow = () => {
    toggleTooltipVisibility(tooltip, popperInstance, "show");
  };

  const handleHide = () => {
    toggleTooltipVisibility(tooltip, popperInstance, "hide");
  };

  showEvents.forEach((event) => {
    identityCircle && identityCircle.addEventListener(event, handleShow);
  });

  hideEvents.forEach((event) => {
    identityCircle && identityCircle.addEventListener(event, handleHide);
  });

  const handleNavigation = () => {
    navigate(`/${item.type == "group" ? "groups" : "idols"}/${item.id}`);
  };

  useEffect(() => {
    console.log("identityCircle?", identityCircle);
    console.log("tooltip?", tooltip);
    console.log("popperInstance?", popperInstance);
  }, [identityCircle, tooltip]);

  return (
    <>
      <motion.div
        id={iconId}
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
      <div id={`tooltip-${iconId}`} className="tooltip" role="tooltip">
        <IdentityMiniCard item={item} />
      </div>
    </>
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
