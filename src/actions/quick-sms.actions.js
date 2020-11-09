import http from '../helpers/http-interceptor';

export const sendQuickSms = (data) => {
    return dispatch => {
        return http.post('send',data)
          .then(response => {
            dispatch({
              type: "SEND_SMS_SUCCESS",
              payload: response.data
            });
          })
          .catch(error => {
            dispatch({
              type: "SEND_SMS_FAILURE",
              payload: error.data
            });
          });
      };
}