import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import style from './Layout.module.css';


const Layout = () => {

    const [menuActive, setMenuActive] = useState(false);

    const menuItem = [
        {name: 'Main', to:'/'},
        {name: 'Cards', to:'/cards'}
    ]; 

    return (
        <>
            <Header
                menuActive={menuActive}
                setMenuActive={setMenuActive}
            />
            <Menu 
                header={'English for kids'} 
                items={menuItem}
                menuActive={menuActive}
                setMenuActive={setMenuActive}
            />
            <div className={style.outlet}>
                <Outlet/>
            </div>
        </>
    )
};

export default Layout;