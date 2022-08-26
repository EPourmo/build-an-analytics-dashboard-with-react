import { useState, useEffect } from "react";
import { getUserMainInfo } from "./data/userInformation";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const userId = 12;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserMainInfo(userId);
      setUserInfo(data);
    };

    fetchData().catch(console.error);
    console.log("test");
  }, [userId]);

  if (!userInfo) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>{userInfo.score}</h1>
      <p>{userInfo.calorie}</p>
    </div>
  );
}

export default App;

// useEffect(() => {
//   const fetchData = async () => {
//     const testData = await getUserMainInfo();
//     // console.log(testData.name);
//     setUserInfo(testData);
//   };
//   fetchData();
// }, []);
