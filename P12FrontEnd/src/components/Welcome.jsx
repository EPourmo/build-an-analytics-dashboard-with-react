import { getUserMainInfo } from "../service/userInformation";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import PropTypes from "prop-types";
export default function Welcome({ userId, isAPI }) {
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserMainInfo(userId, isAPI);
      setUserName(data.name);
    };

    fetchData().catch(console.error);
  }, [userId]);

  if (!userName.length) return <Loading />;

  return (
    <div className="font-roboto ">
      <h1 className="font-medium text-5xl mb-10">
        Bonjour <span className="text-red251">{userName}</span>
      </h1>
      <p className="font-normal text-lg	">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

Welcome.propTypes = {
  userId: PropTypes.number.isRequired,
};
