import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../layout/navbar";
import FooterPage from "../../layout/footer";
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

export default function CreateSuperAdminPage() {
    //error handers 
    const { register, handleSubmit, errors } = useForm();

    //initial state
   const [inputAccont, setinputAccont] = useState({
     firstName: "",
     lastName: "",
     email:"",
     phoneNumber:"",
     linkedAccount:""
 
 
   });
 
   const { firstName,lastName,email,phoneNumber,linkedAccount} = inputAccont;
 
   function onChange(e){
     const { name, value } = e.target;
     setinputAccont(inputAccont => ({ ...inputAccont, [name]: value }));
   }
 
   function onSubmit(e) {
     //  e.preventDefault()
      console.log(inputAccont)
   }
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h5>ADD A SUPER ADMIN</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-group">
                <label>First Name</label>
                <input type="email" class="form-control" 
                name="firstName"
                value={firstName}
                onChange={onChange}
                ref={register({ required: true })}
                />
                {errors.firstName && <span class="text-danger">This field is required</span>}

              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="email" class="form-control" 
                 name="lastName"
                 value={lastName}
                 onChange={onChange}
                 ref={register({ required: true })}
                />
                {errors.lastName && <span class="text-danger">This field is required</span>}
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" class="form-control" 
                name="email"
                value={email}
                onChange={onChange}
                ref={register({ required: true })}
                />
                {errors.email && <span class="text-danger">This field is required</span>}
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="email" class="form-control"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
                ref={register({ required: true })}
                />
                {errors.phoneNumber && <span class="text-danger">This field is required</span>}
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Create
              </Button>
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
