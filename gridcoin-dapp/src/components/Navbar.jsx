import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {CustomButton} from './';
import { fallbackUser} from '../assets';
import {useStateContext} from '../context';
import {MenuIcon, SettingsIcon, ShoppingCart, ShoppingCartIcon} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const {connect, address} = useStateContext();
  return (
    <div className ="ml-30 text-purple-200 flex md:flex-row lg:flex-row sm:flex-row flex-col-reverse justify-between mb-2 gap-6 min-w-screen">
      <Link to={"/"} className={"sm:text-4xl text-3xl font-thin"}>GridCoinStore</Link>
      <div className="sm:flex hidden flex-row justify-end items-center w-full gap-4">
        <div className={"flex font-light text-xl flex-row gap-3"}>
          <Link to={"/settings"}>
            <button
                className={"rounded-full bg-[#1e1e2e] transition-all duration-500 p-2 text-purple-200 hover:text-[#1e1e2e] hover:bg-purple-200"}>
              <SettingsIcon/>
            </button>
          </Link>
          <Link to={"/cart"}>
            <button
                className={"rounded-full bg-[#1e1e2e] transition-all duration-500 p-2 text-purple-200 hover:text-[#1e1e2e] hover:bg-purple-200"}>
              <ShoppingCartIcon/>
            </button>
          </Link>
        </div>
        {!address && <CustomButton
            btnType="button"
            title="Connect"
            styles="bg-[#8c6dfd]"
            handleClick={() => {
              if (address) navigate('store')
              else connect()
            }}/>}
        <Link to="/profile">
          <div
              className={"w-[40px] h-[40px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer"}>
            <img
                src={fallbackUser}
                alt="user"
                className="rounded-full object-contain"/>
          </div>
        </Link>
      </div>

      {/* Small Screen Navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className={"border-purple-50 border rounded-sm p-1"}>
          <MenuIcon
              className={"text-purple-200"}
              onClick={()=>setToggleDrawer((prev)=> !prev)}/>
        </div>
        <div className={`text-purple-200 absolute top-[60px] right-0 left-0 bg-[#1c1c24] border border-purple-200 rounded-md z-10 shadow-secondary p-4 ${!toggleDrawer ? '-translate-y-[40vh]' : 'translate-y-10'} transition-all duration-500`}>
            <Link to="/profile">
              <div className={"flex flex-row items-center cursor-pointer gap-2 py-2"}>
                <img
                    src={fallbackUser}
                    alt="user"
                    className="w-[40px] h-[40px] rounded-full object-contain"/>
                <h1>Username here</h1>
              </div>
            </Link>
            <Link to={"/cart"}>
              <div className={"flex flex-row gap-2 py-2"}>
                <ShoppingCart/>
                <h1>Cart</h1>
              </div>
            </Link>
          <Link to={"/cart"}>
            <div className={"flex flex-row gap-2 py-2"}>
              <SettingsIcon/>
              <h1>Settings</h1>
            </div>
          </Link>

          <div className="flex mx-3">
            {!address && <CustomButton
                btnType="button"
                title= "Connect"
                styles={"bg-[#8c6dfd]"}
                handleClick={() => {
                  connect()
                }}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
