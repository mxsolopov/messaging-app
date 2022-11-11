import axios from "axios";
const instance = axios.create({
  baseURL: "https://solopov-messaging-app-backend.herokuapp.com",
});
export default instance;
