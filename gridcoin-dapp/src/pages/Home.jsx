import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Card} from '../components'
import { useNavigate } from 'react-router-dom';

const Home = ({cart, cartCost, setCart, setCartCost}) => {
 const [cardsData, setCardsData] = useState([]);
 const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
      setCardsData(response.data.products)
      console.log(response.data.products)
      }
      )
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App grid lg:grid-cols-3 md:grid-cols-2 child:m-2">
      {cardsData.map((card,idx) => (
        <Card
          key={idx}
          item = {card}
          cartCost={cartCost}
          onClick={()=>{navigate("/grid-special-store/"+card.id+"")}}
          setCartCost={setCartCost}
          setCart={setCart}
          cart = {cart}
          isInsideCart={cart.includes(card)}
        />
      )
      )}
    </div>
  );}

export default Home
