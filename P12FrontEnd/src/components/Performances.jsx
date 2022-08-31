import { getUserPerformance } from "../data/userInformation";
import { useState, useEffect } from "react";
import RadarChartUI from "./RadarChartUI";

export default function Performances({ userId }) {
  const [userPerformance, setUserPerformanceo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserPerformance(userId);
      setUserPerformanceo(data.getOrganizedData());
    };

    fetchData().catch(console.error);
  }, [userId]);

  if (!userPerformance) return <div>Loading...</div>;

  const data = [
    {
      value: 90,
      kind: "Intensité",
    },
    {
      value: 200,
      kind: "Vitesse",
    },
    {
      value: 50,
      kind: "Force",
    },
    {
      value: 140,
      kind: "Endurance",
    },
    {
      value: 120,
      kind: "Energie",
    },
    {
      value: 80,
      kind: "Cardio",
    },
  ];

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
