import { useState, useEffect } from "react";
import InfoCards from "./components/InfoCards.jsx";
import Activities from "./components/Activities.jsx";
import Sessions from "./components/Sessions.jsx";
import Performances from "./components/Performances.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
  const userId = 18;

  return (
    <div>
      {/* <Activities userId={userId} />
      <Sessions userId={userId} />
      <Performances userId={userId} /> */}
      <Welcome name="Thomas" />
      {/* <InfoCards userId={userId} /> */}
    </div>
  );
}

export default App;
