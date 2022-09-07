import { getUserSessions } from "../service/userInformation";
import { useState, useEffect } from "react";
import LineChartUI from "./LineChartUI.jsx";
import Loading from "./Loading";

export default function Sessions({ userId }) {
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserSessions(userId);
      setUserSessions(data.sessions);
    };
    fetchData().catch(console.error);
  }, [userId]);

  if (!userSessions.length) return <Loading />;

  return (
    <div className="w-[258px] h-[263px] bg-red255 rounded-[5px] shadow-boxSha">
      <LineChartUI dataLine={userSessions} />
    </div>
  );
}
