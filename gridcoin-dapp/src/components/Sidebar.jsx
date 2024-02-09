import React from 'react'
import {useUserContext} from "../context";
import {Link} from "react-router-dom";

const Sidebar = () => {
  const userStore = useUserContext()
  return (
    <div className="sm:flex hidden mr-2 justify-between items-center sm:flex-col sticky top-0 py-8 h-screen max-h-screen text-[#1e1e2e]">
      <div className="flex-1 flex flex-col justify-start gap-2 items-center bg-[#1c1c24] rounded-md w-[76px] mt-14">
          {
               userStore.cart.map((cartItem, index)=>{
                  return(
                      <Link key={index} to={`/grid-special-store/${cartItem.id}`}>
                          <img src={cartItem.thumbnail}
                               className={"h-[50px] w-[50px] rounded-full content-stretch"}
                               alt={""}/>
                          <h1 className={"relative rounded-full h-[25px] w-[25px] bg-purple-200 -mt-4 -mr-9 flex justify-center items-center z-10"}>
                              {cartItem.quantity}
                          </h1>
                      </Link>
                  )
              })
          }
          {
              userStore.cart.length === 0 && <h1 className={"text-purple-200 -rotate-90 inline-flex justify-center items-center h-full z-10 whitespace-nowrap text-3xl font-thin"}>Empty Cart 😥</h1>
          }
      </div>
    </div>
  )
}

//     id: 0,
//     title: "",
//     description: "",
//     price: 0,
//     category: "",
//     thumbnail: "",
//     stock: 0

export default Sidebar
