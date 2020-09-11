import axios from "axios";
import urls from "./_urls";

export default {
  postStar(token, data) {
    const axiosInstanceStar = axios.create({
      baseURL: urls.STAR_URL,
      headers: {
        Authorization: `JWT ${token}`,
        "content-type": "application/json"
      }
    });
    return axiosInstanceStar({
      method: "post",
      data: data
    });
  }
};
