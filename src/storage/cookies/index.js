import Cookie from "js-cookie";

const cookie = {

// Set actions

  setRefreshToken(token) {
    Cookie.set("refresh", token, {
      secture: process.env.SECURE_COOKIE,
      expires: 7,
      sameSite: "strict"
    })
  },

  setUserId(id) {
    Cookie.set("userId", id, {
      secture: process.env.SECURE_COOKIE,
      expires: 7,
      sameSite: "strict"
    })
  },

  // Get actions

  getUserId() {
    return Cookie.get("userId")
  }

// Delete actions


}

export default cookie;
// TODO: replace "" names with constants
