import React, {useState} from 'react'
import {useUserContext} from "../context";
import {Check, MinusCircle, PlusCircle, ShoppingCart, TrashIcon} from "lucide-react";
import {Link} from "react-router-dom";

const Card = ({item}) => {
    let userContext = useUserContext();
    let {id, title, price, rating, stock, thumbnail} = item;
    let stockLimit = (stock < 10) ? stock : 10;
    let isInCart = userContext.cart.find(cartItem => cartItem.id === id);
    const itemAlreadyPresentQuantity = (isInCart) ? userContext.cart.find(cartItem=>cartItem.id===id).quantity : 1
    let [selectedAmount, setSelectedAmount] = useState(itemAlreadyPresentQuantity);
    let [isAmountChanged, setIsAmountChanged] = useState(false)

    return (
            <div className={"border border-[#f3e8ff] hover:border-[#b3aeef] hover:bg-[#1e1e2e] shadow-md rounded-md flex flex-col justify-between font-light"}>
                <div>
                    <img className="h-[250px] w-full rounded-ss-md rounded-se-md hover:shadow-red-100"
                         src={thumbnail}
                         alt="Some Image"
                    />

                    <div className="flex flex-row justify-between px-2 pt-1">
                        <Link to={`/grid-special-store/${id}`}>
                            <h3 className="text-lg hover:underline font-medium text-purple-200 flex">
                                {title}
                            </h3>
                        </Link>
                        <h3 className="text-purple-200 flex">{" Rs " + price}</h3>
                    </div>
                </div>
                <div className={"p-2"}>
                    <div className="text-purple-100 flex justify-between flex-row ">
                        {"Rating: " + rating}
                        {
                            !(isAmountChanged && isInCart) && <button
                                className={"border bg-[#f3e8ff] rounded-md border-[#b3aeef] p-2 "}
                                onClick={() => {
                                    if (isInCart) {
                                        userContext.setCart((prev) => prev.filter(prd => prd.id !== id))
                                        userContext.setCartPrice((prev) => prev - (selectedAmount * price))
                                    } else {
                                        userContext.setCart(prev => [...prev, {...item, quantity: selectedAmount}])
                                        userContext.setCartPrice((prev) => prev + (selectedAmount * price))
                                    }
                                }}
                            >
                                {isInCart ? <TrashIcon color={"black"}/> : <ShoppingCart color={"black"}/>}
                            </button>
                        }

                    </div>
                    <div className={"text-purple-200 flex flex-row max-w-fit gap-2"}>
                        <h1>Total Items:</h1>
                        <MinusCircle
                            className={"hover:bg-purple-200 hover:text-[#13131a] rounded-full"}
                            onClick={() => {
                                if (selectedAmount <= 1) return
                                setSelectedAmount((prev) => {
                                    if (prev > 1) return prev - 1
                                })
                                if (isInCart) setIsAmountChanged(true)
                            }}/>
                        <h1>{selectedAmount}</h1>
                        <PlusCircle
                            className={"hover:bg-purple-200 hover:text-[#13131a] rounded-full"}
                            onClick={() => {
                                if (selectedAmount >= stockLimit) return
                                setSelectedAmount((prev) => {
                                    if (prev <= stockLimit) return prev + 1
                                })
                                if (isInCart) setIsAmountChanged(true)

                            }}/>
                        {
                            (isAmountChanged && isInCart) && <Check onClick={() => {
                                const prevQuantityOfThisItem = userContext.cart.find(cartItem => cartItem.id === id).quantity
                                userContext.setCart((prev) => prev.filter(prd => prd.id !== id))
                                userContext.setCart(prev => [...prev, {...item, quantity: selectedAmount}])
                                userContext.setCartPrice(prevState => prevState + (selectedAmount - prevQuantityOfThisItem) * price)
                                setIsAmountChanged(false)
                            }}/>
                        }
                    </div>
                </div>
            </div>
    );
}

export default Card
