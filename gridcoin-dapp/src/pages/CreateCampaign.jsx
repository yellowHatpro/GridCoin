import React, {useState, useEffect}  from 'react'
import {ethers} from 'ethers';
import {money} from '../assets/';
import { useNavigate } from 'react-router-dom';
import {useStateContext} from '../context';
import {Card} from '../components'
import axios from 'axios';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const stateContext = useStateContext();
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
      setCardsData(response.data.products)
      console.log(response.data.products)
      }
      )
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && 'Loader...'}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">GridCoin Deals</h1>
        <button
          className=""
          onClick = { async()=>{
                try {
      const data = await stateContext.transfer({ args: ["0x99f3Fa47B11d37f32D8B1B8bb1F8637190F648E3" , 10000] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
          }} 
        > Hi </button>
      </div>

       <div className="App  grid  lg:grid-cols-3 md:grid-cols-2">
      {cardsData.map((card,idx) => (
        <Card 
          key={idx}
          title={card.title}
          thumb={card.thumbnail}
          description={card.description}
          price={card.price}
          rating={card.rating}
          onClick={()=>{navigate("/campaign-details/"+card.id+"")}}
        />
      )
      )}
    </div>

    </div>
  )
}

export default CreateCampaign
