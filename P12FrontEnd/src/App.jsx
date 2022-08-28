import { useState, useEffect } from "react";
import InfoCard from "./components/InfoCard.jsx";
import BarChartUI from "./components/BarChartUI.jsx";
import ExampleCharts from "./components/ExampleCharts.jsx";

function App() {
  const userId = 12;

  return (
    <div className="App">
      {/* <InfoCard userId={userId} /> */}
      <BarChartUI userId={userId} />
      {/* <ExampleCharts /> */}
    </div>
  );
}

export default App;
