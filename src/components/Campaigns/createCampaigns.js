import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from '../../layout/navbar';
import FooterPage from '../../layout/footer';
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Icon from "@material-ui/core/Icon";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  
}));

export default function CreateCampaignPage() {
   //error handers 
   const { register, handleSubmit, errors } = useForm();

  const classes = useStyles();
  //initial state
  const [inputCampaign, setinputCampaign] = useState({
    name: "",
    contact: "",
    account:"",
    customField:"",
    message:""

  });

  const { name, contact,account,customField,message } = inputCampaign;

  function onChange(e){
    const { name, value } = e.target;
    setinputCampaign(inputCampaign => ({ ...inputCampaign, [name]: value }));
  }

  function onSubmit(e) {
    //  e.preventDefault()
     console.log(inputCampaign)
  }
  
  return (
    <div>
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <h5>CREATE A CAMPAIGN</h5>
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group">
              <label>Campaign Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                value={name}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.name && <span class="text-danger">This field is required</span>}
            </div>
            <div class="form-group">
              <label >
                Contact list
              </label>
              <select class="form-control" name="contact" value={contact} onChange={onChange} ref={register({ required: true })}>
                <option selected>-- Select account type --</option>
                <option value="092">Postpaid</option>
                <option value="091">Prepaid</option>
              </select>
              {errors.contact && <span class="text-danger">This field is required</span>}
            </div>
            <div class="form-group">
              <label >
                Account
              </label>
              <select class="form-control" name="account" value={account} onChange={onChange}>
                <option>-- Select account type --</option>
                <option>Postpaid</option>
                <option>Prepaid</option>
              </select>
            </div>
            <div class="form-group">
              <label >
                Custom Field
              </label>
              <select class="form-control" name="customField" value={customField} onChange={onChange} >
                <option>-- Select account type --</option>
                <option>Postpaid</option>
                <option>Prepaid</option>
              </select>
            </div>
            <div class="form-group">
              <label >Message</label>
              <textarea
                class="form-control"
                rows="3"
                name="message"
                value={message}
                onChange={onChange}
                ref={register({ required: true })}
              ></textarea>
              {errors.message && <span class="text-danger">This field is required</span>}
            </div>
            <Button
            type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Create Campaign
              </Button>
            
          </form>
        </Paper>
      </Grid>
    </div>
   
    </div>
    
  );
}
