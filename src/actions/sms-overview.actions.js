import {GET_SMS_SUCCESS, GET_SMS_FAILURE} from './types';

import {dashboardService} from '../services/dashboard-service';


export const getSmsOverview = () => {

  return (dispatch) => {
  dashboardService.getAll().then(
    (data) => {
      dispatch(success(data)); 
    },
    (error) => {
      dispatch(failure(error.toString()));
    }
  );
  }
  
  function success(sms) {
    return { type: GET_SMS_SUCCESS,sms};
  }
  function failure(error) {
    return { type: GET_SMS_FAILURE, error };
  }
}