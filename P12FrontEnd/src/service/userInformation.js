import User from "../models/User";
import Activity from "../models/Activity";
import Performance from "../models/Performance";
import Sessions from "../models/Sessions";

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

async function getUserPerformance(id) {
  const res = await fetch(`http://localhost:3000/user/${id}/performance`);
  const data = await res.json();
  return new Performance(data.data.kind, data.data.data);
}

async function getUserSessions(id) {
  const res = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
  const data = await res.json();
  return new Sessions(data.data.sessions);
}

export {
  getUserMainInfo,
  getUserActivity,
  getUserPerformance,
  getUserSessions,
};