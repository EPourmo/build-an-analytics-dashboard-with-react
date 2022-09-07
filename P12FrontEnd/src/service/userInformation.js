import User from "../models/User";
import Activity from "../models/Activity";
import Performance from "../models/Performance";
import Sessions from "../models/Sessions";

/**
 * Get new instance of user main data
 * @param {Number} id id of the user
 * @returns {Object} new instance
 */
async function getUserMainInfo(id) {
  const res = await fetch(`http://localhost:3000/user/${id}`);
  const data = await res.json();
  return new User(
    data.data.userInfos.firstName,
    data.data.todayScore,
    data.data.keyData
  );
}

/**
 * Get new instance of user activity data
 * @param {Number} id id of the user
 * @returns {Object} new instance
 */
async function getUserActivity(id) {
  const res = await fetch(`http://localhost:3000/user/${id}/activity`);
  const data = await res.json();
  return new Activity(data.data.sessions);
}

/**
 * Get new instance of user performance data
 * @param {Number} id id of the user
 * @returns {Object} new instance
 */
async function getUserPerformance(id) {
  const res = await fetch(`http://localhost:3000/user/${id}/performance`);
  const data = await res.json();
  return new Performance(data.data.kind, data.data.data);
}

/**
 * Get new instance of user sessions data
 * @param {Number} id id of the user
 * @returns {Object} new instance
 */
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
