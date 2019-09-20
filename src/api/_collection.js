import axios from "axios";
import urls from "./_urls";

export default {
  postCollection(token, data) {
    const axiosInstanceCollection = axios.create({
      baseURL: urls.COLLECTION_URL,
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    return axiosInstanceCollection({
      method: "post",
      data: data
    });
  }
};
