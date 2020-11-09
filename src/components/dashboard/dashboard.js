import React ,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './dashboard.css'
import {Link} from 'react-router-dom';
import Navbar from '../../layout/navbar';
import FooterPage from '../../layout/footer';
import { useDispatch,useSelector } from 'react-redux';
import {getSmsOverview} from '../../actions/sms-overview.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function DashboardPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const overviewList = useState(state => state)

  console.log(overviewList)
  
  useEffect(()=>{
       dispatch(getSmsOverview())
  },[])

  return (
    <div>
     <Navbar/>
     <div className={classes.root}>
      
      <br/>
      <Grid className={classes.paper} container spacing={3}>
        <Grid item xs={3}>
          <Paper className="paper0">
          CAMPAIGNS CREATED
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper1">
          ACCOUNTS CREATED
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper2">
          TOTAL SMS SENT
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper3">
          SMS CREDIT BALANCE
          </Paper>
        </Grid>
      </Grid>
      <br/>
      <Grid  className={classes.paper} item xs={12}>
          <Paper className={classes.paper}>
         <h5>SMS Logs Overview</h5>
          <br/>
          <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Campaign Name</th>
                    <th scope="col">Account Name</th>
                    <th scope="col">MSISDN</th>
                    <th scope="col">Message</th>
                    <th scope="col">Number of SMS</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created at</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No Campaign</td>
                    <td>King Pie - Loyalty</td>
                    <td>27832209737</td>
                    <td>You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store. 
                        Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.</td>
                    <td>2</td>
                    <td>queued</td>
                    <td>2020-11-06 14:03:59</td>
                  </tr>
                  <tr>
                    <td>No Campaign</td>
                    <td>King Pie - Loyalty</td>
                    <td>27832209737</td>
                    <td>You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store. 
                        Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.</td>
                    <td>2</td>
                    <td>queued</td>
                    <td>2020-11-06 14:03:59</td>
                  </tr>
                  <tr>
                    <td>No Campaign</td>
                    <td>King Pie - Loyalty</td>
                    <td>27832209737</td>
                    <td>You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store. 
                        Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.</td>
                    <td>2</td>
                    <td>queued</td>
                    <td>2020-11-06 14:03:59</td>
                  </tr>
                  <tr>
                    <td>No Campaign</td>
                    <td>King Pie - Loyalty</td>
                    <td>27832209737</td>
                    <td>You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store. 
                        Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.</td>
                    <td>2</td>
                    <td>queued</td>
                    <td>2020-11-06 14:03:59</td>
                  </tr>
                  <tr>
                    <td>No Campaign</td>
                    <td>King Pie - Loyalty</td>
                    <td>27832209737</td>
                    <td>You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store. 
                        Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.</td>
                    <td>2</td>
                    <td>queued</td>
                    <td>2020-11-06 14:03:59</td>
                  </tr>
                </tbody>
              </table>
          </Paper>
        </Grid>

        
    </div>
    {/* <FooterPage/> */}
    </div>
    
  );
}
