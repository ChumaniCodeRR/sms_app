import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from '../../layout/navbar';
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
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

export default function ViewCreateContactPage() {

     //error handers 
     const { register, handleSubmit, errors } = useForm();

     //initial state
    const [inputContact, setinputContact] = useState({
      firstName: "",
      lastName: "",
      msisdn:"",
      customField:""
  
    });
  
    const { firstName, lastName,msisdn,customField} = inputContact;
  
    function onChange(e){
      const { name, value } = e.target;
      setinputContact(inputContact => ({ ...inputContact, [name]: value }));
    }
  
    function onSubmit(e) {
      //  e.preventDefault()
       console.log(inputContact)
    }
  
  const classes = useStyles();
  return (
    <div>
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <h5>CREATE CONTACT</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.firstName && <span class="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.lastName && <span class="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <label>MSISDN Number</label>
              <input
                type="text"
                className="form-control"
                name="msisdn"
                value={msisdn}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.msisdn && <span class="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <label>Custom Field</label>
              <input
                type="text"
                className="form-control"
                name="customField"
                value={customField}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.customField && <span class="text-danger">This field is required</span>}
            </div>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                 Create Contact
              </Button>
            
          </form>
        </Paper>
      </Grid>
    </div>
    
    </div>
    
  );
}
