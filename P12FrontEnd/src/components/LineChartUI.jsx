import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

export default function LineChartUI({ dataLine }) {
  function dayOfWeek(dayIndex) {
    if (dayIndex) return ["L", "M", "M", "J", "V", "S", "D"][dayIndex - 1];
  }

  const CustomizedAxisTick = (props) => {
    const { x, y, stroke, payload } = props;
    const dayNumber = payload.value;
    const dayStr = dayOfWeek(dayNumber);

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} fill="#FFF" fontSize={12} opacity={0.6}>
          {dayStr}
        </text>
      </g>
    );
  };

  const renderLegend = () => {
    return <p>Durée moyenne des sessions</p>;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div>
          <p className="text-center p-1.5 text-[8px]">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomCursor = (props) => {
    const { y, width } = props;
    return (
      <Rectangle
        fill="rgb(0,0,0,0.1 )"
        stroke="rgb(0,0,0,0.1 )"
        x={props.points[0].x}
        y={y}
        width={width}
        height={500}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={dataLine}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={CustomizedAxisTick}
          height={45}
          padding={{ left: 15, right: 15 }}
        />
        <YAxis hide={true} />
        <Tooltip
          cursor={<CustomCursor />}
          content={CustomTooltip}
          wrapperStyle={{
            width: 39,
            height: 25,
            backgroundColor: "#FFF",
            outline: "none",
          }}
        />
        <Legend
          align="left"
          verticalAlign="top"
          content={renderLegend}
          wrapperStyle={{
            top: 0,
            width: 150,
            height: 48,
            padding: 0,
            marginTop: 24,
            marginLeft: 34,
            fontSize: 15,
            opacity: 0.5,
            color: "#FFF",
          }}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          activeDot={{
            stroke: "#fff",
            strokeWidth: 5,
            r: 4,
            strokeOpacity: 0.4,
          }}
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
