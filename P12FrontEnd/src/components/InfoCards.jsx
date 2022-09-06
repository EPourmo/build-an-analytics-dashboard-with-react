import { getUserMainInfo } from "../data/userInformation";
import { useState, useEffect } from "react";
import InfoCard from "./InfoCard";

export default function InfoCards({ userId }) {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserMainInfo(userId);
      setUserInfo(data.userDailyAllowances());
    };

    fetchData().catch(console.error);
  }, [userId]);

  if (!userInfo.length) return <div className="loading">Loading...</div>;

  const cards = userInfo.map((item) => {
    return (
      <InfoCard
        key={item.id}
        icon={item.iconName}
        width={item.width}
        height={item.height}
        color={item.color}
        quantity={item.quantity}
        dataName={item.tag}
        bgColor={item.bgColor}
      />
    );
  });

  return (
    <div className="w-full flex justify-between xl:flex-col xl:h-[613px] xl:w-[258px]">
      {cards}
    </div>
  );
}

// h-[613px]
