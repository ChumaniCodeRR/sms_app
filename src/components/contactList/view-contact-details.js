import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from '../../layout/navbar';
import FooterPage from '../../layout/footer';
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

export default function ViewContactPage() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div class="row">
              <div class="col">
              <h5>
              Contacts In |
              <Link to="view-create-contact">
                <AddCircleOutlineIcon />
              </Link>
            </h5>
              </div>
              <div class="col">
              <button type="button" class="btn btn-outline-secondary float-right mb-2">back</button>
              </div>
            </div>
            
            <form>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">MSISDN</th>
                    <th scope="col">Custom Field 1</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>2324222522</td>
                    <td>544242</td>
                    <td>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                      >
                        <MenuItem>
                          <Link to="view-edit-contact">Edit</Link>
                        </MenuItem>
                        <MenuItem>Delete</MenuItem>
                      </Select>
                    </td>
                  </tr>
                  <tr>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>2324222522</td>
                    <td>544242</td>
                    <td>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                      >
                        <MenuItem>
                          <Link to="view-edit-contact">Edit</Link>
                        </MenuItem>
                        <MenuItem>Delete</MenuItem>
                      </Select>
                    </td>
                  </tr>
                  <tr>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>2324222522</td>
                    <td>544242</td>
                    <td>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                      >
                        <MenuItem>
                          <Link to="view-edit-contact">Edit</Link>
                        </MenuItem>
                        <MenuItem>Delete</MenuItem>
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
