import { PropTypes } from "prop-types";
import IdentityIcon from "./IdentityIcon";

const ItemsContainer = ({ title, items, img }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {title && <div style={{ height: "30%" }}>{title}</div>}
      {img && (
        <div
          style={{
            height: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            marginTop: 10,
            marginBottom: 10
          }}
        >
          <img className="item-circle small" src={img} />
        </div>
      )}
      <div style={{ height: "70%", display: "flex", gap: 10 }}>
        {items.map((item) => (
          <IdentityIcon key={item.name} item={item} size="small" />
        ))}
      </div>
    </div>
  );
};

// const containerSizes = ["page", "section"];

ItemsContainer.propTypes = {
  title: PropTypes.string,
  // size: PropTypes.oneOf(containerSizes).string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.required,
      type: PropTypes.string.required,
      id: PropTypes.number.required,
    })
  ).required,
  img: PropTypes.string,
};

export default ItemsContainer;
