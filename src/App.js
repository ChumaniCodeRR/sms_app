import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/login/login';
import ResetPassword from './components/reset-password/resetPassword';
import DashboardPage from './components/dashboard/dashboard';
import SmsPage from './components/QuickSMS/quick';
import { createBrowserHistory } from "history";

import Home from './layout/menu';
import CampaignsPage from './components/Campaigns/campaigns';
import AccountPage from './components/accounts/account';
import CreateAccountPage from './components/accounts/createAccount';
import ContactPage from './components/contactList/contacts';
import CreateContactPage from './components/contactList/createContact';
import CreateCampaignPage from './components/Campaigns/createCampaigns';
import EditCampaign from './components/Campaigns/edit-campaigns';
import EditAccountPage from './components/accounts/edit-account';
import AccountHistoryPage from './components/accounts/acount-history';
import ViewContactPage from './components/contactList/view-contact-details';
import ViewEditContactPage from './components/contactList/viewEditContact';
import ViewCreateContactPage from './components/contactList/viewCreateContact';
import EditContactPage from './components/contactList/edit-contact'
const hist = createBrowserHistory();

function App() {
  return (

    <Router history={hist}>
      <Switch>
      <Route path='/home' component={DashboardPage} />
      <Route exact path="/" component={Login} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/sms-page" component={SmsPage}/>
      {/* ####### Campaigns ###### */}
      <Route exact path="/campaigns" component={CampaignsPage}/>
      <Route exact path="/create-campaign" component={CreateCampaignPage}/>
      <Route exact path="/edit-campaign" component={EditCampaign} />
      
        {/* ####### Accounts ###### */}
      <Route exact path="/accounts" component={AccountPage}/>
      <Route exact path="/create-account" component={CreateAccountPage} />
      <Route exact path="/edit-account" component={EditAccountPage}/>
      <Route exact path="/account-history" component={AccountHistoryPage}/>
      {/* ####### Contact list ###### */}
      <Route exact path="/contact-list" component={ContactPage} />
      <Route exact path="/create-contact" component={CreateContactPage}/>
      <Route exact path="/edit-contact" component={EditContactPage}/>
      <Route exact path="/view-conctact" component={ViewContactPage} />
      <Route exact path="/view-create-contact" component={ViewCreateContactPage}/>
      <Route exact path="/view-edit-contact" component={ViewEditContactPage}/>
      </Switch>
   
  </Router>

  );
}

export default App;
