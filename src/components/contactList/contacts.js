import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from '../../layout/navbar';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
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

export default function ContactPage() {
  // actions button controlls
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
  const contactList = useSelector((state) => state.contacts);

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
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <h5>
              CONTACT LIST |
              <Link to="create-contact">
                <AddCircleOutlineIcon />
              </Link>
              </h5>
              <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Contact&nbsp;Name</TableCell>
                  <TableCell align="left">Contact&nbsp;Description</TableCell>
                  <TableCell align="left">Amount</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contactList.contacts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.contactName}>
                      <TableCell align="left">{row.contactName}</TableCell>
                      <TableCell align="left">{row.contactDescription}</TableCell>
                      <TableCell align="left">{row.account}</TableCell>
                      
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
                         <Link to="view-conctact">
                        View Contacts
                        </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                         <Link to="edit-contact"> 
                         Edit
                         </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                          
                        </Menu>
                        {/* <Select
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
                      </Select> */}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={contactList.contacts.length}
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
