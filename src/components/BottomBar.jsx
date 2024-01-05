import { PropTypes } from "prop-types";

const BottomBar = ({ actions }) => {
  return <div className="bottom-bar">{actions.map((action) => action)}</div>;
};

BottomBar.propTypes = {
  actions: PropTypes.array,
};

export default BottomBar;
