import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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

export default function EditCampaignPage() {
  const classes = useStyles();
  return (
    <div>
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <h5>Update a Campaign</h5>
          <form>
            <div class="form-group">
              <label>Campaign Name</label>
              <input
                type="email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label >
                Contact list
              </label>
              <select class="form-control" >
                <option>-- Select account type --</option>
                <option>Postpaid</option>
                <option>Prepaid</option>
              </select>
            </div>
            <div class="form-group">
              <label >
                Account
              </label>
              <select class="form-control" >
                <option>-- Select account type --</option>
                <option>Postpaid</option>
                <option>Prepaid</option>
              </select>
            </div>
            <div class="form-group">
              <label >
                Custom Field
              </label>
              <select class="form-control" >
                <option>-- Select account type --</option>
                <option>Postpaid</option>
                <option>Prepaid</option>
              </select>
            </div>
            <div class="form-group">
              <label >Message</label>
              <textarea
                class="form-control"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Update Campaign
            </button>
          </form>
        </Paper>
      </Grid>
    </div>
    <FooterPage/>
    </div>
    
  );
}
