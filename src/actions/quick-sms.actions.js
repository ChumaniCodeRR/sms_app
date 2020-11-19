import {SEND_SMS_SUCCESS,SEND_SMS_FAILURE} from './types';
import {sendSmsService} from '../services/sendSms-service';

export const sendQuickSms = (data) => {
    return (dispatch) => {
      sendSmsService.sendSms(data).then(
          (data) => {
             dispatch(success(data))
          },(error) => {
            dispatch(failure(error.toString()));
          })
     };

     function success(sms) {
      return { type: SEND_SMS_SUCCESS,sms};
    }
    function failure(error) {
      return { type: SEND_SMS_FAILURE, error };
    }
}