import axios from "axios";

export const API = axios.create({
 baseURL: "https://v3.football.api-sports.io",
 timeout: 10000,
 headers: { "Content-Type": "application/json" },
});
