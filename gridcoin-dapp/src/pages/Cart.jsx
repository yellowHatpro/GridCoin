import {Card, CustomButton} from "../components";
import {useStateContext, useUserContext} from "../context";

const Cart = () => {
    const stateContext = useStateContext();
    const userStore = useUserContext()
    return (
        <div className={"text-purple-200"}>
            <div>
                {`Cart Amount : Rs ${userStore.cartPrice} `}
                {(userStore.cartPrice > 0) &&
                    <button
                        className={"rounded-md bg-[#1e1e2e] hover:bg-purple-200 hover:text-[#1e1e2e] px-8 m-2 py-2 gap-4 text-purple-200"}
                        onClick={async () => {
                                      try {
                                          const data = await stateContext.transfer({args: ["0x99f3Fa47B11d37f32D8B1B8bb1F8637190F648E3", 10000]});
                                          console.info("contract call success", data);
                                      } catch (err) {
                                          console.error("contract call failure", err);
                                      }}}>
                        Pay
                    </button>
                }
            </div>
            <div className={"grid lg:grid-cols-3 md:grid-cols-2 child:m-2"}>
                {
                    userStore.cart.map((card, idx) => (
                        <Card
                            item={card}
                            key={idx}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Cart
