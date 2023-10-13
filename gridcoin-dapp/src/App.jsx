import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ItemDetails, GridSpecialStore, Home, Profile} from './pages';
import {Navbar, Sidebar} from './components';
import Cart from "./pages/Cart";

const App = () => {
    const [cart, setCart] = useState([])
  return(
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar/>
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar cart={cart} setCart={setCart}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/grid-special-store' element={<GridSpecialStore/>}/>
        <Route path='/grid-special-store/:id' element={<ItemDetails cart={cart} setCart={setCart}/>}/>
          <Route path ='/cart' element = {<Cart cart ={cart} setCart={setCart} />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
