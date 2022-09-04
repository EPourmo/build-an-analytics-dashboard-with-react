import { useState, useEffect } from "react";
import InfoCards from "./components/InfoCards.jsx";
import Activities from "./components/Activities.jsx";
import Sessions from "./components/Sessions.jsx";
import Performances from "./components/Performances.jsx";
import Welcome from "./components/Welcome.jsx";
import Score from "./components/Score.jsx";

function App() {
  const userId = 12;

  return (
    <div>
      {/* <Activities userId={userId} />
      <Sessions userId={userId} />
      <Performances userId={userId} /> */}
      {/* <Welcome name="Thomas" /> */}
      {/* <InfoCards userId={userId} /> */}
      <Score userId={userId} />
    </div>
  );
}

export default App;
