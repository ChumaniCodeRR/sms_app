import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../layout/navbar";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function CreateAdminPage() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h5>ADD ADMIN</h5>
            <form>
              <div class="form-group">
                <label>First Name</label>
                <input type="email" class="form-control" />
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="email" class="form-control" />
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" class="form-control" />
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="email" class="form-control" />
              </div>
              <div class="form-group">
              <label >
                Link With Account
              </label>
              <select class="form-control" >
                <option>-- Select account --</option>
                <option>Postpaid</option>
                <option>Prepaid</option>
              </select>
            </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Create
              </Button>
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
