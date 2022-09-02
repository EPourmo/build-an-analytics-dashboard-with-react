import Icon from "./Icon.jsx";

export default function InfoCard(props) {
  const { icon, width, height, color, quantity, dataName } = props;
  return (
    <div className="w-[258px] h-[124px] bg-grey rounded-[5px]">
      <div>
        <Icon icon={icon} width={width} height={height} color={color} />
      </div>
      <div>
        <p>{quantity}</p>
        <p>{dataName}</p>
      </div>
    </div>
  );
}
