import {GET_ACCOUNTS_SUCCESS,GET_ACCOUNTS_FAILURE,EDIT_ACCOUNT_SUCCESS,EDIT_ACCOUNT_FAILURE} from './types';
import {accountService} from '../services/accounts-service'


export const getAccounts = () => {
    return (dispatch) => {
        accountService.getAll().then(
          (data) => {
            dispatch(success(data)); 
          },
          (error) => {
            dispatch(failure(error.toString()));
          }
        );
        }
        
        function success(accounts) {
          return { type: GET_ACCOUNTS_SUCCESS,payload:accounts};
        }
        function failure(error) {
          return { type: GET_ACCOUNTS_FAILURE, error };
        }
}

export const getAccountHistory = () => {
    return (dispatch) => {
        accountService.getAllHistory().then(
          (data) => {
            dispatch(success(data)); 
          },
          (error) => {
            dispatch(failure(error.toString()));
          }
        );
     }
        
        function success(accounts) {
          return { type: GET_ACCOUNTS_SUCCESS,payload:accounts};
        }
        function failure(error) {
          return { type: GET_ACCOUNTS_FAILURE, error };
        }
}