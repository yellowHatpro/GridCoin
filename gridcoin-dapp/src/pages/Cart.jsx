import {Card, CustomButton} from "../components";
import {useStateContext} from "../context";

const Cart = ({cart, setCart}) => {
    const stateContext = useStateContext();
    const totalCost = cart.reduce((cost,cartItem)=> {
        return cost + cartItem.price
    },0)

    return (
        <div className={"text-white"}>
            <div>
                {`Total Amount to pay: ${totalCost} `}
                {(totalCost>0) && <CustomButton btnType={"button"}
                                                title={"Pay"}
                                                styles={"bg-[#8c6dfd]"}
                handleClick={async () => {
                    try {
                        const data = await stateContext.transfer({args: ["0x99f3Fa47B11d37f32D8B1B8bb1F8637190F648E3", 10000]});
                        console.info("contract call successs", data);
                    } catch (err) {
                        console.error("contract call failure", err);
                    }
                }}/>}
            </div>
            <div className={"grid  lg:grid-cols-3 md:grid-cols-2"}>
                {
                    cart.map((card, idx) => (
                        <Card
                            key={idx}
                            title={card.title}
                            thumb={card.thumbnail}
                            description={card.description}
                            price={card.price}
                            rating={card.rating}
                            onClick={() => {
                                navigate("/grid-special-store/" + card.id + "")
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Cart