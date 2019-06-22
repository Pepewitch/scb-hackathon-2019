import axios from "axios";
import { BASE_URL } from "../const";

export const login = () => {
  axios.get(`${BASE_URL}/login`).then(e => {
    window.location = e.data;
  });
};

export const getToken = (authCode?: string) => {
  axios.post(`${BASE_URL}/token`, { authCode }).then(e => {
    console.log(e);
  });
};

export const buy = () => {
  axios.get(`${BASE_URL}/buy`).then(e => {
    window.location = e.data;
  });
};
