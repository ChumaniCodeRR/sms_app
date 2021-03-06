import React from "react";
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
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function ProfilePage() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Navbar />
      <div className="mt-4">
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
            <h5>UPDATE PROFILE</h5>
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
              <label >
                Link With Account
              </label>
            </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Update profile
              </Button>
            </form>
            </Grid>
            <Grid item xs={6}>
                <h5>UPDATE PASSWORD</h5>
              <form>
                <div className="form-group">
                  <label >Password</label>
                  <input
                    type="password"
                    className="form-control"
                    
                  />
                </div>
                <div className="form-group">
                  <label >Password Confirm</label>
                  <input
                    type="password"
                    className="form-control"
                    
                  />
                </div>
                <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Update password
              </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
