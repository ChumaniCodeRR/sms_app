import React, { useState ,useRef} from "react";
import "./login.css";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import CardActions from "@material-ui/core/CardActions";
import logo from "../../assets/Logo.png";
import { useDispatch } from 'react-redux';
import {login} from '../../actions/authentication.actions';
import { useForm } from "react-hook-form";


export default function Login(props) {

  //error handers 
  const { register, handleSubmit, errors } = useForm();
//initial state
  const [loginCredentials, setloginCredentials] = useState({
    email: "",
    password: "",
  });
  
  const dispatch = useDispatch();
  const { email, password } = loginCredentials;

  function onChange(e){
    const { name, value } = e.target;
    setloginCredentials(loginCredentials => ({ ...loginCredentials, [name]: value }));
  }

  function onSubmit(e) {
     
    props.history.push('/home')
    dispatch(login(loginCredentials))
  }
 
  return (
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
                Administrator Login 
              </Typography>
              <form className="form"  onSubmit={handleSubmit(onSubmit)}> 
                <TextField
                  inputRef={register({ required: true })}
                  className="inputColor"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                  autoComplete="email"
                />
                {errors.password && <span class="text-danger">This field is required</span>}
                <TextField
                  inputRef={register({ required: true })}
                  className="inputColor"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onChange}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {errors.password && <span class="text-danger mb-2">This field is required</span>}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="submit"
                >
                  Sign In
                </Button>
              </form>
              <CardActions>
                <Link href="reset-password" variant="body2">
                  Forgot password?
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      </Container>
  
    </div>
  );
}
