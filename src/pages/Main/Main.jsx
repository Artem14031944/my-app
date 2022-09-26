import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isTypeCardsAC } from '../../redux/actions';
import MainCard from '../../components/MainCard/MainCard';
import axios from 'axios';
import style from './Main.module.css';


const Main = () => {

    const dispatch = useDispatch();
    const [cards, setCards] = useState([]);

    const getCrads = () => {
        axios.get('http://localhost:3001/type_cards')
        .then(({data}) => {
            setCards(data);
        })
        .catch(err => console.log(err))
    };

    const handlerTypeCards = (type) => {
        dispatch(isTypeCardsAC(type));
        localStorage.setItem('type', type);
    };

    useEffect(() => {
        getCrads();
    }, []);

    return (
        <div className={style.wrapper}>
            {cards.map((item, index) => {
                return (
                    <Link 
                        to="/cards" 
                        key={index} 
                        onClick={() => handlerTypeCards(item.type)} 
                    >
                        <MainCard item={item} />
                    </Link>
                )
            })}
        </div>
    );
};

export default Main;