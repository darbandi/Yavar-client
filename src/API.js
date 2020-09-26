import axios from "axios";
import qs from "qs";
const path = "http://192.168.1.102:8000";

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
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ5ZmQ4OWU4MjU2YzIxYzBiMGUzYzAiLCJlbWFpbCI6InJhaGltaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMiR0VTZ5SHY4emF2YnhiaDRIU2JTOTRPd2pSWXJXTjlwUzgudGltOFpRZzNLWGJyTWdVNjZuLiIsImNyZWF0ZWRfYXQiOiIyMDIwLTA4LTI5VDA3OjAyOjMzLjg2MFoiLCJfX3YiOjAsImlhdCI6MTYwMDQzNTMyNSwiZXhwIjoxNjAwNzk1MzI1fQ.WgmYi8_Kt3FPcmsjpovwdqTC_nI4OCeGJXJP3vDh_F0";

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
