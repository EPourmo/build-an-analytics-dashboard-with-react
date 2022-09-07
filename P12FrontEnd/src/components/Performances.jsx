import { getUserPerformance } from "../data/userInformation";
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

  const styleLineChart = {
    width: "258px",
    height: "263px",
    backgroundColor: "#282D30",
    borderRadius: "5px",
  };

  return (
    <div className="radar-container" style={styleLineChart}>
      <RadarChartUI radarData={userPerformance} />
    </div>
  );
}
