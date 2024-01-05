import { PropTypes } from "prop-types";
import FirstMotionComponent from "./FirstMotionComponent";
import { useEffect, useState } from "react";

const CategoryContainer = ({ category }) => {
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
          <FirstMotionComponent key={item.name} text={item.name} />
        ))}
      </div>
    </div>
  );
};

CategoryContainer.propTypes = {
  category: PropTypes.string.required,
};

export default CategoryContainer;
