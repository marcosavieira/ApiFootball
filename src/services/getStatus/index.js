import { API } from "../api";

export const getStatus = async (data) => {
 try {
  const response = await API.get("/status", {
   headers: {
    "x-rapidapi-key": `${data.apiKey}`,
    "x-rapidapi-host": "v3.football.api-sports.io",
   },
  });
  localStorage.setItem("apiKey", `${data.apiKey}`);
  return response.data;
 } catch (error) {
  console.error(error);
 }
};
