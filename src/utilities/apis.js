import sendRequest from "./send-request";
import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

export function userSignup(userInput) {
  return sendRequest(`${BASE_URL}/users`, 'POST', userInput)
  
}

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

export function getAllPosts() {
  return sendRequest(`${BASE_URL}/post`)
}




