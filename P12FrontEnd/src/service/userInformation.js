import User from "../models/User";
import Activity from "../models/Activity";
import Performance from "../models/Performance";
import Sessions from "../models/Sessions";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mockedData/mockedData";

/**
 * Get new instance of user main data
 * @param {Number} id id of the user
 * @param {Boolean} isAPI boolean which specifies API data or mocked data
 * @returns {Object} new instance
 */

async function getUserMainInfo(id, isAPI) {
  if (isAPI) {
    const res = await fetch(`http://localhost:3000/user/${id}`);
    const data = await res.json();
    return new User(
      data.data.userInfos.firstName,
      data.data.todayScore,
      data.data.keyData
    );
  } else {
    const userMockedData = USER_MAIN_DATA.filter(
      (userData) => userData.id == id
    );
    return new User(
      userMockedData[0].userInfos.firstName,
      userMockedData[0].todayScore,
      userMockedData[0].keyData
    );
  }
}

/**
 * Get new instance of user activity data
 * @param {Number} id id of the user
 * @param {Boolean} isAPI boolean which specifies API data or mocked data
 * @returns {Object} new instance
 */
async function getUserActivity(id, isAPI) {
  if (isAPI) {
    const res = await fetch(`http://localhost:3000/user/${id}/activity`);
    const data = await res.json();
    return new Activity(data.data.sessions);
  } else {
    const userMockedData = USER_ACTIVITY.filter(
      (userData) => userData.userId == id
    );
    return new Activity(userMockedData[0].sessions);
  }
}

/**
 * Get new instance of user performance data
 * @param {Number} id id of the user
 * @param {Boolean} isAPI boolean which specifies API data or mocked data
 * @returns {Object} new instance
 */
async function getUserPerformance(id, isAPI) {
  if (isAPI) {
    const res = await fetch(`http://localhost:3000/user/${id}/performance`);
    const data = await res.json();
    return new Performance(data.data.kind, data.data.data);
  } else {
    const userMockedData = USER_PERFORMANCE.filter(
      (userData) => userData.userId == id
    );
    return new Performance(userMockedData[0].kind, userMockedData[0].data);
  }
}

/**
 * Get new instance of user sessions data
 * @param {Number} id id of the user
 * @param {Boolean} isAPI boolean which specifies API data or mocked data
 * @returns {Object} new instance
 */
async function getUserSessions(id, isAPI) {
  if (isAPI) {
    const res = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    const data = await res.json();
    return new Sessions(data.data.sessions);
  } else {
    const userMockedData = USER_AVERAGE_SESSIONS.filter(
      (userData) => userData.userId == id
    );
    return new Sessions(userMockedData[0].sessions);
  }
}

export {
  getUserMainInfo,
  getUserActivity,
  getUserPerformance,
  getUserSessions,
};
