import {userService} from '../services/auth-service';
import {LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQUEST,LOGOUT,RESET_PASSWORD}from "./types";

export const login = (data) => {
  return (dispatch) => {
    dispatch(request({ data}));
  
    userService.login(data).then(
      (user) => {
        dispatch(success(user)); 
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: LOGIN_FAILURE, error };
  }
};

export const logout = () => {
  userService.logout();
  return { type: LOGOUT };
};

export const resetPassword = (email) => {
   
  return (dispatch) => {
    userService.resetPassword(email).
    then((user)=>{
      dispatch(success(user)); 
    })
  };

  function success(email){
    return { type: RESET_PASSWORD,email}
  }
};
