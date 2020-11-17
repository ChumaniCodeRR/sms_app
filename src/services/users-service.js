import axios from 'axios';
import {authHeader} from '../helpers/auth-headers';

export const accountService = {
    getAllSuperUsers,
    editSuperUser,
    addSuperUser,
    getSuperUserById
}

function getAllSuperUsers() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/accounts/all",requestOptions);
}

function getSuperUserById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/accounts/all"+id,requestOptions);
}

function editSuperUser(data) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify({data})
    };

    return axios.get("/account-history/all",requestOptions);
}

function addSuperUser(data){
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({data})
    };

    return axios.get("/account-history/all",requestOptions);
}
