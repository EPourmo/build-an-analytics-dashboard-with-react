import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

export default function RadialBarChartUI({ dataScore }) {
  function renderLegend(props) {
    const score = props.payload[2].payload.score;

    return (
      <div className="w-24 text-center ">
        <p className="text-darkGrey text-[26px] font-bold">{score}%</p>
        <p className="text-lightGrey text-base font-medium">
          de votre objectif
        </p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={160} height={160}>
        <Pie
          data={[
            {
              score: 100,
              fill: "#FFFFFF",
            },
          ]}
          dataKey="score"
          cx="50%"
          cy="50%"
          outerRadius={90}
        />
        <Pie
          data={dataScore}
          dataKey="score"
          innerRadius={90}
          outerRadius={100}
          startAngle={-170}
          endAngle={450}
        >
          {dataScore.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              stroke={entry.fill}
              fill={entry.fill}
              cornerRadius="50%"
            />
          ))}
        </Pie>
        <Legend
          verticalAlign="middle"
          layout="vertical"
          content={renderLegend}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

RadialBarChartUI.propTypes = {
  dataScore: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired,
      fill: PropTypes.string.isRequired,
    })
  ).isRequired,
};
