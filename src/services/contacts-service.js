import axios from 'axios';
import {authHeader} from '../helpers/auth-headers';

export const contactService = {
    getAll,
    viewContactDetails,
    editContact,
    createContact
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/contacts/all",requestOptions);
}

function viewContactDetails(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/contacts/all/"+id,requestOptions);
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
