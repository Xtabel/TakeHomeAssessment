import axios from "axios";

const aPIRootUrl = process.env.REACT_APP_API;

const api = axios.create({
  baseURL: aPIRootUrl,
  headers: {
    "Access-Control-Allow-Methods": "*",
  },
});


export default api;
