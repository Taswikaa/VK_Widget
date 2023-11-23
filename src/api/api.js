import fetchJsonp from "fetch-jsonp";
import { ACESS_TOKEN, API_VERSION, BASE_URL, COUNT } from "./constans";

class Api {
  constructor(url, token, version, count) {
    this.url = url;
    this.token = token;
    this.version = version;
    this.count = count;
    this.baseUrl = `${this.url}&access_token=${this.token}&v=${this.version}&count=${this.count}`;
  }

  getGroupId(id) {
    this.id = id;
  }

  getPosts(offset) {
    return fetchJsonp(`${this.baseUrl}&owner_id=-${this.id}&offset=${offset}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
  }
}

export const api = new Api(BASE_URL, ACESS_TOKEN, API_VERSION, COUNT);