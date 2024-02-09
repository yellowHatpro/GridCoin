import {createContext, useContext, useState} from "react";

const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "",
        address: "",
        wallet: "",
        cartList: [],
        cartPrice: 0,
        history: []
    })

    const handleUser = ({name, address, wallet, cartList, cartPrice, history}) => {
        setUser(
            {
                name: name,
                address: address,
                wallet: wallet,
                cartList: cartList,
                cartPrice: cartPrice,
                history: history
            }
        )
    }

    return (
        <UserContext.Provider value={{
            handleUser,
            user
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);