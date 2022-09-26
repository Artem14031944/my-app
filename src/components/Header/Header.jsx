import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginAC } from '../../redux/actions';
import { 
    Box,
    AppBar, 
    Toolbar,
    Typography   
} from '@mui/material';
import SwitchGame from '../SwitchGame/SwitchGame';
import Hamburger from 'hamburger-react';
import style from './Header.module.css';


 const Header = ({ menuActive, setMenuActive }) => {

    const user = useSelector(state => state.registrationReducer.userName)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <button  
                            onClick={() => setMenuActive(!menuActive)}
                            className={style.btnHamburger}
                        >
                            <Hamburger toggled={menuActive} toggle={setMenuActive} />
                        </button>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography>
                            {user}
                        </Typography>
                    </Box>
                    <Box>
                        <SwitchGame/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Header;
