import React, { useState, useEffect } from 'react'
import { getAUser, getAllPlaces } from '../../api';
import PubLugar from '../Pub_Lugar/pubLugar';

const FeedPlaces = () => {

  const [thePlaces, setThePlaces]=useState([])

  useEffect(() => {
    chargeThePubs().then().catch((err) => console.log(err))
  }, [])

  const chargeThePubs = async () => {
    const response = await getAllPlaces();
    setThePlaces(response.data)
  }
    const mystyle = {
      display:'Flex',
      flexWrap: "Wrap",
      padding: "10px",
    };
  return (
    <div style={mystyle}>
      {thePlaces.map(aPlace=>(
        <PubLugar key={aPlace.id} place={aPlace}/>
      ))}
    </div>
  )
}

export default FeedPlaces