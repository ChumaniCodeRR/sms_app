import React, { useState } from "react";
import  '../login/login.css';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import logo from "../../assets/Logo.png";
import { useDispatch } from 'react-redux';
import {resetPassword} from '../../actions/authentication.actions';
import { useForm } from "react-hook-form";



export default function ResetPassword(){
 //error handers 
 const { register, handleSubmit, errors } = useForm();
    //initial state
  const [Password, SetPassword] = useState({
    email: "",
  });
  const dispatch = useDispatch();
  const { email } = Password;

  function onChange(e){
    const { name, value } = e.target;
    SetPassword(Password => ({ ...Password, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault()
     dispatch(resetPassword(Password))
    console.log(resetPassword)
  }


    return(
        <div className="main-bg">
        <Typography variant="body2" color="textSecondary" className="logo">
        <img src={logo}  alt="logo"/>
        </Typography>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Card>
              <CardContent>
                <Typography component="h1" variant="h5">
                Reset Password
                </Typography>
                <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                  inputRef={register({ required: true })}
                   className="inputColor"
                   variant="outlined"
                   margin="normal"
                   required
                   fullWidth
                   id="email"
                   label="Email Address"
                   name="email"
                   value={email}
                   onChange={onChange}
                   autoComplete="email"
                  />
                 {errors.email && <span class="text-danger">This field is required</span>}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit"
                  >
                    Send Password Resend Link
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </div>
    )
}