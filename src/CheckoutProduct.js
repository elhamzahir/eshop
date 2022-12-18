import "./CheckoutProduct.css";
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from "./StateProvider";

export default function CheckoutProduct({id , title , price , rating , image}){
    const[{basket} , dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return(
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutPro" />
            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle">{title}</p>
                <p className="checkoutProductPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProductRating">
                    {Array(rating)
                        .fill()
                        .map((item,index) => (
                            <StarIcon className="starIcon" />
                        ))}
                </div>
                <button onClick={removeFromBasket}>remove from basket</button>
            </div>
        </div>
    )
}