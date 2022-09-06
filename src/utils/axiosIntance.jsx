import axios from "axios";

import { API_BASE_URL, TIMEOUT } from "../Config/config";

export const AxiosIntance = axios.create({
  baseUrl: API_BASE_URL,
  timeout: TIMEOUT,
});
