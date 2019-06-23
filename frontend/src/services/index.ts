import axios from "axios";
import { BASE_API_URL, BASE_URL } from "../const";

export const login = () => {
  return axios
    .get(`${BASE_API_URL}/login`)
    .then(e => {
      window.location = e.data;
    })
    .catch(e => alert(e.toString()));
};

export const getToken = (authCode?: string) => {
  return axios
    .post(`${BASE_API_URL}/token`, { authCode })
    .then(e => e.data)
    .then(e => e.data.accessToken);
};

export const buy = (amount: number, callback = `${BASE_URL}/list`) => {
  return axios
    .post(`${BASE_API_URL}/buy`, {
      token: localStorage.getItem("accessToken"),
      amount
    })
    .then(e => {
      window.location = `${e.data}?callback_url=${callback}` as any;
    })
    .catch(e => console.error(e));
};
