import React, {useContext, createContext} from 'react';
import {useAddress, useContract, useMetamask, useContractRead, useContractWrite} from '@thirdweb-dev/react';

const StateContext = createContext();

export const StateContextProvider = ({children})=> {
  const address = useAddress();
  const {contract} = useContract('0xc2d9579566fc0601A68Ea0368D1f9742e9Ea8074');
  const connect = useMetamask();

  //function for  userTransactions
  const {data : userTransactions} = useContractRead(contract, "user", [address]);
const { mutateAsync: transfer } = useContractWrite(contract, "transfer")
  return (
  <StateContext.Provider
    value={{
        useContractRead,
        useContractWrite,
        transfer,
        address,
        contract,
        connect,
        userTransactions
      }}
    >
      {children}
  </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
