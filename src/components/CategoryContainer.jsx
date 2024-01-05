import { PropTypes } from "prop-types";
import FirstMotionComponent from "./FirstMotionComponent";
import { useEffect, useState } from "react";

const ItemsContainer = ({ category, size }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items data
    const response = [{ name: "Soyeon" }];
    setItems(response);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ height: "30%" }}>{category}</div>
      <div style={{ height: "70%" }}>
        {items.map((item) => (
          <FirstMotionComponent key={item.name} text={item.name} size="small" />
        ))}
      </div>
    </div>
  );
};

const containerSizes = ["page", "section"];

ItemsContainer.propTypes = {
  category: PropTypes.string.required,
  size: PropTypes.oneOf(containerSizes).string,
};

export default ItemsContainer;
