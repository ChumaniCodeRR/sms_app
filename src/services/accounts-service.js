import axios from 'axios';
import {authHeader} from '../helpers/auth-headers';

export const accountService = {
    getAll,
    getAllHistory
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/accounts/all",requestOptions);
}

function getAllHistory() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/account-history/all",requestOptions);
}