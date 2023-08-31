import React from 'react'

const Card = ({title,price,description,thumb,rating, onClick}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-[#1D1E29] h-[400px] lg:w-[290px] md:w-[310px] sm:w-[500px] mx-4 my-2 shadow-md rounded-md flex flex-col justify-between">
        <div className={"py-2"}>
            <img
                className="h-[210px] w-[320px] rounded-[10px]"
                src={thumb} alt="Some Image"/>
        </div>
        <div className="flex flex-row justify-between p-2">
          <h3 className="text-l font-semibold text-purple-200 flex">{title}</h3>
          <h3 className="text-l font-semibold text-purple-200 flex">{" Rs " +  price}</h3>
        </div>
      <p className="text-purple-100 overflow-y-scroll">{description}</p>
      <div className="text-l font-semibold text-purple-100  justify-start ">
        {"Rating: "+rating}
      </div>
    </div>
  );
}

export default Card
