import http from '../helpers/http-interceptor';


export const getSmsOverview = () => {
    return dispatch => {
        return http.get('sms')
          .then(response => {
            dispatch({
              type: "GET_SMS_SUCCESS",
              payload: response.data
            });
          })
          .catch(error => {
            dispatch({
              type: "GET_SMS_FAILURE",
              payload: error.data
            });
          });
      };
}