import {createContext, useContext, useState} from "react";

const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "",
        address: "",
        wallet: "",
    })
    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])
    const [cartPrice, setCartPrice] = useState(0)

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            cart,
            setCart,
            history,
            setHistory,
            cartPrice,
            setCartPrice
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);
