import { getUserSessions } from "../data/userInformation";
import { useState, useEffect } from "react";
import LineChartUI from "./LineChartUI.jsx";

export default function Sessions({ userId }) {
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserSessions(userId);
      setUserSessions(data.sessions);
    };
    fetchData().catch(console.error);
  }, [userId]);

  if (!userSessions.length) return <div className="loading">Loading...</div>;

  const styleLineChart = {
    width: "258px",
    height: "263px",
    backgroundColor: "#FF0000",
    borderRadius: "5px",
  };

  return (
    <div style={styleLineChart}>
      <LineChartUI dataLine={userSessions} />
    </div>
  );
}
