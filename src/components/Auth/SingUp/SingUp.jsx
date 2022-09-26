import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  isTokenAC, 
  isSingUpLoginAC, 
  isSingUpPasswordAC, 
  isValueTabAC 
} from '../../../redux/actions';
import { makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import style from './SingUp.module.css';


const useStyles = makeStyles({
    input: {
      width: 270,
      height: 50,
      marginBottom: 30
    },
  });


const SingUp = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const login = useSelector(state =>  state.registrationReducer.singUpLogin);
    const password = useSelector(state =>  state.registrationReducer.singUpPassword);


    const submitForn = (e) => {
      e.preventDefault();

      if(login && password) {
        axios.post('http://localhost:3001/register/', {
          "email": login,
          "password": password
        })
        .then(({data}) => {              
          dispatch(isTokenAC(data.accessToken));
          dispatch(isValueTabAC('1'));
          dispatch(isSingUpLoginAC(''));
          dispatch(isSingUpPasswordAC(''));
        })
        .catch((err) => console.log(err)) 
      }
    };

  return (
    <div>
      <form onSubmit={submitForn} className={style.form}>
        <TextField 
          id="outlined-basic" 
          label="Login" 
          variant="outlined" 
          type="text"
          value={login}
          onChange={e => dispatch(isSingUpLoginAC(e.target.value)) }
          InputProps={{ className: classes.input }}
        />
        <TextField 
          id="outlined-basic" 
          label="Password" 
          variant="outlined"
          type="password"
          value={password}
          onChange={e => dispatch(isSingUpPasswordAC(e.target.value)) } 
          InputProps={{ className: classes.input }}
        />
          <Button type='submit' variant="contained">Sign up</Button>
      </form>
    </div>
  )
}


export default SingUp;
