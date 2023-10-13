import React, {useState, useEffect}  from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useStateContext} from '../context';
import {Card} from '../components'
import axios from 'axios';

const GridSpecialStore = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
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

            </div>

            <div className="App  grid  lg:grid-cols-3 md:grid-cols-2">
                {cardsData.map((card, idx) => (
                        <Link to={`/grid-special-store/${card.id}`}>
                            <Card
                                key={idx}
                                title={card.title}
                                thumb={card.thumbnail}
                                description={card.description}
                                price={card.price}
                                rating={card.rating}
                            />
                        </Link>
                    )
                )}
            </div>

        </div>
    )
}

export default GridSpecialStore
