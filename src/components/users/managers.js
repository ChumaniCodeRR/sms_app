import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../layout/navbar";
import FooterPage from "../../layout/footer";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts } from "../../actions/accounts.actions";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function ManagersPage() {
  //paginatins initial state
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();

  const dispatch = useDispatch();
  const accountList = useSelector((state) => state.getAllAccounts);

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
            <h5>
               MANAGERS LIST |
              <Link to="manager-create">
                <AddCircleOutlineIcon />
              </Link>
            </h5>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">First&nbsp;Name</TableCell>
                  <TableCell align="left">Last&nbsp;Name</TableCell>
                  <TableCell align="left">Email&nbsp;Address</TableCell>
                  <TableCell align="left">Phone&nbsp;Number</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {accountList.accounts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.accountName}>
                      <TableCell align="left">{row.accountName}</TableCell>
                      <TableCell align="left">{row.accountType}</TableCell>
                      <TableCell align="left">{row.acountToken}</TableCell>
                      <TableCell align="left">
                        {row.accountDescription}
                      </TableCell>
                      <TableCell align="left">{row.balance}</TableCell>

                      <TableCell align="left">
                        <Select
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                        >
                          <MenuItem>
                            <Link to="edit-account">Edit</Link>
                          </MenuItem>
                          <MenuItem>
                            <Link to="">Deposit</Link>
                          </MenuItem>
                          <MenuItem>
                            <Link to="account-history">Deposit History</Link>
                          </MenuItem>
                          <MenuItem>Delete</MenuItem>
                          <MenuItem>Download</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))} */}
              </TableBody>
            </Table>
            {/* <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={accountList.accounts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            /> */}
          </Paper>
        </Grid>
      </div>
      
    </div>
  );
}
