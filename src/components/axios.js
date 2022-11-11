import axios from "axios";
const instance = axios.create({
  baseURL: "https://messaging-app-backend.onrender.com",
});
export default instance;
