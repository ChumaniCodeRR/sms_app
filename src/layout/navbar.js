
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../assets/Logo.png";
import Menubar from './menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './theme.css'
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
   //user menu buttom and controlls
   const [value, setValue] = React.useState(0);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
 
   const handleClose = () => {
     setAnchorEl(null);
   };
 
 
   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img src={logo}  alt="logo" height="60"/>
          </Typography>
          <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >Lloyd Bunhle</Button>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
           <Link to="profile">Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
           Log out
          </MenuItem>
          
        </Menu>
        </Toolbar>
      </AppBar>
      <Menubar/>
    </div>
  );
}