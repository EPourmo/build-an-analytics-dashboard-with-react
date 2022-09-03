import { getUserPerformance } from "../data/userInformation";
import { useState, useEffect } from "react";
import RadarChartUI from "./RadarChartUI";

export default function Performances({ userId }) {
  const [userPerformance, setUserPerformance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserPerformance(userId);
      setUserPerformance(data.getOrganizedData());
    };

    fetchData().catch(console.error);
  }, [userId]);

  if (!userPerformance.length) return <div>Loading...</div>;

  const styleLineChart = {
    width: "258px",
    height: "263px",
    // backgroundColor: "#FF0000",
    backgroundColor: "#282D30",
    borderRadius: "5px",
  };

  return (
    <div className="radar-container" style={styleLineChart}>
      <RadarChartUI radarData={userPerformance} />
    </div>
  );
}
