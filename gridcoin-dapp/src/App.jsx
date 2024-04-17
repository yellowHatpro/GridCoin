import React from "react";
import { Route, Routes } from "react-router-dom";
import { ItemDetails, Home, Profile, Settings } from "./pages";
import { Navbar, Sidebar } from "./components";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="sm:-8 p-4 min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/grid-special-store/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
