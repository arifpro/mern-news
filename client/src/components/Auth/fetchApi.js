import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

export const isAuthenticate = () =>
    localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : false;

export const isAdmin = () =>
    localStorage.getItem('jwt')
        ? JSON.parse(localStorage.getItem('jwt')).user.role ===
          process.env.REACT_APP_adminRoleConfig
        : false;

export const loginReq = async ({ email, password }) => {
    const data = { email, password };
    try {
        const res = await axios.post(`${apiURL}/api/signin`, data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const signupReq = async ({ name, email, password, cPassword }) => {
    const data = { name, email, password, cPassword };
    try {
        const res = await axios.post(`${apiURL}/api/signup`, data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
