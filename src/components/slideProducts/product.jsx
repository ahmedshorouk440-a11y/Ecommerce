import React, { useContext } from "react";
import { RiStarSFill } from "react-icons/ri";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

function Product({ item }) {
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    addToFavorites,
    favoritesItems,
    removeFromFavorite,
  } = useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === item.id);
  const handleAddToCard = () => {
    addToCart(item);
    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />

        <div className="toastContent">
          <strong>{item.title}</strong>
          added to cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              {" "}
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 }
    );
  };
  const isInFav = favoritesItems.some((i) => i.id === item.id);
  const handleAddToFav = () => {
    if (isInFav) {
      removeFromFavorite(item.id);
      toast.error(`${item.title} Removed From Favorites`);
    } else {
      addToFavorites(item);
      toast.success(`${item.title} added To Favorites`);
    }
  };

  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="status_cart">
          <FaCheck /> in cart
        </span>
        <div className="img_product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name_product">{item.title}</p>
        <div className="stars">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <FaRegStarHalfStroke />
        </div>
        <p className="price">
          <span>$ {item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="btn_addTocart" onClick={handleAddToCard}>
          {" "}
          <FaCartArrowDown />
        </span>
        <span className={`${isInFav ? "in-fav" : ""}`} onClick={handleAddToFav}>
          {" "}
          <FaRegHeart />
        </span>
        <span>
          {" "}
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
