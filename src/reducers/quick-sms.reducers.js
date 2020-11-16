import {SEND_SMS_SUCCESS,SEND_SMS_FAILURE} from '../actions/types';
const initialState = {
    sendSms:[],
    errors: false
  };
    
    export default function sendQuickSms (state = initialState, action) {
      switch (action.type) {
        case SEND_SMS_SUCCESS :
          return {
            ...state,
            sendSms: action.payload.data,
            errors: false
          };
    
        case SEND_SMS_FAILURE :
          return {
            ...state,
            errors: true
          };
          
        default:
          return state;
      }
    }