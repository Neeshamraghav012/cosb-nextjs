import {SEARCH_USER, TEST_TOKEN} from "../config/constants";
import axios from "axios";

const ISSERVER = typeof window === "undefined";

export const RequestHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${!ISSERVER ? localStorage.getItem('token') : null}`
}

// axios.post(TEST_TOKEN, {token: token})

export const isLoggedin = () => new Promise((resolve, reject) => {
    if(!ISSERVER){
        const token = localStorage.getItem('token');
        if(token){
            axios.post(TEST_TOKEN, {token: token})
                .then(res => {
                    if(res.data.status) {
                        if(res.data.status === 0) {
                            resolve(false)
                        }
                    }
                    else {
                        resolve(true)
                    }
                })
                .catch(err => {
                    resolve(false)
                })
        }
        else {
            resolve(false)
        }

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

export const searchUser = (username) => new Promise((resolve, reject) => {
    axios.post(SEARCH_USER, {username: username})
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
})