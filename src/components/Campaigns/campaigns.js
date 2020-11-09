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

export default function CampaignsPage() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h5>Campaign list |
            <Link to="create-campaign">
                <AddCircleOutlineIcon />
              </Link>
            </h5>
            <form>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Campaign Name</th>
                    <th scope="col">Campaign Message</th>
                    <th scope="col">Account</th>
                    <th scope="col">Contact list</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date Created</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kiwi 3</td>
                    <td>A reminder, you have won R2 500 Cash prize from the KIWI Competition. Please email your a valid till slip, 
                        ID copy and the child’s unabridged birth certificate to: nobuhle@vetro.co.za or WhatsApp it to 0649344444</td>
                    <td>Vetro Media</td>
                    <td>Kiwi 2</td>
                    <td>Finished</td>
                    <td>2020-03-19 16:26:09</td>
                    <td>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                      >
                        <MenuItem>Send Campaign</MenuItem>
                        <MenuItem >
                        <Link to="edit-campaign">
                        Edit
                        </Link>
                          
                        </MenuItem>
                        <MenuItem >Delete</MenuItem>
                        <MenuItem >Download</MenuItem>
                      </Select>
                    </td>
                  </tr>
                  <tr>
                    <td>Kiwi 3</td>
                    <td>A reminder, you have won R2 500 Cash prize from the KIWI Competition. Please email your a valid till slip, 
                        ID copy and the child’s unabridged birth certificate to: nobuhle@vetro.co.za or WhatsApp it to 0649344444</td>
                    <td>Vetro Media</td>
                    <td>Kiwi 2</td>
                    <td>Finished</td>
                    <td>2020-03-19 16:26:09</td>
                    <td>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                      >
                        <MenuItem>Send Campaign</MenuItem>
                        <MenuItem >Edit</MenuItem>
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
