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

export default function CreateContactPage() {
  //error handers 
  const { register, handleSubmit, errors } = useForm();
   //initial state
   const [inputConatact, setinputConatact] = useState({
    name: "",
    account: "",
    description:"",

  });
  const { name, account,description} = inputConatact;

  function onChange(e){
    const { name, value } = e.target;
    setinputConatact(inputConatact => ({ ...inputConatact, [name]: value }));
  }

  function onSubmit(e) {
    //  e.preventDefault()
     console.log(inputConatact)
  }
  const classes = useStyles();
  return (
    <div>
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <h5>CREATE A CONTACT</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Contact list name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.name && <span class="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <label >
                Select account 
              </label>
              <select className="form-control" name="account" value={account} onChange={onChange}>
                <option>-- Select account --</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label >Contact Description</label>
              <textarea
                className="form-control"
                rows="3"
                name="description"
                 value={description}
                 onChange={onChange}
                 ref={register({ required: true })}
              ></textarea>
              {errors.description && <span class="text-danger">This field is required</span>}
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
