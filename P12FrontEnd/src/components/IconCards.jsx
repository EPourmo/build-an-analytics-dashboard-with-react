import IconCard from "./IconCard";

export default function IconCards() {
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
    <div className="w-[64px] h-[316px] flex flex-col justify-between items-center ">
      {icons}
    </div>
  );
}
