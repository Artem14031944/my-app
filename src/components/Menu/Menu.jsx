import React from 'react';
import { NavLink  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginAC } from '../../redux/actions';
import style from './Menu.module.css';

const Menu = ({ header, items, menuActive, setMenuActive}) => {

    const dispatch = useDispatch();

    const goToOut = () => {
        dispatch(isLoginAC(false));
        localStorage.removeItem('login');
        localStorage.removeItem('type');
    };

  return (
    <div 
        className={menuActive ? style.menuActive : style.menu}
        onClick={() => setMenuActive(false)}
    >
        <div className={style.blur}/>
        <div 
            className={style.menuContent}
            onClick={e => e.stopPropagation()}
        >
            <h2 className={style.menuHeader}>{header}</h2>
            <ul className={style.list}>
                {items?.map((item, index) => {
                    return(
                        <li 
                            key={index}
                            className={style.listItem} 
                            onClick={() => setMenuActive(false)}
                        >
                            <NavLink to={item.to}>
                                {item.name}
                            </NavLink>
                        </li>
                    )  
                })}
                <li className={style.listItem}>
                    <button onClick={goToOut}>Go out</button>
                </li>
            </ul>
        </div>
    </div>
  )
};


export default Menu;
