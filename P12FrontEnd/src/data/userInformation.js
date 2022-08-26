import User from "../models/User";

async function getUserMainInfo(id) {
  const res = await fetch(`http://localhost:3000/user/${id}`);
  const data = await res.json();
  return new User(
    data.data.userInfos.firstName,
    data.data.todayScore,
    data.data.keyData
  );
}

export { getUserMainInfo };
