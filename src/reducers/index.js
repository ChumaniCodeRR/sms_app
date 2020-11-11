import {combineReducers} from 'redux'
import {authentication} from './authentication.reducer';
import smsOverview from './sms-overview.reducer'
import sendQuickSms from './quick-sms.reducers';
import getAllAccounts from './accounts.reducers';
import contacts from './contacts.reducers';
import campaigns  from './campaign.reducers';
const rootReducer = combineReducers({
  authentication,
  smsOverview,
  sendQuickSms,
  getAllAccounts,
  contacts,
  campaigns 
})
export default rootReducer