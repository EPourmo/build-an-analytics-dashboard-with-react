// Icon.jsx
import IcoMoon from "react-icomoon";
import iconSet from "../icon/selection.json";
import PropTypes from "prop-types";

const Icon = (props) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;

Icon.propTypes = {
  props: PropTypes.node,
};
