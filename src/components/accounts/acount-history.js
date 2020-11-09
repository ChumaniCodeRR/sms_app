import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../layout/navbar";
import FooterPage from "../../layout/footer";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function AccountHistoryPage() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h5>
              Account Credit History list
              <Link to="create-account">
              </Link>
            </h5>
            <form>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Account Name</th>
                    <th scope="col">Credited Amount</th>
                    <th scope="col">Balance after deposit</th>
                    <th scope="col">Deposited by</th>
                    <th scope="col">Credited Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Access park</td>
                    <td>120</td>
                    <td>133</td>
                    <td>LLoyd </td>
                    <td>200 credits</td>
                  </tr>
                  <tr>
                    <td>Access park</td>
                    <td>120</td>
                    <td>133</td>
                    <td>LLoyd </td>
                    <td>200 credits</td>
                  </tr>
                  
                </tbody>
              </table>
            </form>
          </Paper>
        </Grid>
      </div>
      <FooterPage />
    </div>
  );
}
