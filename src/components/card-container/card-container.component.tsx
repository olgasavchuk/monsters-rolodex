import React from 'react';
import './card-container.styles.css'

// @ts-ignore
const CardContainer = ({ monster }) => {
  const {id, name, email} = monster
  return <div className='card-container' key={id}>
    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set3&size=180x180`}/>
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
}

export default CardContainer;