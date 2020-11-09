import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../layout/navbar";
import FooterPage from "../../layout/footer";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function AccountPage() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h5>
              Account list |
              <Link to="create-account">
                <AddCircleOutlineIcon />{" "}
              </Link>
            </h5>
            <form>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Account Name</th>
                    <th scope="col">Account Type</th>
                    <th scope="col">Account Token</th>
                    <th scope="col">Account Description</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Access park</td>
                    <td>Postpaind</td>
                    <td>27832rgre209737</td>
                    <td>Access Park Birthday Campaign</td>
                    <td>200 credits</td>
                    <td>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                      >
                        <MenuItem >
                        <Link to="edit-account">
                         Edit
                        </Link>
                        </MenuItem>
                        <MenuItem >
                         <Link to="">
                         Deposit
                         </Link>
                        </MenuItem>
                        <MenuItem >
                         <Link to="account-history">
                         Deposit History
                         </Link>
                         </MenuItem>
                        <MenuItem >Delete</MenuItem>
                        <MenuItem >Download</MenuItem>
                      </Select>
                    </td>
                  </tr>
                  <tr>
                    <td>Access park</td>
                    <td>Postpaind</td>
                    <td>27832rgre209737</td>
                    <td>Access Park Birthday Campaign</td>
                    <td>200 credits</td>
                    <td>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                      >
                        <MenuItem>Edit</MenuItem>
                        <MenuItem >Deposit</MenuItem>
                        <MenuItem >Deposit History</MenuItem>
                        <MenuItem >Delete</MenuItem>
                        <MenuItem >Download</MenuItem>
                      </Select>
                    </td>
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
