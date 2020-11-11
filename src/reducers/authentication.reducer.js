import {LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQUEST,LOGOUT,RESET_PASSWORD} from '../actions/types';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload
            };
        case RESET_PASSWORD:
          return {
            ...state,
            status: action.payload,
          }
        case LOGIN_FAILURE:
            return {
              ...state,
              isLoggedIn: false,
            };
        case LOGOUT:
            return {
              ...state,
              isLoggedIn: false,
            };
        default:
            return state
    }
}