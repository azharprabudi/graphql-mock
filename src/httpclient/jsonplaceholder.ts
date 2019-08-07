import axios, { AxiosInstance } from "axios";

const PlaceholderClient: AxiosInstance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
  timeout: 3000
});

export default PlaceholderClient;
