import axios from "axios";

export const api = axios.create({
  //baseURL: 'https://frient.herokuapp.com/',
  baseURL: 'http://localhost:4000/',
})