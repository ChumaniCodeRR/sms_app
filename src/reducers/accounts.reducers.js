import {GET_ACCOUNTS_SUCCESS,GET_ACCOUNTS_FAILURE,EDIT_ACCOUNT_SUCCESS,
    EDIT_ACCOUNT_FAILURE,DEPOSIT_CREDIT_SUCCESS,DEPOSIT_CREDIT_FAILURE,
    DEPOSIT_HISTORY_SUCCESS,DEPOSIT_HISTORY_FAILURE
} from '../actions/types';

const initialState = {
  accounts: [ 
    {accountName:"Access Park",accountType:"PostPaid",acountToken:"jj47a12scWIxh",accountDescription:"Access Park Birthday Campaign	",balance:"200 credits"},
    {accountName:"Access Park",accountType:"PostPaid",acountToken:"jj47a12scWIxh",accountDescription:"Access Park Birthday Campaign	",balance:"200 credits"},
    {accountName:"Access Park",accountType:"PostPaid",acountToken:"jj47a12scWIxh",accountDescription:"Access Park Birthday Campaign	",balance:"200 credits"},
    {accountName:"Access Park",accountType:"PostPaid",acountToken:"jj47a12scWIxh",accountDescription:"Access Park Birthday Campaign	",balance:"200 credits"},
    {accountName:"Access Park",accountType:"PostPaid",acountToken:"jj47a12scWIxh",accountDescription:"Access Park Birthday Campaign	",balance:"200 credits"},
    {accountName:"Access Park",accountType:"PostPaid",acountToken:"jj47a12scWIxh",accountDescription:"Access Park Birthday Campaign	",balance:"200 credits"},
    {accountName:"Access Park",accountType:"PostPaid",acountToken:"jj47a12scWIxh",accountDescription:"Access Park Birthday Campaign	",balance:"200 credits"},
    {accountName:"Access Park",accountType:"PostPaid",acountToken:"jj47a12scWIxh",accountDescription:"Access Park Birthday Campaign	",balance:"200 credits"}
  ],
  status: false,
  accountHistory:[
    {accountName:"Access Park",creditedAmount:"170",balanceAfter:"123",depositedby:"Lloyd Bunhle",creditedDate:"2019-12-07 07:26:01"},
    {accountName:"Access Park",creditedAmount:"170",balanceAfter:"123",depositedby:"Lloyd Bunhle",creditedDate:"2019-12-07 07:26:01"},
    {accountName:"Access Park",creditedAmount:"170",balanceAfter:"123",depositedby:"Lloyd Bunhle",creditedDate:"2019-12-07 07:26:01"},
    {accountName:"Access Park",creditedAmount:"170",balanceAfter:"123",depositedby:"Lloyd Bunhle",creditedDate:"2019-12-07 07:26:01"},
    {accountName:"Access Park",creditedAmount:"170",balanceAfter:"123",depositedby:"Lloyd Bunhle",creditedDate:"2019-12-07 07:26:01"},
    {accountName:"Access Park",creditedAmount:"170",balanceAfter:"123",depositedby:"Lloyd Bunhle",creditedDate:"2019-12-07 07:26:01"},
    {accountName:"Access Park",creditedAmount:"170",balanceAfter:"123",depositedby:"Lloyd Bunhle",creditedDate:"2019-12-07 07:26:01"},
    {accountName:"Access Park",creditedAmount:"170",balanceAfter:"123",depositedby:"Lloyd Bunhle",creditedDate:"2019-12-07 07:26:01"},
    {accountName:"Access Park",creditedAmount:"170",balanceAfter:"123",depositedby:"Lloyd Bunhle",creditedDate:"2019-12-07 07:26:01"},
  ],
  errors: false,
};

export default function getAllAccounts(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accounts: action.payload,
      };

    case GET_ACCOUNTS_FAILURE:
      return {
        ...state,
        errors: true
      };
    case EDIT_ACCOUNT_SUCCESS:
      return {
        ...state,
        status: action.payload.success,
      };
    case EDIT_ACCOUNT_FAILURE:
      return {
        ...state,
        errors: true
      };
    case DEPOSIT_CREDIT_SUCCESS:
      return {
        ...state,
        status: action.payload.success,
      };
    case DEPOSIT_CREDIT_FAILURE:
      return {
        ...state,
        errors: true
      };
    case DEPOSIT_HISTORY_SUCCESS:
      return {
        ...state,
        accountHistory: action.payload.data,
      };
    case DEPOSIT_HISTORY_FAILURE:
      return {
        ...state,
        errors: true
      };
    default:
      return state;
  }
}
