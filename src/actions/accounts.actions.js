import http from '../helpers/http-interceptor';


export const getAccounts = () => {
    return dispatch => {
        return http.get('sms')
          .then(response => {
            dispatch({
              type: "GET_ACCOUNTS_SUCCESS",
              payload: response.data
            });
          })
          .catch(error => {
            dispatch({
              type: "GET_ACCOUNTS_FAILURE",
              payload: error.data
            });
          });
      };
}

export const editAccounts = (data) => {
    return dispatch => {
        return http.put('sms',data)
          .then(response => {
            dispatch({
              type: "EDIT_ACCOUNT_SUCCESS",
              payload: response.data
            });
          })
          .catch(error => {
            dispatch({
              type: "EDIT_ACCOUNT_FAILURE",
              payload: error.data
            });
          });
      };
}