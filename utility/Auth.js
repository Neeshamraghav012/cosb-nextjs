import {TEST_TOKEN} from "../config/constants";
import axios from "axios";

const ISSERVER = typeof window === "undefined";

export const isLoggedin = () => new Promise((resolve, reject) => {
    if(!ISSERVER){
        const token = localStorage.getItem('token');
        axios.post(TEST_TOKEN, {token: token})
            .then(res => {
                console.log(res.data)
                if(res.status === 200){
                    resolve(true)
                }
                else if(res.status === 500){
                    resolve(false)
                }
            })
            .catch(err => {
                console.log(err)
                resolve(false)
            })
    }
})

export const getUsername = () => {
    if(!ISSERVER){
        const username = localStorage.getItem('username');
        return username
    }
}


export const logout = () => {
    if(!ISSERVER){
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    }
}

export const login = (token, username) => {
    if(!ISSERVER){
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
    }
}

export const getToken = () => {
    if(!ISSERVER){
        return localStorage.getItem('token');
    }
}
