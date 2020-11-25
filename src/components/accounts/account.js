import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../layout/navbar";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts } from "../../actions/accounts.actions";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Deposit from "./modal/deposit";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function AccountPage() {
  // actions button controlls
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  // deposit modal controlls
  const [showModal, updateShowModal] = React.useState(false);
  const toggleModal = () => updateShowModal((state) => !state);

  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h5>
              ACCOUNT LIST |
              <Link to="create-account">
                <AddCircleOutlineIcon />
              </Link>
            </h5>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Account&nbsp;Name</TableCell>
                  <TableCell align="left">Account&nbsp;Type</TableCell>
                  <TableCell align="left">Account&nbsp;Token</TableCell>
                  <TableCell align="left">Account&nbsp;Description</TableCell>
                  <TableCell align="left">Balance</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accountList.accounts
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
                        <IconButton
                          aria-label="more"
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreHorizIcon />
                        </IconButton>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>
                            <Link to="edit-account">Edit</Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <span onClick={toggleModal}>Deposit</span>
                            <Deposit
                              open={showModal}
                              handleClickOpen={toggleModal}
                            />
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link to="account-history">Deposit History</Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>Delete</MenuItem>
                          <MenuItem onClick={handleClose}>Download</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={accountList.accounts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
