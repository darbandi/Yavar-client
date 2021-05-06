import axios from "axios";
import qs from "qs";
const path = "http://192.168.1.103:8002";

const get = (address, query, customHeader, cancellation) => {
  if (query) {
    var queryString = qs.stringify(query);
    address = address + "?" + queryString;
  }
  return cancellation
    ? axios.get(path + address, { ...cancellation, ...headers(customHeader) })
    : axios.get(path + address, headers(customHeader));
};
const post = (address, data, customHeader, cancellation) => {
  return cancellation
    ? axios.post(path + address, data, {
        ...cancellation,
        ...headers(customHeader),
      })
    : axios.post(path + address, data, headers(customHeader));
};
const put = (address, data, customHeader) => {
  return axios.put(path + address, data, headers(customHeader));
};
const patch = (address, data, customHeader) => {
  return axios.patch(path + address, data, headers(customHeader));
};
const remove = (address) => {
  return axios.delete(path + address);
};
const all = (arrMethodes) => {
  return axios.all(arrMethodes);
};

const headers = (customHeader) => {
    
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // const token = userInfo("token");
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ3ZmQxMDE0NWVlYjYzYjAxZmVhZDgiLCJlbWFpbCI6ImRhcmJhbmRpQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJEdjSUEwWFNyR3Jwb081eXFOTDMvUy45UkZFUFVYR3V6Mm01Tk5zMjlkTFBvNHRzUDV4MEFlIiwiY3JlYXRlZF9hdCI6IjIwMjAtMDgtMjdUMTg6MzY6MDAuMDA2WiIsIl9fdiI6MCwiaWF0IjoxNjIwMjUzMTgzLCJleHAiOjE2MjA2MTMxODN9.wcU3Lra1GEu2pgMI9ExRwbcjhbxsgt-aC2Yy9mh0DLE";

  if (token) {
    headers.headers["Authorization"] = token;
  }

  headers.headers = { ...headers.headers, ...customHeader };

  return headers;
};

const userInfo = (prop) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (prop ? user[prop] : user) || undefined;
};

export { get, post, put, patch, remove, all, userInfo };
