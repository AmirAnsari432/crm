import axios from "axios";

import { API_BASE_URL, TIMEOUT } from "../Config/config";
// globle headers
axios.defaults.common["Content-type"] = "application/json";
axios.defaults.common["Accept"] = "application/json";

export const AxiosInstance = axios.create({
  baseUrl: API_BASE_URL,
  timeout:  TIMEOUT,
});
