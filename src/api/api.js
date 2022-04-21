import axios from "axios";
import { getJwtUser } from "../helper/currentUser";

export default axios.create({
  baseURL: `http://localhost:3000/`,
  headers: {
    'Content-type': 'application/json',
    "authorization": `Bearer ${getJwtUser()}`
  },

})