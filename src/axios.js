import axios from "axios";

const cat = axios.create();

cat.interceptors.request.use(
    config => {
        const access = localStorage.getItem('access_token');
        if(access) {
            config.headers["Authorization"] = `Bearer ${access}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export default cat;