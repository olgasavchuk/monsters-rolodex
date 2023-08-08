import React from 'react';
import './card-list.styles.css'
import CardContainer from "../card-container/card-container.component";

// @ts-ignore
const CardList = ({ monsters }) => {

  return <div className='card-list'>
    {
      monsters.map((monster: { id: string; name: string; email: string; }) => {
        return <CardContainer monster={monster}/>
      })
    }
  </div>;
}

export default CardList;