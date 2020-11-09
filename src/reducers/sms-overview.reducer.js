const initialState = {
    sms:[],
    errors:false,
    loading:false
  };
    
    export default function smsOverview (state = initialState, action) {
       
        switch(action.type){
            case "GET_SMS_SUCCESS" : 
               return {...state,sms:action.payload,loading:false,errors:false}
            case "GET_SMS_FAILURE" : 
                return {...state,loading:false,errors:true}
            default :
            return state
        }
    }