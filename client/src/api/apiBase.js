import axios from 'axios';
const token = JSON.parse(localStorage.getItem('jwt')).token;
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}


const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+token}
});

export default instance;

