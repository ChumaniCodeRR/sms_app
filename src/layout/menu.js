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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Menubar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          {" "}
          <Link to="home" style={{width:'100%'}}> 
            <Tab label="Dashboard" icon={<HomeIcon />} {...a11yProps(0)} />
          </Link>
          <Link to="sms-page" style={{width:'100%'}}>
            <Tab label="Quick SMS" icon={<SmsIcon />} {...a11yProps(1)} />
          </Link>
          <Link to="" style={{width:'100%'}}>
            <Tab label="Users" icon={<GroupIcon />} {...a11yProps(2)} />
          </Link>
          <Link to="accounts" style={{width:'100%'}}>
            <Tab
              label="Accounts"
              icon={<AccountBalanceWalletIcon />}
              {...a11yProps(3)}
            />
          </Link>
          <Link to="" style={{width:'100%'}}>
            <Tab
              label="Contact list"
              icon={<ContactsIcon />}
              {...a11yProps(4)}
            />
          </Link>
          <Link to="campaigns" style={{width:'100%'}}>
            <Tab label="Campaings" icon={<EmailIcon />} {...a11yProps(5)} />
          </Link>
          <Link to="" style={{width:'100%'}}>
            <Tab
              label="Integration"
              icon={<SettingsIcon />}
              {...a11yProps(6)}
            />
          </Link>
        </Tabs>
      </AppBar>
    </div>
  );
}
