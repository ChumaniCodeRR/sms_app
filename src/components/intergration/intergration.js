import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navbar from "../../layout/navbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import  './integration.css';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function Integration() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />
      <Container fixed>
        <h5 className="mt-4">API INTEGRATION</h5>
        <Card className={classes.root} variant="outlined">
          <CardContent>
        
            <Typography variant="h5" component="h2">
              API Token
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p" style={{ backgroundColor: '#cfe8fc', height: '40vh' }}>
                <p className="api-token">
                eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdiNDNmMTVmN2Q5ZDQ3M2U5ZmQwY2UzZDMyMTQzMmU1ZWZiYjRmOGQyZTFlNjNiYTg1NjFlYzgyODQ0OTZmMDNhOTY5MmU0YjA1MDQzMzA4In0.eyJhdWQiOiIzIiwianRpIjoiN2I0M2YxNWY3ZDlkNDczZTlmZDBjZTNkMzIxNDMyZTVlZmJiNGY4ZDJlMWU2M2JhODU2MWVjODI4NDQ5NmYwM2E5NjkyZTRiMDUwNDMzMDgiLCJpYXQiOjE2MDQ5MjQzNTIsIm5iZiI6MTYwNDkyNDM1MiwiZXhwIjoxNjM2NDYwMzUyLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.nelr5MzhL6aimNXo90YY8s2SdiPswV12XM9wdsePgTnHMaivxZJNZc_TLAaPhGoi2JR_Tv4QoqhtmnNOglxF6P1YAT9MxcT7S4fLV3JSkl03DbCsW8ykBFYZqyYrr9_RBpLTi4LG6uSOtjuCNIstelDh7CtbRBG3pGKtXYt80wqu2DBLpPBWabJsDY8oMl81vHZQv90ptMfCWe1t_eMw05cx5IUluuL4C-UfW-7aQHb8FZmPTWBkHS59ItuijGtSChIKK1_fll7ZrtuZb_Dp4UsMyg8kiMnDYlQ4UR2a_xNAoft6wl_7nZ-9AhJCEgKpiGxFXE9njqtmENdRlhlQAIQMF2ZyNjwOxm3PhkqttFD7n1Lr-JaTYRlDkrzHY665psNfHHDbIikn-0I6dC_rMICgWrMtkeDwObP9Pj_ikyqgHRQpciNNX3tj4t3OpBXscPL9xTeMrbuN_9iyUd_21KNagXxlKNavuWtYwfNkB1IwE7ZRsy2tLhsa2DaI99iRC4m7c6v1J1Vo7e675qRRfKV7O4XPEzLwfQO32AUcecN_zRQHnzBPV6O-xUj9S7PwkDPgGtDjh9ebQp79oa-0ieefLT51pwek9PQHNQDYZK_XSrYfHaqtgRwPLVYDBQCpQeklO8XFALjTsD75M_oTgRUB3IB4-nmW_0Dgvg83iCo

                </p>
            </Typography>
          </CardContent>
          
        </Card>
        <div className="mt-4">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SettingsApplicationsIcon />}
          >
            Generate
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}
