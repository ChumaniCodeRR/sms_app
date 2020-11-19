import axios from 'axios';
import {authHeader} from '../helpers/auth-headers';

export const usersService = {
    getAllSuperUsers,
    editSuperUser,
    addSuperUser,
    getSuperUserById,
    getAllAdmins,
    getAdminById,
    editAdmin,
    addAdmin,
    getAllManager,
    getManagerById,
    editManager,
    addManager
}

// ########## Super users Services ##########

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

    return axios.put("/account-history/all",requestOptions);
}

function addSuperUser(data){
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({data})
    };

    return axios.post("/account-history/all",requestOptions);
}

// ########## Admin Services ########## 

function getAllAdmins(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/accounts/all",requestOptions);
}

function getAdminById(id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/accounts/all/"+id,requestOptions);
}

function editAdmin(data){
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify({data})
    };

    return axios.put("/account-history/all",requestOptions);
}

function addAdmin(data){
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({data})
    };

    return axios.post("/account-history/all",requestOptions);
}

// ########## Manager Services ########## 

function getAllManager(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/accounts/all",requestOptions);
}

function getManagerById(id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/accounts/all/"+id,requestOptions);
}

function editManager(data){
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify({data})
    };

    return axios.put("/account-history/all",requestOptions);
}

function addManager(data){
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({data})
    };

    return axios.post("/account-history/all",requestOptions);
}