import sendRequest from "./send-request";
import axios from "axios";

const BASE_URL = "http://localhost:5001/api";
// const api = axios.create({
//     baseURL,
//     withCredentials: true,
//   });

// export const userSignup = async (userData) => {
//     try {
//         const response = await api.post(`${baseURL}/users`, userData);
//         console.log("Signup Response:", response);
   
//       const token = response.data.token;
//       if (!token) {
//         throw new Error("Token not found in signup response headers");
//       }
//       localStorage.setItem("token", token);
//       console.log(
//         "Token stored in local storage:",
//         localStorage.getItem("token")
//       );
//       const user = response.data.user;
//       return { token, user };
//     } catch (error) {
//       console.error("Signup failed:", error);
//       throw new Error("Signup failed");
//     }
//   }

export function userSignup(userInput) {
  return sendRequest(`${BASE_URL}/users`, 'POST', userInput)
}

  // export const userLogin = async (userData) => {
  //   try {
  //     console.log(userData)
  //     const response = await api.post(`/users/login`, userData);
  //     console.log("Login Response:", response);
  //     const token = response.data.token;
  //     const user = response.data.user;
  //     localStorage.setItem("token", token);
  //     return { token, user };
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     throw new Error("Login failed");
  //   }
  // };

  export function userLogin(userInput) {
    return sendRequest(`${BASE_URL}/users/login`, 'POST', userInput)
}

export function createPost(userInput) {
  return sendRequest(`${BASE_URL}/post/create`, 'POST', userInput)
}

export async function imageUpload(formData){
  const response = await axios.post(
      `${BASE_URL}/upload/image`,
      formData
    )
    return response;
}




