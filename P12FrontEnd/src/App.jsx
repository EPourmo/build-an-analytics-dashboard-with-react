import { useState, useEffect } from "react";
import InfoCard from "./components/InfoCard.jsx";
import LineChartUI from "./components/LineChartUI.jsx";
import RadarChartUI from "./components/RadarChartUI.jsx";
import Activities from "./components/Activities.jsx";
import Sessions from "./components/Sessions.jsx";
import Performances from "./components/Performances.jsx";

function App() {
  const userId = 12;

  return (
    <div className="App">
      <Activities userId={userId} />

      <Sessions userId={userId} />
      <Performances userId={userId} />
    </div>
  );
}

export default App;
