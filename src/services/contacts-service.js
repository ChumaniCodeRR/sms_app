import axios from 'axios';
import {authHeader} from '../helpers/auth-headers';

export const contactService = {
    getAll,
    viewContactDetails,
    editContact,
    createContact,
    deleteContact,
    getAllSubContact,
    createSubContact,
    editSubContact,
    deleteSubContact
}

// ####################### Main Contact Page   #######################

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/contacts/all",requestOptions);
}

function editContact(data){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    return axios.put(`/contacts/`, requestOptions);
}

function createContact(data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    return axios.post(`/contacts/`, requestOptions);
}
function viewContactDetails(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/contacts/all/"+id,requestOptions);
}

function deleteContact(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return axios.delete("/delete/"+id,requestOptions);
}

// ####################### Sub Contact Page   #######################

function getAllSubContact(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/contacts/all"+id,requestOptions);
}

function createSubContact(data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    return axios.post(`/contacts/`, requestOptions);
}

function editSubContact(data){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    return axios.put(`/contacts/`, requestOptions);
}

function deleteSubContact(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return axios.delete("/remove"+id,requestOptions);
}