import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";
import IdentityMiniCard from "./IdentityMiniCard";
import { Tooltip, styled, tooltipClasses } from "@mui/material";

const IdentityIcon = ({ size, item }) => {
  const navigate = useNavigate();
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ff0000",
      padding: 0,
      width: 150,
      textAlign: "center",
    },
  }));

  const handleNavigation = () => {
    navigate(`/${item.type == "group" ? "groups" : "idols"}/${item.id}`);
  };

  return (
    <CustomTooltip title={<IdentityMiniCard item={item} />}>
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
    </CustomTooltip>

    // </div>
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
