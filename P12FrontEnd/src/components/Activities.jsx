import { getUserActivity } from "../data/userInformation";
import { useState, useEffect } from "react";
import BarChartUI from "./BarChartUI.jsx";

export default function Activities({ userId }) {
  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserActivity(userId);
      setUserActivity(data.sessions);
    };
    fetchData().catch(console.error);
  }, [userId]);

  const dataMocked = [
    {
      day: "2020-07-01",
      kilogram: 80,
      calories: 240,
    },
    {
      day: "2020-07-02",
      kilogram: 80,
      calories: 220,
    },
    {
      day: "2020-07-03",
      kilogram: 81,
      calories: 280,
    },
    {
      day: "2020-07-04",
      kilogram: 81,
      calories: 290,
    },
    {
      day: "2020-07-05",
      kilogram: 80,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 78,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 76,
      calories: 390,
    },
  ];

  if (!userActivity) return <div className="loading">Loading...</div>;

  const styleChart = {
    width: "835px",
    height: "320px",
    backgroundColor: "#FBFBFB",
  };

  return (
    <div className="chart-container" style={styleChart}>
      {/* <h1 className="activity-title">Activité quotidienne</h1> */}
      <BarChartUI barData={userActivity} />
    </div>
  );
}
