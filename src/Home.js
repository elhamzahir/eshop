import React from "react";
import "./Home.css"
import shopBackGround from "./images/shopBackground.jpg"
import Product from "./Product";
import bagImage from './images/bagImage.webp'
import tvImage from './images/tvImage.webp'
import shoesImage from './images/shoesimage.webp'
import shirtImage from './images/shirtImage.jfif'
import mobileImage from './images/mobileImage.jpg'
import headphoneImage from './images/headphoneImage.png'

export default function Home(){
    return(
        <div>
            <div className="home">
                <div className="homeContainer">
                    <img src={shopBackGround} alt="" className="homeImage" />
                    <div className="homeRow">
                        <Product
                            id="1"
                            title="Note that the development build is not optimized.
                            To create a production build, use npm run build. "
                            price={12}
                            rating={5}
                            image={bagImage}
                        />
                        <Product
                            id="2"
                            title="Note that the development build is not optimized.
                            To create a production build, use npm run build. "
                            price={84}
                            rating={3}
                            image={tvImage}
                        />
                    </div>
                    <div className="homeRow">
                        <Product
                            id="3"
                            title="Note that the development build is not optimized.
                            To create a production build, use npm run build. "
                            price={24}
                            rating={3}
                            image={shoesImage}
                        />
                        <Product
                            id="4"
                            title="Note that the development build is not optimized.
                            To create a production build, use npm run build. "
                            price={14}
                            rating={4}
                            image={shirtImage}
                        />
                        <Product
                            id="5"
                            title="Note that the development build is not optimized.
                            To create a production build, use npm run build. "
                            price={38}
                            rating={3}
                            image={mobileImage}
                        />
                    </div>
                    <div className="homeRow">
                        <Product
                            id="6"
                            title="Note that the development build is not optimized.
                            To create a production build, use npm run build. "
                            price={26}
                            rating={4}
                            image={headphoneImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}