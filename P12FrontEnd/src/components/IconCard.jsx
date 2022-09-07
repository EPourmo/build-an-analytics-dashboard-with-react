import Icon from "./Icon.jsx";
import PropTypes from "prop-types";

export default function IconCard({ icon, width, height }) {
  return (
    <div className="w-[64px] h-[64px] bg-white rounded-[6px] flex items-center justify-center">
      <Icon icon={icon} width={width} height={height} color="#FF0101" />
    </div>
  );
}

IconCard.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
