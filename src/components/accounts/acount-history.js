import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../layout/navbar";
import FooterPage from "../../layout/footer";
import { Link } from "react-router-dom";
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

export default function AccountHistoryPage() {
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
              ACCOUNT CREDIT HISTORY LIST
              <Link to="create-account">
              </Link>
            </h5>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Account&nbsp;Name</TableCell>
                  <TableCell align="left">Credited&nbsp;Amount</TableCell>
                  <TableCell align="left">Balance&nbsp;after&nbsp;Deposit</TableCell>
                  <TableCell align="left">Deposited&nbsp;by</TableCell>
                  <TableCell align="left">Credited&nbsp;Date</TableCell>
      
                </TableRow>
              </TableHead>
              <TableBody>
                {accountList.accountHistory
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.accountName}>
                      <TableCell align="left">{row.accountName}</TableCell>
                      <TableCell align="left">{row.creditedAmount}</TableCell>
                      <TableCell align="left">{row.balanceAfter}</TableCell>
                      <TableCell align="left">
                        {row.depositedby}
                      </TableCell>
                      <TableCell align="left">{row.creditedDate}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
           <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={accountList.accountHistory.length}
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
