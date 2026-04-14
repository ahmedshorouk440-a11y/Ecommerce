
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import {CartContext} from '../components/context/CartContext'
import SearchBox from './SearchBox'
import './header.css'

function TopHeader() {
  const { cartItems, favoritesItems } = useContext(CartContext);

  return (
    <div className="top_header">
      <div className="container">
        <Link className="logo" to="/">
          {" "}
         
        </Link>

        <SearchBox />

        <div className="header_icons" style={{padding:"10px"}}>
          <div className="icon">
            <Link to="/favorites" >
              <FaRegHeart />
              <span className="count">{favoritesItems.length}</span>
            </Link>
          </div>

          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;