import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ContactsIcon from "@material-ui/icons/Contacts";
import EmailIcon from "@material-ui/icons/Email";
import SmsIcon from "@material-ui/icons/Sms";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Menubar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"  
        >
          <Link to="home" style={{width:'100%'}} > 
            <Tab label="Dashboard" icon={<HomeIcon />}  />
          </Link>
          <Link to="sms-page" style={{width:'100%'}}>
            <Tab label="Quick SMS" icon={<SmsIcon />}  />
          </Link>
          <Link to="" style={{width:'100%'}}>
            <Tab label="Users" icon={<GroupIcon />}  />
          </Link>
          <Link to="accounts" style={{width:'100%'}}>
            <Tab
              label="Accounts"
              icon={<AccountBalanceWalletIcon />}
            />
          </Link>
          <Link to="contact-list" style={{width:'100%'}}>
            <Tab
              label="Contact list"
              icon={<ContactsIcon />}
            />
          </Link>
          <Link to="campaigns" style={{width:'100%'}}>
            <Tab label="Campaings" icon={<EmailIcon />} />
          </Link>
          <Link to="" style={{width:'100%'}}>
            <Tab
              label="Integration"
              icon={<SettingsIcon />}
            />
          </Link>
        </Tabs>
      </AppBar>
    </div>
  );
}
