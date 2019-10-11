import axios from "axios";
import urls from "./_urls";

export default {
  postLoginCredentials(userName, password) {
    return axios.post(urls.LOGIN_USER_URL, {
      username: userName,
      password: password
    });
  },
  postUserRegistration(username, email, password1, password2) {
    let data = {
      username: username,
      email: email,
      password1: password1,
      password2: password2
    };
    return axios.post(urls.REGISTRATION_USER_URL, data);
  },
  refreshToken(oldToken) {
    let data = { token: oldToken };
    return axios.post(urls.REFRESH_TOKEN_URL, data);
  },
  getUserPersonalInfo(token) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    };
    return axios.get(urls.USER_URL, { headers: headers });
  },
  getUserData(userId) {
    let finalURL = `${urls.USER_DATA_URL}?${userId}/`;
    return axios.get(finalURL);
  }
};
