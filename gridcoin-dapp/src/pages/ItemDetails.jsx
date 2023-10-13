import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetails = ({cart, setCart}) => {
  const {id} = useParams();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    category: "",
    thumbnail: "",
    supply: 10000
  });

    const handleCartData = (item) => {
        cart.map((cartItem)=>{
            if (cartItem.id === item.id) {

            }
        })
        setCart((cartItems) => [...cartItems, item])
    }

    useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
      setProduct(response.data)
      console.log(response.data)
      }
      )
      .catch(error => console.error(error));
  }, []);

  return (
      <div className="max-w-full p-4">
        <div className="relative">
          <img src={product.thumbnail} alt={product.title} className="w-[500px] h-[500px] rounded-[10px]" />
        </div>
        <div className="py-4">
          <h2 className="text-white text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-white mb-4">{product.description}</p>
          <p className="text-white font-bold">${product.price.toFixed(2)}</p>
          <div className="flex sm:justify-between md:justify-evenly lg:justify-evenly">
           <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md" onClick={()=> {handleCartData(product)}}>
            Add 
          </button>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Avail discount 
          </button>
          </div>
        </div>
      </div>
  )
}

export default ItemDetails
