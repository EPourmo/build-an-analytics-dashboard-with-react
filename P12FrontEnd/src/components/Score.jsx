import { getUserMainInfo } from "../service/userInformation";
import { useState, useEffect } from "react";
import RadialBarChartUI from "./RadialBarChartUI";
import Loading from "./Loading";

export default function Score({ userId }) {
  const [score, setScore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserMainInfo(userId);
      setScore(data.userScore());
    };

    fetchData().catch(console.error);
  }, [userId]);

  if (!score.length) return <Loading />;

  return (
    <div className="w-[258px] h-[263px] bg-grey font-roboto relative shadow-boxSha rounded-[5px]">
      <p className="absolute left-6 top-5 font-medium text-[15px]">Score</p>
      <RadialBarChartUI dataScore={score} />
    </div>
  );
}
