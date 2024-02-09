import React, { useEffect } from 'react'
import axios from 'axios'
import {Card} from '../components'
import {useUserContext} from "../context";

const Home = () => {
   const userStore = useUserContext()

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
      userStore.setProducts(response.data.products.map((product, index)=> (
          {...product, quantity:0}
      )) )
      }
  )
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 child:m-2">
      {userStore.products.map((card,idx) => (
        <Card
          key={idx}
          item = {card}
        />
      ))}
    </div>
  )}

export default Home
