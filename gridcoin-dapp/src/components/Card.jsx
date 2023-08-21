import React from 'react'

const Card = ({title,price,description,thumb,rating, onClick}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-pink-100 p-2 h-[378px] w-[300px] mx-4 my-2 shadow-md rounded-md flex flex-col">
      <img
        className="h-[210px] w-[320px] rounded-[10px]"
        src={thumb} alt="Some Image"/>
        <div className="flex flex-row justify-between">
          <h3 className="text-l font-semibold text-black flex">{title}</h3>
          <h3 className="text-l font-semibold text-black flex">{" Rs " +  price}</h3>
        </div>
      <p className="text-gray-700 overflow-y-scroll">{description}</p>
      <h3 className="text-l font-semibold text-black flex justify-start ">
        {"Rating: "+rating}
      </h3>
    </div>
  );
}

export default Card
