import axios from "axios";

const baseURL = "http://localhost:5001/api";
const api = axios.create({
    baseURL,
    withCredentials: true,
  });

export const userSignup = async (userData) => {
    try {
        const response = await api.post(`${baseURL}/users`, userData);
        console.log("Signup Response:", response);
   
      const token = response.data.token;
      if (!token) {
        throw new Error("Token not found in signup response headers");
      }
      localStorage.setItem("token", token);
      console.log(
        "Token stored in local storage:",
        localStorage.getItem("token")
      );
      const user = response.data.user;
      return { token, user };
    } catch (error) {
      console.error("Signup failed:", error);
      throw new Error("Signup failed");
    }
  }


