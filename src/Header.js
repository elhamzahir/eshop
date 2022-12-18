import React from "react";
import "./Header.css"
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";

export default function  Header(){
    const [{basket} , dispatch] = useStateValue();
    return(
        <div className="header">
            <Link to="/" style={{textDecoration:"none"}}>
                <div className="header_logo">
                    <StorefrontIcon className="headerLogoImage" fontSize="large" />
                    <h2 className="headerLogoTitle">eshop</h2>
                </div>
            </Link>
            <div className="header_search">
                <input type="text" className="headerSearchInput" />
                <SearchIcon className="headerSearchIcon" />
            </div>
            <div className="header_nav">
                <Link to="/Login" style={{textDecoration: "none"}}>
                    <div className="nav_item">
                        <span className="nav_item1">hello!</span>
                        <span className="nav_item2">sign in</span>
                    </div>
                </Link>

                <div className="nav_item">
                    <span className="nav_item1">your</span>
                    <span className="nav_item2">shop</span>
                </div>
                <Link to="/Checkout" style={{textDecoration:"none"}}>
                    <div className="navItemBasket">
                        <AddShoppingCartIcon />
                        <span className="nav_item2 navBasketCount">{basket.length }</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}