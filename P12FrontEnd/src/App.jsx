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
      <div className="top-32 left-36 right-[27px] absolute">
        <div className=" w-full h-full m-auto max-w-[1126px]">
          <Welcome name="Thomas" />
          <div className="flex flex-col mt-16 justify-between items-center xl:flex-row">
            <div className="w-full font-roboto order-1 font-medium xl:order-none xl:w-[835px]">
              <Activities userId={userId} />
              <div className="flex justify-between items-center mt-7">
                <Sessions userId={userId} />
                <Performances userId={userId} />
                <Score userId={userId} />
              </div>
            </div>
            <div className="w-full mb-4 xl:mb-0 xl:w-[258px]">
              <InfoCards userId={userId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
