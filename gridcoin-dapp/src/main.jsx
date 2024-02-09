import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom';
import {StateContextProvider, UserContextProvider} from './context';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThirdwebProvider 
    activeChain={ChainId.Mumbai}
    clientId = "3bae5190d022b4458f3a9df579042e01"
  >
    <Router>
      <StateContextProvider>
        <UserContextProvider>
          <App/>
        </UserContextProvider>
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)
