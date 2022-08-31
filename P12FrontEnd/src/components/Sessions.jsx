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

  const sessions = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ];

  if (!userSessions) return <div className="loading">Loading...</div>;

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
