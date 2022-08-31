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
      const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
      };

      return (
        <div className="custom-tooltip" style={style}>
          <p className="label">{`${payload[0].payload.kilogram}kg`}</p>
          <p className="payload">{`${payload[0].payload.calories}Kcal`}</p>
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
        <text x={0} y={0} dy={16} textAnchor="end" fill="#9B9EAC">
          {day}
        </text>
      </g>
    );
  };

  function CustomLegend() {
    const boxStyle = {
      display: "flex",
      listStyleType: "disc",
    };

    const legendWeigth = {
      marginRight: "32px",
      color: "#282D30",
      fontSize: "20px",
    };

    const legendCalories = {
      color: "#E60000",
      fontSize: "20px",
    };

    const spanWeigth = {
      color: "#74798C",
      fontSize: "14px",
    };

    const spanCalories = {
      color: "#74798C",
      fontSize: "14px",
    };

    return (
      <ul className="customized-legend" style={boxStyle}>
        <li className="legend-weigth" style={legendWeigth}>
          <span style={spanWeigth}>Poids (kg)</span>
        </li>
        <li className="legend-calories" style={legendCalories}>
          <span style={spanCalories}> Calories brûlées (kCal)</span>
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
          domain={["dataMin -1", "dataMax +1 "]}
          tickCount={3}
          axisLine={false}
          tickLine={false}
          interval="preserveStartEnd"
          type="number"
          tickSize={43}
        />
        <YAxis yAxisId="left" orientation="left" hide={true} />
        <Tooltip
          wrapperStyle={{
            width: 39,
            height: 63,
            backgroundColor: "#E60000",
            color: "#FFFFFF",
            fontSize: 7,
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
            top: "10px",
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
