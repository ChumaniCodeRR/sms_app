import axios from 'axios';
import {authHeader} from '../helpers/auth-headers';


export const sendSmsService = {
  sendSms
}

function sendSms(data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    return axios.post(`/send-quick`, requestOptions);
}