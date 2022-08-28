import { getUserMainInfo } from "../data/userInformation";
import { useState, useEffect } from "react";

export default function InfoCard({ userId }) {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserMainInfo(userId);
      setUserInfo(data);
    };

    fetchData().catch(console.error);
  }, [userId]);

  if (!userInfo) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>{userInfo.score}</h1>
      <p>{userInfo.calorie}</p>
    </div>
  );
}
