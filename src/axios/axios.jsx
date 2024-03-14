import axios from 'axios'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const baseUrl = "http://127.0.0.1:8000/"
const csrfToken = Cookies.get('csrftoken')
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'


export default axios.create({
    baseURL: baseUrl
})

export const cat = axios.create({
    baseURL: baseUrl,
    headers:{"Content-Type":"application/json"},
    withCredentials: true
})

axios.defaults.headers.common['X-CSRFToken'] = csrfToken
cat.defaults.headers.common['X-CSRFToken'] = csrfToken