import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";

const IdentityMiniCard = ({ item }) => {
  return (
    <div className="identity-card">
      <div>
        <Typography variant="h4">{item.name}</Typography>
      </div>
      <div>Holis</div>
      <div>Yas</div>
    </div>
  );
};

IdentityMiniCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.required,
    type: PropTypes.string.required,
    id: PropTypes.number.required,
  }).required,
};

export default IdentityMiniCard;
