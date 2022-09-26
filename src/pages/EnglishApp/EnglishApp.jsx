import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Main from '../Main/Main';
import Layout from '../../components/Layout/Layout';


const EnglishApp = () => {

    return (
        <>
           <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='/cards' element={<Cards/>}/>
                </Route>
           </Routes>
        </>
    );
};

export default EnglishApp;