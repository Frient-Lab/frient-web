import axios from "axios";

export const api = axios.create({
  baseURL: 'https://frient.herokuapp.com/',
})