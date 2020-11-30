import {GET_CAMPAIGNS_SUCCESS,GET_CAMPAIGNS_FAILURE,EDIT_CAMPAIGNS_FAILURE,EDIT_CAMPAIGNS_SUCCESS} from './types';
import {campaignsService} from '../services/campaigns-service';

export const getCampaigns = () => {
    return (dispatch) => {
       campaignsService.getCampaigns().then((data)=>{
           dispatch(success(data))
       },(error) => {
        dispatch(failure(error.toString()));
       })
     };

     function success(campaigns) {
      return { type: GET_CAMPAIGNS_SUCCESS,payload:campaigns};
    }
    function failure(error) {
      return { type: GET_CAMPAIGNS_FAILURE, error };
    }
}   

export const editCampaigns = (data) =>{
    return (dispatch) => {
        campaignsService.editCampaigns(data).then((data) =>{
             dispatch(success(data))
        },(error) =>{
            dispatch(failure(error.toString()))
        })
    }

    function success(campaigns) {
        return { type: EDIT_CAMPAIGNS_SUCCESS,payload:campaigns};
      }
      function failure(error) {
        return { type: EDIT_CAMPAIGNS_FAILURE, error };
      }
}


