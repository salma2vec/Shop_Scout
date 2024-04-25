import axios from "axios";
import { createAxiosConfig } from "../axios/axios";

export const authenticate = async (username, password) => {
  const axionsConfig = createAxiosConfig('POST', `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api/v1/users/auth`, { username, password });
  const response = await axios(axionsConfig);

  return response.data;
};

export const identifyUserByToken = async (token) => {
  const axionsConfig = createAxiosConfig('POST', `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api/v1/users/identify`, { token });
  const response = await axios(axionsConfig);

  return response.data;
};