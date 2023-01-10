import axios from "axios";

export default async function fetcher(url, config) {
  try {
    const API_URL = process.env.REACT_APP_API;

    return await axios(`${API_URL}/${url}`, config);
  } catch (error) {
    if (error.response.status === 401) {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
    return error;
  }
}
