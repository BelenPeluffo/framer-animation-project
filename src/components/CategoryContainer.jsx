import { PropTypes } from "prop-types";
import FirstMotionComponent from "./FirstMotionComponent";

const ItemsContainer = ({ title, items }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {title && <div style={{ height: "30%" }}>{title}</div>}
      <div style={{ height: "70%", display: "flex", gap: 10 }}>
        {items.map((item) => (
          <FirstMotionComponent
            key={item.name}
            text={item.name} // this prop will be deleted
            item={item}
            size="small"
          />
        ))}
      </div>
    </div>
  );
};

// const containerSizes = ["page", "section"];

ItemsContainer.propTypes = {
  title: PropTypes.string.required,
  // size: PropTypes.oneOf(containerSizes).string,
  items: PropTypes.array.required,
};

export default ItemsContainer;
