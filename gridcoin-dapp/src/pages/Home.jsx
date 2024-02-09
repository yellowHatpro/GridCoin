import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Card} from '../components'

const Home = () => {

    const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
      setCardsData(response.data.products.map((product, index)=> (
          {...product, quantity:0}
      )) )
      }
  )
      .catch(error => console.error(error));
  }, []);
  console.log(cardsData)

  return (
    <div className="App grid lg:grid-cols-3 md:grid-cols-2 child:m-2">
      {cardsData.map((card,idx) => (
        <Card
          key={idx}
          item = {card}
        />
      ))}
    </div>
  )}

export default Home
