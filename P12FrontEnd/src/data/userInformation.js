import User from "../models/User";
import Activity from "../models/Activity";

async function getUserMainInfo(id) {
  const res = await fetch(`http://localhost:3000/user/${id}`);
  const data = await res.json();
  return new User(
    data.data.userInfos.firstName,
    data.data.todayScore,
    data.data.keyData
  );
}

async function getUserActivity(id) {
  const res = await fetch(`http://localhost:3000/user/${id}/activity`);
  const data = await res.json();
  return new Activity(data.data.sessions);
}

export { getUserMainInfo, getUserActivity };
