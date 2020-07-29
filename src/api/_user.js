import axios from "axios";
import urls from "./_urls";

export default {
  refreshToken(refreshJwt) {
    let data = { refresh: refreshJwt };
    return axios.post(urls.REFRESH_TOKEN, data);
  },
  getUserPersonalData(token) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    };
    return axios.get(urls.USER_URL, { headers: headers });
  },
  getUserProfileData(userId) {
    let finalURL = `${urls.USER_DATA_URL}${userId}/`;
    return axios.get(finalURL);
  },
  patchUserFirstName(token, payload) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    };
    let data = {
      first_name: payload
    };
    return axios.patch(urls.USER_URL, data, { headers: headers });
  },
  patchUserLastName(token, payload) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    };
    let data = {
      last_name: payload
    };
    return axios.patch(urls.USER_URL, data, { headers: headers });
  },
  patchUserProfilePicture(token, userId, data) {
    let finalURL = `${urls.USER_DATA_URL}${userId}/`;
    const headers = {
      Authorization: `JWT ${token}`,
      "Content-type": "multipart/form-data"
    };
    return axios.patch(finalURL, data, { headers: headers });
  },
  postLoginCredentials(username, password) {
    return axios.post(urls.GET_TOKEN, {
      username: username,
      password: password
    });
  },
  postUserProfile(token, userId) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    };
    let data = {
      user: userId
    };
    return axios.post(urls.USER_DATA_URL, data, { headers: headers });
  },
};