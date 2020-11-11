import {SEND_SMS_SUCCESS,SEND_SMS_FAILURE} from './types';

export const sendQuickSms = (data) => {
    return (dispatch) => {
          
     };

     function success(sms) {
      return { type: SEND_SMS_SUCCESS,sms};
    }
    function failure(error) {
      return { type: SEND_SMS_FAILURE, error };
    }
}