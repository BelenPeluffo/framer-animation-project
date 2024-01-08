import { PropTypes } from "prop-types";

const IdentityMiniCard = ({ item }) => {
  return <div className="identity-card">{item.name}</div>;
};

IdentityMiniCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.required,
    type: PropTypes.string.required,
    id: PropTypes.number.required,
  }).required,
};

export default IdentityMiniCard;
