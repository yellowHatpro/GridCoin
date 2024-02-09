import React, {useState} from 'react'
import {useUserContext} from "../context";
import {CheckCircle, MinusCircle, PlusCircle, ShoppingCart} from "lucide-react";

const Card = ({item, onClick, cartCost, setCartCost, setCart, cart, isInsideCart}) => {

    let userContext = useUserContext();

    //Number of items a person can choose
    let {title, price, rating, stock, thumbnail} = item;

    let stockLimit = (stock < 10) ? stock : 10;

    // total items selected, TODO: make isSelected and selected one who state
    let [selected, setSelected] = useState(1);

     let [isSelected, setIsSelected] = useState(isInsideCart);

    const switchIsSelected = () => {
        setIsSelected((prev) => {
            handleCart(!prev)
            handleCartCost(!prev)
            return !prev
        })
    }

    const handleCart = (isAddedToCart) => {
        if (isAddedToCart) {
            setCart((cartData) => [...cartData, item])
        } else {
            setCart((cartsData) => [...cartsData].filter((currentItem) =>
                currentItem.id !== item.id
            ))
        }
    }

    const handleCartCost = (isAddedToCart) => {
        if (isAddedToCart) {

            setCartCost((cost) => (
                cost + selected * price
            ))
        } else {
            setCartCost((cost) => (
                cost - selected * price
            ))
        }
    }

    return (
        <div
            className="border border-[#f3e8ff] hover:border-[#b3aeef] cursor-pointer hover:bg-[#1e1e2e] shadow-md rounded-md flex flex-col justify-between font-light">
            <div>
                <img
                    className="h-[250px] w-full rounded-ss-md rounded-se-md hover:shadow-red-100"
                    src={thumbnail} alt="Some Image"
                    onClick={onClick}
                />

                <div className="flex flex-row justify-between p-2">
                    <h3 className="text-lg font-medium text-purple-200 flex">{title}</h3>
                    <h3 className="text-purple-200 flex">{" Rs " + price}</h3>
                </div>
            </div>
            <div className={"p-2"}>
                <div className="text-purple-100 flex justify-between flex-row ">
                    {"Rating: " + rating}
                    <button
                        className={"border bg-[#f3e8ff] rounded-md border-[#b3aeef] p-2"}
                        onClick={() => {
                            switchIsSelected()
                        }}
                    >
                        {isSelected ? <CheckCircle color={"black"}/> : <ShoppingCart color={"black"}/>}
                    </button>
                </div>
                <div className={"text-purple-200 flex flex-row max-w-fit gap-2"}>
                    <h1>Total Items:</h1>
                    <MinusCircle onClick={()=>{
                        if (selected===0) return
                        setSelected((prev)=> {
                            if (prev>=1) return prev-1
                        })
                    }}/>
                    <h1 disabled={true}>{selected}</h1>
                    <PlusCircle onClick={()=>{
                        if (selected>=10) return
                        setSelected((prev)=> {
                            if (prev<=10) return prev+1
                        })
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default Card
