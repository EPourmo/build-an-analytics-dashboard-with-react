import IconCard from "./IconCard";

export default function SideBar() {
  const iconList = [
    {
      id: 1,
      name: "relax",
      width: 36,
      height: 32,
    },
    {
      id: 2,
      name: "swim",
      width: 32,
      height: 32,
    },
    {
      id: 3,
      name: "bike",
      width: 37.5,
      height: 32,
    },
    {
      id: 4,
      name: "weight",
      width: 32,
      height: 32,
    },
  ];

  const icons = iconList.map((item) => {
    return (
      <IconCard
        key={item.id}
        icon={item.name}
        width={item.width}
        height={item.height}
      />
    );
  });

  return (
    <div className="w-[117px] h-full bg-blackBg shadow-navShadow font-roboto font-medium overflow-hidden flex flex-col justify-between items-center fixed top-0 left-0 z-0">
      <div className="h-[316px] flex flex-col justify-between items-center w-4/6 my-auto">
        {icons}
      </div>
      <p className="text-white text-xs rotate-[270deg] mb-auto w-[138px]">
        Copiryght, SportSee 2020
      </p>
    </div>
  );
}
