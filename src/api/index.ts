import axios from "axios";

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const token = JSON.parse(localStorage.getItem("user") || "{}");
  if (user && token) {
    return { "x-access-token": user.token };
  } else {
    return {};
  }
};

const ppmClient = axios.create({
  baseURL: "https://ppm-api.onrender.com",
  headers: authHeader(),
});

export default {
  login: ({ email, password }: { email: string; password: string }) => {
    return ppmClient.post("/auth/login", { email, password });
  },
};
