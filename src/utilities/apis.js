import sendRequest from "./send-request";
import axios from "axios";

const BASE_URL = "http://localhost:5001/api";
// "https://purrfectpost-be.onrender.com/api"

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

export function updateLikeCount(postID, userId) {
  return axios.put(`${BASE_URL}/post/updatelike/${postID}`, { userId })
}

export function likePost(postID, userId) {
  return sendRequest(`${BASE_URL}/post/updatelike/${postID}`, 'PUT', userId)
}

export function getMyPosts(userId) {
  return sendRequest (`${BASE_URL}/post/me/${userId}`)
}

export function getMyInfo(userId) {
  return sendRequest (`${BASE_URL}/users/me/${userId}`)
}

export function updateMyInfo(userId, userInput) {
  return sendRequest (`${BASE_URL}/users/update/${userId}`,'PUT',userInput)
}


export function deletePost(postId) {
  return sendRequest(`${BASE_URL}/post/delete/${postId}`,'DELETE')
}

