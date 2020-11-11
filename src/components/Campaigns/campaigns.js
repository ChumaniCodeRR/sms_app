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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useDispatch, useSelector } from "react-redux";

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
  //paginatins initial state
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();
  const dispatch = useDispatch();
  const campaignList = useSelector((state) => state.campaigns);

  //pagination controlls
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h5>CAMPAIGN LIST |
            <Link to="create-campaign">
                <AddCircleOutlineIcon />
              </Link>
            </h5>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Campaign&nbsp;Name</TableCell>
                  <TableCell >Campaign&nbsp;Message</TableCell>
                  <TableCell align="left">Account</TableCell>
                  <TableCell align="left">Contact&nbsp;List</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Date&nbsp;Created</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {campaignList.campaigns
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.campaignName}>
                      <TableCell align="left">{row.campaignName}</TableCell>
                      <TableCell align="left">{row.campaignMessage}</TableCell>
                      <TableCell align="left">{row.account}</TableCell>
                      <TableCell align="left">
                        {row.contactList}
                      </TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">{row.dateCreated}</TableCell>
                      <TableCell align="left">
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
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={campaignList.campaigns.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            
          </Paper>
        </Grid>
      </div>
      <FooterPage />
    </div>
  );
}
