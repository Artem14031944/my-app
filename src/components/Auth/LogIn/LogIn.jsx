import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  isLoginLoginAC, 
  isLoginPasswordAC, 
  isLoginAC,
  isUserNameAC 
} from '../../../redux/actions';
import { makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import style from './LogIn.module.css';

const useStyles = makeStyles({
    input: {
      width: 270,
      height: 50,
      marginBottom: 30
    },
  });


const LogIn = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const login = useSelector(state =>  state.registrationReducer.loginLogin);
    const password = useSelector(state =>  state.registrationReducer.loginPassword);

    const submitForn = (e) => {
      e.preventDefault();

      if(login && password) {
        axios.post('http://localhost:3001/login/', {
          "email": login,
          "password": password
        })
        .then(({data}) => {              
          dispatch(isLoginAC(true));
          dispatch(isLoginLoginAC(''));
          dispatch(isLoginPasswordAC(''));
          dispatch(isUserNameAC(data.user.email))
          localStorage.setItem('login', '1')
        })
        .catch((err) => console.log(err)) 
      }
    };


  return (
    <form onSubmit={submitForn} className={style.form}>
        <TextField
            id="outlined-basic" 
            label="Login" 
            variant="outlined" 
            type="text"
            value={login}
            onChange={e => dispatch(isLoginLoginAC(e.target.value)) }
            InputProps={{ className: classes.input }}
        />
        <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            type="password"
            value={password}
            onChange={e => dispatch(isLoginPasswordAC(e.target.value)) }
            InputProps={{ className: classes.input }}
        />
        <Button type='submit' variant="contained">Log in</Button>
    </form>
  )
};


export default LogIn;
