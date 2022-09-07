import Icon from "./Icon.jsx";

export default function InfoCard(props) {
  const { icon, width, height, color, quantity, dataName, bgColor } = props;

  const style = {
    backgroundColor: bgColor,
  };

  return (
    <div className="w-[200px] h-[124px] bg-grey rounded-[5px] font-roboto p-4 flex items-center shadow-boxSha xl:w-[258px] xl:p-8">
      <div
        className="w-[60px] h-[60px] rounded-[6px] z-0 flex justify-center items-center mr-4 xl:mr-6"
        style={style}
      >
        <Icon
          icon={icon}
          width={width}
          height={height}
          fill={color}
          color={color}
        />
      </div>
      <div>
        <p className="font-bold text-darkGrey text-xl">{quantity}</p>
        <p className=" text-lightGrey text-sm font-medium">{dataName}</p>
      </div>
    </div>
  );
}
