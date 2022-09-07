import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import PropTypes from "prop-types";
export default function RadarChartUI({ radarData }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="73%"
        innerRadius={15}
        data={radarData}
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
        {/* <Tooltip /> */}
        <Radar
          dataKey="value"
          stroke="rgba(255, 1, 1, 0.7)"
          fill="rgba(255, 1, 1, 0.7)"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

RadarChartUI.propTypes = {
  radarData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.string.isRequired,
    })
  ).isRequired,
};
