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

export default function ContactPage() {
  const classes = useStyles();
  return (
    <div>
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <h5>
              Contact List |
              <Link to="create-contact">
                <AddCircleOutlineIcon />
              </Link>
              </h5>
          <form>
          <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Cantact Name</th>
                    <th scope="col">Contact Description</th>
                    <th scope="col">Account</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>King Free-Pie Oct 2020</td>
                    <td>King Free-Pie Oct 2020</td>
                    <td>King pie LoyALTY</td>
                    <td>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                      >
                        <MenuItem>
                        <Link to="view-conctact">
                        View Contacts
                        </Link>
                        </MenuItem>
                        <MenuItem >
                         <Link to="edit-contact"> 
                         Edit
                         </Link>
                        </MenuItem>
                        <MenuItem >Delete</MenuItem>
                      </Select>
                    </td>
                  </tr>
                  <tr>
                    <td>King Free-Pie Oct 2020</td>
                    <td>King Free-Pie Oct 2020</td>
                    <td>King pie LoyALTY</td>
                    <td>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                      >
                        <MenuItem>
                        <Link to="view-conctact">
                        View Contacts
                        </Link>
                        </MenuItem>
                        <MenuItem >
                         <Link to="edit-contact"> 
                         Edit
                         </Link>
                        </MenuItem>
                        <MenuItem >Delete</MenuItem>
                      </Select>
                    </td>
                  </tr>
                  <tr>
                    <td>King Free-Pie Oct 2020</td>
                    <td>King Free-Pie Oct 2020</td>
                    <td>King pie LoyALTY</td>
                    <td>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                      >
                        <MenuItem>
                        <Link to="view-conctact">
                        View Contacts
                        </Link>
                        </MenuItem>
                        <MenuItem >
                         <Link to="edit-contact"> 
                         Edit
                         </Link>
                        </MenuItem>
                        <MenuItem >Delete</MenuItem>
                      </Select>
                    </td>
                  </tr>
            
                </tbody>
              </table>
          </form>
        </Paper>
      </Grid>
    </div>
    <FooterPage/>
    </div>
    
  );
}
