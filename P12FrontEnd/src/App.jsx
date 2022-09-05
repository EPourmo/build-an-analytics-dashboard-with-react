import { useState, useEffect } from "react";
import InfoCards from "./components/InfoCards.jsx";
import Activities from "./components/Activities.jsx";
import Sessions from "./components/Sessions.jsx";
import Performances from "./components/Performances.jsx";
import Welcome from "./components/Welcome.jsx";
import Score from "./components/Score.jsx";
import NavBar from "./components/NavBar.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {
  const userId = 12;

  return (
    <div className="relative">
      {/* <Activities userId={userId} />
      <Sessions userId={userId} />
      <Performances userId={userId} /> */}

      {/* <InfoCards userId={userId} /> */}
      {/* <Score userId={userId} /> */}

      <NavBar />
      <SideBar />
      <div className="ml-[224px] mt-16">
        <Welcome name="Thomas" />
      </div>
    </div>
  );
}

export default App;
