import axios from 'axios';
import {authHeader} from '../helpers/auth-headers';


export const campaignsService = {
    getCampaigns,
    editCampaigns,
    createCampaigns
}

function getCampaigns(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get("/accounts/all",requestOptions);
}

function editCampaigns(data){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    return axios.put("/campaigns/", requestOptions);
}

function createCampaigns(data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    return axios.post("/campaigns/", requestOptions);
}