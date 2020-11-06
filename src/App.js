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
const hist = createBrowserHistory();

function App() {
  return (

    <Router history={hist}>
      <Switch>
      <Route path='/home' component={DashboardPage} />
      <Route exact path="/" component={Login} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/sms-page" component={SmsPage}/>
      <Route exact path="/campaigns" component={CampaignsPage}/>

      <Route exact path="/accounts" component={AccountPage}/>
      <Route exact path="/create-account" component={CreateAccountPage} />
      </Switch>
   
  </Router>

  );
}

export default App;
