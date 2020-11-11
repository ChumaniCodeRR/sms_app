import axios from 'axios';
import {authHeader} from '../helpers/auth-headers';

export const contactService = {
    getAll,
    viewContactDetails
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