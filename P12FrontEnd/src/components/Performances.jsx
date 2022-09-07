import { getUserPerformance } from "../service/userInformation";
import { useState, useEffect } from "react";
import RadarChartUI from "./RadarChartUI";
import Loading from "./Loading";

export default function Performances({ userId }) {
  const [userPerformance, setUserPerformance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserPerformance(userId);
      setUserPerformance(data.getOrganizedData());
    };

    fetchData().catch(console.error);
  }, [userId]);

  if (!userPerformance.length) return <Loading />;

  return (
    <div className="w-[258px] h-[263px] bg-darkGrey rounded-[5px]">
      <RadarChartUI radarData={userPerformance} />
    </div>
  );
}
