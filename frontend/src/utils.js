import axios from "axios";


export const fetchData = axios.create({
  baseURL: "http://localhost:5000/api" ,
  timeout: 10000,
});
