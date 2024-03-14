import axios from 'axios'

const baseUrl = "http://127.0.0.1:8000/"

export default axios.create({
    baseURL: baseUrl
})

export const cat = axios.create({
    baseURL: baseUrl,
    headers:{"Content-Type":"application/json"},
    withCredentials: true
})