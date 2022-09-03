import Icon from "./Icon.jsx";

export default function IconCard({ icon, width, height }) {
  return (
    <div className="w-[64px] h-[64px] bg-white rounded-[6px] flex items-center justify-center">
      <Icon icon={icon} width={width} height={height} color="#FF0101" />
    </div>
  );
}
