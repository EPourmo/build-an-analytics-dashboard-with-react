import { useState, useEffect } from "react";
import InfoCard from "./components/InfoCard.jsx";
import BarChartUI from "./components/BarChartUI.jsx";

function App() {
  const userId = 12;

  const style = {
    width: "835px",
    height: "320px",
    backgroundColor: "#FBFBFB",
  };
  return (
    <div className="App">
      {/* <InfoCard userId={userId} /> */}
      <div className="chart-container" style={style}>
        <BarChartUI userId={userId} />
      </div>
    </div>
  );
}

export default App;
