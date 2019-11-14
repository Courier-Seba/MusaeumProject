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
  refreshToken(oldToken) {
    let data = { token: oldToken };
    return axios.post(urls.REFRESH_TOKEN_URL, data);
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
  patchUserFirstName(token, firstName) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    };
    let data = {
      first_name: firstName
    };
    return axios.patch(urls.USER_URL, data, { headers: headers });
  },
  patchUserLastName(token, lastName) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    };
    let data = {
      last_name: lastName
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
  }
};
