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
  }
};
