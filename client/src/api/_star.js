import axios from "axios";
import urls from "./_urls";

export default {
  postStar(token, data) {
    const axiosInstanceStar = axios.create({
      baseURL: urls.STAR_URL,
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json"
      }
    });
    return axiosInstanceStar({
      method: "post",
      data: data
    });
  },
  getStarByUserAndMuseum(userId, museumId) {
    let finalURL = `${urls.STAR_URL}?museum=${museumId}&user=${userId}`;
    return axios.get(finalURL);
  }
};
