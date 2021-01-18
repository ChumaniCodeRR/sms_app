import axios from 'axios';
import {authHeader} from '../helpers/auth-headers';

export const accountService = {
    getAll,
    getAllHistory,
    editAccount,
    deleteAccount,
    createAccount,
    depositCredit
}

function createAccount(data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    return axios.post("/create-account/", requestOptions);
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

function depositCredit(data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    return axios.post("/add/credit", requestOptions);

}

function editAccount(data){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    return axios.put("/edit", requestOptions);
}

function deleteAccount(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return axios.delete("/remove"+id,requestOptions);
}