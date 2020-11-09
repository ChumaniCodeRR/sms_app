const initialState = {
  accounts: [],
  status: false,
  accountHistory:[],
  errors: "",
  message: "",
};

export default function getAllAccounts(state = initialState, action) {
  switch (action.type) {
    case "GET_ACCOUNTS_SUCCESS":
      return {
        ...state,
        accounts: action.payload.data,
      };

    case "GET_ACCOUNTS_FAILURE":
      return {
        ...state,
        errors: action.payload.errors ? action.payload.errors : [],
        message: action.payload.message ? action.payload.message : null,
      };
    case "EDIT_ACCOUNT_SUCCESS":
      return {
        ...state,
        status: action.payload.success,
      };
    case "EDIT_ACCOUNT_FAILURE":
      return {
        ...state,
        errors: action.payload.errors ? action.payload.errors : [],
        message: action.payload.message ? action.payload.message : null,
      };
    case "DEPOSIT_CREDIT_SUCCESS":
      return {
        ...state,
        status: action.payload.success,
      };
    case "DEPOSIT_CREDIT_FAILURE":
      return {
        ...state,
        errors: action.payload.errors ? action.payload.errors : [],
        message: action.payload.message ? action.payload.message : null,
      };
    case "DEPOSIT_HISTORY_SUCCESS":
      return {
        ...state,
        accountHistory: action.payload.data,
      };
    case "DEPOSIT_HISTORY_FAILURE":
      return {
        ...state,
        errors: action.payload.errors ? action.payload.errors : [],
        message: action.payload.message ? action.payload.message : null,
      };
    default:
      return state;
  }
}
