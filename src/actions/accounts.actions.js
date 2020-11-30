import {
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_FAILURE,
  EDIT_ACCOUNT_SUCCESS,
  EDIT_ACCOUNT_FAILURE,
  DEPOSIT_CREDIT_SUCCESS,
  DEPOSIT_CREDIT_FAILURE,
  DEPOSIT_HISTORY_SUCCESS,
  DEPOSIT_HISTORY_FAILURE,
  DELETE_ACCOUNT_FAILURE,
  DELETE_ACCOUNT_SUCCESS,
  ADD_ACCOUNTS_SUCCESS,
  ADD_ACCOUNTS_FAILURE,
} from "./types";
import { accountService } from "../services/accounts-service";

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
  };

  function success(accounts) {
    return { type: GET_ACCOUNTS_SUCCESS, payload: accounts };
  }
  function failure(error) {
    return { type: GET_ACCOUNTS_FAILURE, error };
  }
};

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
  };

  function success(accounts) {
    return { type: GET_ACCOUNTS_SUCCESS, payload: accounts };
  }
  function failure(error) {
    return { type: GET_ACCOUNTS_FAILURE, error };
  }
};

export const createAccount = (data) => {
  return (dispatch) => {
    accountService.createAccount(data).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(accounts) {
    return { type: ADD_ACCOUNTS_SUCCESS, payload: accounts };
  }
  function failure(error) {
    return { type: ADD_ACCOUNTS_FAILURE, error };
  }
};

export const depositCredit = (data) => {
  return (dispatch) => {
    accountService.depositCredit(data).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(credit) {
    return { type: DEPOSIT_CREDIT_SUCCESS, payload: credit };
  }
  function failure(error) {
    return { type: DEPOSIT_CREDIT_FAILURE, error };
  }
};

export const editAccount = (data) => {
  return (dispatch) => {
    accountService.editAccount(data).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(accounts) {
    return { type: EDIT_ACCOUNT_SUCCESS, payload: accounts };
  }
  function failure(error) {
    return { type: EDIT_ACCOUNT_FAILURE, error };
  }
};

export const deleteAccount = (id) => {
  return (dispatch) => {
    accountService.deleteAccount(id).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(accounts) {
    return { type: DELETE_ACCOUNT_SUCCESS, payload: accounts };
  }
  function failure(error) {
    return { type: DELETE_ACCOUNT_FAILURE, error };
  }
};

export const viewDepositHistory = () => {
  return (dispatch) => {
    accountService.getAllHistory().then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function success(history) {
    return { type: DEPOSIT_HISTORY_SUCCESS, payload: history };
  }
  function failure(error) {
    return { type: DEPOSIT_HISTORY_FAILURE, error };
  }
};
