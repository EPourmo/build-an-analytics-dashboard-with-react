import { useState, useEffect } from "react";
import InfoCard from "./components/InfoCard.jsx";
import BarChartUI from "./components/BarChartUI.jsx";
import LineChartUI from "./components/LineChartUI.jsx";

function App() {
  const userId = 12;

  // const styleChart = {
  //   width: "835px",
  //   height: "320px",
  //   backgroundColor: "#FBFBFB",
  // };

  const styleLineChart = {
    width: "258px",
    height: "263px",
    backgroundColor: "#FF0000",
    borderRadius: "5px",
  };

  return (
    <div className="App">
      {/* <InfoCard userId={userId} /> */}
      {/* <div className="chart-container" style={styleChart}>
        <BarChartUI userId={userId} />
      </div> */}
      <div className="session-container" style={styleLineChart}>
        <LineChartUI />
      </div>
    </div>
  );
}

export default App;
