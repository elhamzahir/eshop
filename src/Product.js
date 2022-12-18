import React from "react";
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from "./StateProvider";

export default function Product({id , title , price , rating , image}){

    const [state , dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    };

    return(
        <div>
            <div className="product">
                <div className="productInfo">
                    <p>{title}</p>
                    <p className="productPrice">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="productRating">
                        {Array(rating)
                            .fill()
                            .map((item,index) => (
                                <StarIcon className="starIcon" />
                            ))}
                    </div>
                </div>
                <img src={image} alt="productImage" />
                <button onClick={addToBasket}>add to basket</button>
            </div>
        </div>
    )
}