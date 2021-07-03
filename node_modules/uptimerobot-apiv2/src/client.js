import Axios from "axios";
import qs from "querystring";
export default class Client {
  constructor(key) {
    this.requestBaseData = {
      api_key: key,
      format: "json"
    };

    this.axios = Axios.create({
      baseURL: "https://api.uptimerobot.com/v2",
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  }

  request(uri, params = {}) {
    return this.axios
      .post(uri, qs.stringify(Object.assign(params, this.requestBaseData)))
      .then(respones => {
        const { data } = respones;
        if (data["stat"] === "ok") {
          return data;
        } else {
          return Promise.reject(data);
        }
      });
  }
}
