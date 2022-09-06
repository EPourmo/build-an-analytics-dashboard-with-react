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

export default function BarChartUI({ barData }) {
  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="text-white font-medium text-[7px] h-full relative flex justify-center">
          <p className="absolute top-1 ">{`${payload[0].payload.kilogram}kg`}</p>
          <p className="absolute bottom-1">{`${payload[0].payload.calories}Kcal`}</p>
        </div>
      );
    }
    return null;
  }

  const CustomizedAxisTick = (props) => {
    const { x, y, stroke, payload } = props;
    const str = payload.value;
    const date = new Date(str);
    const day = date.getDate();

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#9B9EAC"
          className="font-medium font-roboto text-sm"
        >
          {day}
        </text>
      </g>
    );
  };

  function CustomLegend() {
    return (
      <ul className="flex list-disc ">
        <li className="mr-8 text-darkGrey text-xl">
          <span className="text-lightGrey text-sm font-medium">Poids (kg)</span>
        </li>
        <li className="text-xl text-red230">
          <span className="text-lightGrey text-sm font-medium">
            Calories brûlées (kCal)
          </span>
        </li>
      </ul>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={barData}
        barGap={8}
        margin={{
          top: 112.5,
          right: 29,
          left: 43,
          bottom: 23,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          tick={CustomizedAxisTick}
          stroke="#9B9EAC"
          axisLine={true}
          tickLine={false}
          tickSize={16}
          interval={0}
        />

        <XAxis dataKey="day" />

        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#9B9EAC"
          domain={["dataMin - 1", "dataMax + 1 "]}
          tickCount={3}
          axisLine={false}
          tickLine={false}
          interval="preserveStartEnd"
          type="number"
          tickSize={43}
          tick={{ fontSize: 14, fontWeight: 500 }}
        />
        <YAxis yAxisId="left" orientation="left" hide={true} />
        <Tooltip
          wrapperStyle={{
            width: 39,
            height: 63,
            backgroundColor: "#E60000",
            color: "#FFFFFF",
            outline: "none",
            padding: 7,
          }}
          content={<CustomTooltip />}
        />
        <Legend
          content={<CustomLegend />}
          layout="verticale"
          align="right"
          verticalAlign="top"
          wrapperStyle={{
            top: "17px",
            right: "30px",
          }}
        />
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
    </ResponsiveContainer>
  );
}
