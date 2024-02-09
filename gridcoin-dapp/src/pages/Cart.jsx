import {Card, CustomButton} from "../components";
import {useStateContext, useUserContext} from "../context";

const Cart = () => {
    const stateContext = useStateContext();
    const userStore = useUserContext()

    //TODO try adding state for is Selected in cart

    return (
        <div className={"text-white"}>
            <div>
                {`Total Amount to pay: ${userStore.cartPrice} `}
                {(userStore.cartPrice > 0) &&
                    <CustomButton btnType={"button"}
                                  title={"Pay"}
                                  styles={"bg-[#8c6dfd]"}
                                  handleClick={async () => {
                                      try {
                                          const data = await stateContext.transfer({args: ["0x99f3Fa47B11d37f32D8B1B8bb1F8637190F648E3", 10000]});
                                          console.info("contract call success", data);
                                      } catch (err) {
                                          console.error("contract call failure", err);
                                      }
                                  }
                                  }
                    />
                }
            </div>
            <div className={"grid  lg:grid-cols-3 md:grid-cols-2"}>
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
