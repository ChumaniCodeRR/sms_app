import {
  GET_SUPERUSER_SUCCESS,
  GET_SUPERUSER_FAILURE,
  GET_ADMIN_SUCCESS,
  GET_ADMIN_FAILURE,
  GET_MANAGERS_SUCCESS,
  GET_MANAGERS_FAILURE,
} from "../actions/types";

const initialState = {
  superUser: [ 
      {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440"},
      {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440"},
      {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440"},
      {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440"},
      {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440"},
  ],
  admins: [
    {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440",status:"active"},
    {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440",status:"active"},
    {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440",status:"active"},
    {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440",status:"active"},
  ],
  managers: [
    {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440",status:"active"},
    {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440",status:"active"},
    {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440",status:"active"},
    {firstName:"Nobuhle",lastName:"Sibanda",email:"nobuhle@vetro.co.za",phoneNumber:"0845635440",status:"active"},
    
  ],
  errors: false,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_SUPERUSER_SUCCESS:
      return { ...state, superUser: action.payload, errors: false };
    case GET_SUPERUSER_FAILURE:
      return { ...state, errors: true };
    case GET_ADMIN_SUCCESS:
      return { ...state, admins: action.payload, errors: false };
    case GET_ADMIN_FAILURE:
      return { ...state, errors: true };
      case GET_MANAGERS_SUCCESS:
        return { ...state, managers: action.payload, errors: false };
      case GET_MANAGERS_FAILURE:
        return { ...state, errors: true };
    default:
      return state;
  }
}
