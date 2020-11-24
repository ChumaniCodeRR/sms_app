import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../layout/navbar";
import FooterPage from "../../layout/footer";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Icon from "@material-ui/core/Icon";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function CreateAccountPage() {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h5>CREATE NEW ACCOUNT</h5>
            <form>
              <div class="form-group">
                <label>Account Name</label>
                <input type="email" class="form-control" />
              </div>
              <div class="form-group">
                <label>Account type</label>
                <select class="form-control">
                  <option>-- Select account type --</option>
                  <option>Postpaid</option>
                  <option>Prepaid</option>
                </select>
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Create Account
              </Button>
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
