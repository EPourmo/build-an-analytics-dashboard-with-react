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
      <NavBar />
      <SideBar />
      <div className="max-w-[1126px] mt-12 mx-auto">
        <Welcome name="Thomas" />
        <div className="flex mt-16 justify-between">
          <div className="w-[835px] font-roboto font-medium">
            <Activities userId={userId} />
            <div className="flex justify-between items-center mt-7">
              <Sessions userId={userId} />
              <Performances userId={userId} />
              <Score userId={userId} />
            </div>
          </div>
          <div>
            <InfoCards userId={userId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
