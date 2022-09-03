import { useState, useEffect } from "react";
import InfoCards from "./components/InfoCards.jsx";
import Activities from "./components/Activities.jsx";
import Sessions from "./components/Sessions.jsx";
import Performances from "./components/Performances.jsx";

function App() {
  const userId = 18;

  return (
    <div>
      {/* <Activities userId={userId} />
      <Sessions userId={userId} />
      <Performances userId={userId} /> */}

      {/* <InfoCards userId={userId} /> */}
    </div>
  );
}

export default App;
