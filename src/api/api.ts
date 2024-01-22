import axios from "axios";

const MONOLITH_API_URL = {
  dev: "http://localhost:9012/",
  stg: "http://localhost:9012/",
  hml: "http://localhost:9012/",
  prd: "http://localhost:9012/",
}[process.env.APP_ENV];

export const monolithAPI = axios.create({
  baseURL: MONOLITH_API_URL,
});

const API_URL = {
  dev: "http://localhost:9012/",
  stg: "http://localhost:9012/",
  hml: "http://localhost:9012/",
  prd: "http://localhost:9012/",
}[process.env.APP_ENV];

export const api = axios.create({
  baseURL: API_URL,
});
