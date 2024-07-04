import axios, { AxiosInstance } from 'axios';
import { useAuth } from './store/useAuth';
import router from './router';

const axiosClient: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json', 
    },
});


//create interceptor with ts
axiosClient.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        //set token
        const token = useAuth().user.token;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor for the 401 status code
axiosClient.interceptors.response.use(
    (response) => {
        // Do something with response data
        return response;
    },
    (error) => {
        // Do something with response error
        if (error.response.status === 401) {
            useAuth().clearUser();
            router.push({ name: 'Login' });
        }
        return Promise.reject(error);
    }
);

export default axiosClient;