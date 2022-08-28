import { getUserActivity } from "../data/userInformation";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Activity from "../models/Activity";

export default function BarChartUI({ userId }) {
  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserActivity(userId);
      setUserActivity(data);
    };

    fetchData().catch(console.error);
  }, [userId]);

  if (!userActivity) return <div>Loading...</div>;

  return (
    <BarChart
      width={702}
      height={145}
      data={userActivity.sessions}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      {/* tickFormatter={monthTickFormatter} */}
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        // interval={0}
        //   tick={renderQuarterTick}
        height={1}
        // type="number"
        // domain={[4.5, 13.5]}
        // scale="band"
        // xAxisId="quarter"
      />
      {/* <YAxis dataKey="kilogram" orientation="right" /> */}
      {/* <YAxis type="number" domain={[0, 80]} /> */}
      {/* <YAxis yAxisId="right" orientation="right" /> */}

      <YAxis yAxisId="left" orientation="left" axisLine={false} tick={false} />
      <YAxis
        yAxisId="right"
        orientation="right"
        stroke="#9B9EAC"
        domain={[75, 81]}
        tickCount={8}
        axisLine={false}
      />

      <Tooltip />
      {/* <Legend /> */}
      <Bar
        dataKey="kilogram"
        barSize={7}
        fill="#282D30"
        radius={[3, 3, 0, 0]}
        yAxisId="right"
      />
      <Bar
        dataKey="calories"
        barSize={7}
        fill="#E60000"
        radius={[3, 3, 0, 0]}
        yAxisId="left"
      />
    </BarChart>
  );
}
