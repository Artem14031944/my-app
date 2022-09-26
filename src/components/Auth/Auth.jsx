import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isValueTabAC } from '../../redux/actions';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LogIn from './LogIn/LogIn';
import SingUp from './SingUp/SingUp';
import style from './Auth.module.css';


const Auth = () => {

    const dispatch = useDispatch();
    const value = useSelector(state =>  state.registrationReducer.valueTab);
    
    const handleChange = (event, newValue) => {
        dispatch(isValueTabAC(newValue));
    };

    return (
        <div className={style.auth}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList 
                            onChange={handleChange} 
                            aria-label="lab API tabs example"
                            variant="fullWidth"
                        >
                            <Tab label="Log in"  value="1" />
                            <Tab label="Sign up" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <LogIn/>
                    </TabPanel>
                    <TabPanel value="2">
                        <SingUp/>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>        
    )
};

export default Auth;