import axios from 'axios';
import {authHeader} from '../helpers/auth-headers';

export const dashboardService = {
    getAll
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/sms-overview/all",requestOptions);
}