import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../layout/navbar";
import { sendQuickSms } from "../../actions/quick-sms.actions";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function SmsPage() {
  const classes = useStyles();
  const [sendSms, setsendSms] = useState({
    phoneNumber: "",
    account: "",
    message: "",
  });
  const dispatch = useDispatch();
  const { phoneNumber, account, message } = sendSms;

  function onChange(e) {
    const { name, value } = e.target;
    setsendSms((sendSms) => ({ ...sendSms, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(sendSms);
    dispatch(sendQuickSms(sendSms));
  }

  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h5>Send Quick SMS</h5>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  className="form-control"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Select account to send from</label>
                <select
                  className="form-control"
                  name="account"
                  value={account}
                  onChange={onChange}
                >
                  <option>-- Select account --</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="message"
                  value={message}
                  onChange={onChange}
                ></textarea>
              </div>
              <Button
                 type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
              >
                Send SMS
              </Button>
            </form>
          </Paper>
        </Grid>
      </div>
      
    </div>
  );
}
