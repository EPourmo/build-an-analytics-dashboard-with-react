import { getUserMainInfo } from "../data/userInformation";
import { useState, useEffect } from "react";

export default function Welcome({ userId }) {
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserMainInfo(userId);
      setUserName(data.name);
    };

    fetchData().catch(console.error);
  }, [userId]);

  if (!userName.length) return <div className="loading">Loading...</div>;

  return (
    <div className="font-roboto ">
      <h1 className="font-medium text-5xl mb-10">
        Bonjour <span className="text-red251">{userName}</span>
      </h1>
      <p className="font-normal text-lg	">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
