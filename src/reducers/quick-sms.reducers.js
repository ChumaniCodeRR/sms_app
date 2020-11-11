import {SEND_SMS_SUCCESS,SEND_SMS_FAILURE} from '../actions/types';
const initialState = {
    sendSms:[],
    errors:'',
    message:''
  };
    
    export default function sendQuickSms (state = initialState, action) {
      switch (action.type) {
        case SEND_SMS_SUCCESS :
          return {
            ...state,
            sendSms: action.payload.data,
            errors: action.payload.errors ? action.payload.errors : [],
            message: action.payload.message ? action.payload.message : null
          };
    
        case SEND_SMS_FAILURE :
          return {
            ...state,
            status: action.payload.success,
            errors: action.payload.errors ? action.payload.errors : [],
            message: action.payload.message ? action.payload.message: null
          };
          
        default:
          return state;
      }
    }