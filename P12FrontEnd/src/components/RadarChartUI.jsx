import { getUserPerformance } from "../data/userInformation";
import { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function RadarChartUI({ userId }) {
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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="60%"
        innerRadius={15}
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="#fff"
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: "bold",
          }}
        />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Tooltip />
        <Radar
          dataKey="value"
          stroke="rgba(255, 1, 1, 0.7)"
          fill="rgba(255, 1, 1, 0.7)"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
