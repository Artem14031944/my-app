import React, { useState, useEffect }  from 'react';
import { useSelector } from 'react-redux';
import TypeCard from '../../components/TypeCard/TypeCard';
import axios from 'axios';
import style from './Cards.module.css';


const Cards = () => {

  const [cards, setCards] = useState([]);
  const type = useSelector(state => state.cardsReducer.typeCards);
   
  const getUsers = () => {
    axios.get(`http://localhost:3001/cards?type=${type}`)
    .then(({data}) => {
      console.log(data,'cards')
      setCards(data)
    })
  };

  useEffect(()=> {
    getUsers();
  }, [type]);


  return (
    <div className={style.wrapper}>
      {cards.map((item, index) => <TypeCard item={item} key={index}/>)}
    </div>
  )
};

export default Cards;