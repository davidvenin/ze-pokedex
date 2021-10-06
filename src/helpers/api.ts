import axios from "axios";

// adding baseURL configuring all my call with the prefix api url
export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  responseType: "json",
});
