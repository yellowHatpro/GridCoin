import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {DisplayCampaigns, Card} from '../components' 
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
    <div className="App  grid  lg:grid-cols-3 md:grid-cols-2">
      {cardsData.map((card,idx) => (
        <Card 
          key={idx}
          title={card.title}
          thumb={card.thumbnail}
          description={card.description}
          price={card.price}
          rating={card.rating}
          onClick={()=>{navigate("/campaign-details/"+card.id+"")}}
        />
      )
      )}
    </div>
  );}

export default Home
