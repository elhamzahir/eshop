import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import cocaImage from "./images/coca.jpg"
import {useStateValue} from "./StateProvider";

export default function Checkout(){
    const [{basket} , dispatch] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkoutLeft">
                <img src={cocaImage} alt="" className="checkoutAd" />
                <div>
                    <h2 className="checkoutTitle">
                        your shopping basket
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </h2>
                </div>
            </div>
            <div className="checkoutRight">
                <Subtotal />
            </div>
        </div>
    )
}