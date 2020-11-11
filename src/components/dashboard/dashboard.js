import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import "./dashboard.css";
import Navbar from "../../layout/navbar";
import FooterPage from "../../layout/footer";
import { useDispatch, useSelector } from "react-redux";
import { getSmsOverview } from "../../actions/sms-overview.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  container: {
    maxHeight: 440,
  },
}));

export default function DashboardPage() {
  //paginatins initial state
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const classes = useStyles();

  const dispatch = useDispatch();
  const overviewList = useSelector((state) => state.smsOverview);
 

  useEffect(() => {
    dispatch(getSmsOverview());
  }, []);

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
      <div className={classes.root}>
        <br />
        <Grid className={classes.paper} container spacing={3}>
          <Grid item xs={3}>
            <Paper className="paper0">
              CAMPAIGNS CREATED
              <br/>
              {overviewList.smsCampaign[0].campaignsCreated}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className="paper1">
              ACCOUNTS CREATED
              <br/>
              {overviewList.smsCampaign[0].accountCreated}
              </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className="paper2">
              TOTAL SMS SENT
              <br/>
              {overviewList.smsCampaign[0].totalSMS}
              </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className="paper3">
              SMS CREDIT BALANCE
              <br/>
              {overviewList.smsCampaign[0].smsCreditBalance}
              </Paper>
          </Grid>
        </Grid>
        <br />
        <Grid className={classes.paper} item xs={12}>
          <Paper className={classes.paper}>
            <h5>SMS LOGS OVERVIEW</h5>
            <br />
            <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Campaign&nbsp;Name</TableCell>
            <TableCell align="left">Account&nbsp;Name</TableCell>
            <TableCell align="left">MSISDN</TableCell>
            <TableCell >Message</TableCell> 
            <TableCell align="left">Number&nbsp;SMS</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Created&nbsp;At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {overviewList.sms.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.campaignName}>
              <TableCell align="left">
                {row.campaignName}
              </TableCell>
              <TableCell align="left">{row.accountName}</TableCell>
              <TableCell align="left">{row.MSISDN}</TableCell>
              <TableCell component="th" scope="row">{row.message}</TableCell>
              <TableCell align="left">{row.numbersSMS}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={overviewList.sms.length}
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
