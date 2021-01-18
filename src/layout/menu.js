import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ContactsIcon from "@material-ui/icons/Contacts";
import EmailIcon from "@material-ui/icons/Email";
import SmsIcon from "@material-ui/icons/Sms";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import { Link ,NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./theme.css";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  //user menu buttom and controlls
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
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="default"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <NavLink to="home" activeClassName="selected" style={{ width: "100%" }}>
          <Tab label="Dashboard" icon={<HomeIcon />} />
        </NavLink>
        <Link to="sms-page" style={{ width: "100%" }}>
          <Tab label="Quick SMS" icon={<SmsIcon />} />
        </Link>
        <Link
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ width: "100%" }}
        >
          <Tab label="Users" icon={<GroupIcon />} />
        </Link>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="super-admin">Super Admin</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="admin">Admin</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="manager">Manager</Link>
          </MenuItem>
        </Menu>
        <Link to="accounts" style={{ width: "100%" }}>
          <Tab label="Accounts" icon={<AccountBalanceWalletIcon />} />
        </Link>
        <Link to="contact-list" style={{ width: "100%" }}>
          <Tab label="Contact list" icon={<ContactsIcon />} />
        </Link>
        <Link to="campaigns" style={{ width: "100%" }}>
          <Tab label="Campaings" icon={<EmailIcon />} />
        </Link>
        
        <Link to="integration" style={{ width: "100%" }}>
          <Tab label="Integration" icon={<SettingsIcon />} />
        </Link>
      </Tabs>
    </Paper>
  );
}

