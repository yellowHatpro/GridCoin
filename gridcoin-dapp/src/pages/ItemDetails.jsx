import axios from 'axios';
import React, {Suspense, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {LucideLoader} from "lucide-react";

const ItemDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    category: "",
    thumbnail: "",
    stock: 0
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
      setLoading(false)
      console.log(response.data)
      }
      )
      .catch(error => console.error(error));
  }, []);

  return (
      <div className="min-w-full p-4 text-purple-200">
        <div className={"flex flex-row gap-10"}>
            <div className={"flex justify-center items-center h-[300px] w-[400px] aspect-4/3 bg-[#1e1e2e]"}>
                {loading && <LucideLoader className={"text-purple-200 spin"}/>}
                {!loading && <img loading={"lazy"}
                                  src={product.thumbnail}
                                  alt={product.title}
                                  className={"aspect-4/3"}/>
                }
            </div>
            <div>
                <h2 className="text-xl font-medium mb-2">{product.title}</h2>
                <p className="mb-4 font-light">{product.description}</p>
                <p className="font-light text-lg">${product.price.toFixed(2)}</p>
            </div>
        </div>
          <div className="py-4">

              <div className="flex child:rounded-md child:bg-[#1e1e2e] child:p-2 gap-4 text-purple-200">
                  <button onClick={()=> {handleCartData(product)}}>
                     Add
                  </button>
                  <button>
                    Avail discount
                  </button>
            </div>
          </div>
      </div>
  )
}

export default ItemDetails
