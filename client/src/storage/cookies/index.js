import Cookie from "js-cookie";

const REFRESHTOKEN = "refresh";
const USERID = "userId";

const cookie = {
  // Set actions

  setRefreshToken(token) {
    Cookie.set(REFRESHTOKEN, token, {
      secture: process.env.SECURE_COOKIE,
      expires: 7,
      sameSite: "strict"
    });
  },

  setUserId(id) {
    Cookie.set(USERID, id, {
      secture: process.env.SECURE_COOKIE,
      expires: 7,
      sameSite: "strict"
    });
  },

  // Get actions

  getUserId() {
    return Cookie.get(USERID);
  },

  getRefreshToken() {
    return Cookie.get(REFRESHTOKEN);
  },

  // Delete actions
  removeUserRefreshToken() {
    return Cookie.remove(REFRESHTOKEN);
  },
  removeUserId() {
    return Cookie.remove(USERID);
  }
};

export default cookie;
// TODO: replace "" names with constants
