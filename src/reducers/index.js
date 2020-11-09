import {combineReducers} from 'redux'
import authentication from './authentication.reducer';
import smsOverview from './sms-overview.reducer'
import sendQuickSms from './quick-sms.reducers';
import getAllAccounts from './accounts.reducers';
const rootReducer = combineReducers({
  authentication,
  smsOverview,
  sendQuickSms,
  getAllAccounts
})
export default rootReducer