import axios from "axios";
import { BASE_API_URL, BASE_URL } from "../const";

export const login = () => {
  return axios.get(`${BASE_API_URL}/login`).then(e => {
    window.location = e.data;
  });
};

export const getToken = (authCode?: string) => {
  return axios
    .post(`${BASE_API_URL}/token`, { authCode })
    .then(e => e.data)
    .then(e => e.data.accessToken);
};

export const buy = () => {
  return axios
    .post(`${BASE_API_URL}/buy`, { token: localStorage.getItem("accessToken") })
    .then(e => {
      // alert(e.data)
      window.location = `${e.data}?callback_url=${BASE_URL}/list` as any;
    })
    .catch(e => console.error(e));
};
