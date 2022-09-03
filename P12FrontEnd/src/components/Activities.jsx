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

  if (!userActivity.length) return <div className="loading">Loading...</div>;

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
