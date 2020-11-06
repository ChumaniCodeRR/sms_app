import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './dashboard.css'
import {Link} from 'react-router-dom';
import Navbar from '../../layout/navbar';
import FooterPage from '../../layout/footer';

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

  return (
    <div>
     <Navbar/>
     <div className={classes.root}>
      
      <br/>
      <Grid className={classes.paper} container spacing={3}>
        <Grid item xs={3}>
          <Paper className="paper">
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
          SMS Logs Overview
          </Paper>
        </Grid>

        
    </div>
    <FooterPage/>
    </div>
    
  );
}
