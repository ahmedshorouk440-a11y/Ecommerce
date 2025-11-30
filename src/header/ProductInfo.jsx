
import React from 'react'
import { FaCartArrowDown, FaRegHeart, FaRegStarHalfStroke, FaShare } from 'react-icons/fa6'
import { RiStarSFill } from 'react-icons/ri'
import { useContext } from 'react'
import { CartContext } from '../components/context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


function ProductInfo({product}) {


    const {cartItems , addToCart ,  addToFavorites ,  favoritesItems , removeFromFavorite } =useContext(CartContext)
    const isInCart = cartItems.some(i => i.id === product.id);
    const navigate = useNavigate()
      const handleAddToCard = () =>{
      addToCart(product)
      toast.success(
        <div className='toast-wrapper'>
          <img src={product.images[0]} alt="" className='toast-img' />

          <div className="toastContent">
            <strong>{product.title}</strong>
            added to cart 
            <div>
              <button className='btn' onClick={()=> navigate('/cart')}> View Cart</button>
            </div>
          </div>
        </div>
        ,{duration : 3500}
      )
  }

    const isInFav = favoritesItems.some(i => i.id === product.id);
  const handleAddToFav = () => {
    if(isInFav){
         removeFromFavorite (product.id)
          toast.error(`${product.title} Removed From Favorites`)
    }else{
         addToFavorites(product)
    toast.success (`${product.title} added To Favorites`)}
    }


  return (
     <div className="details_item">
               <h1 className="name">{product.title}</h1>
               <div className="stars">
                 <RiStarSFill />
                 <RiStarSFill />
                 <RiStarSFill />
                 <RiStarSFill />
                 <FaRegStarHalfStroke />
               </div>
               <p className="price"> $ {product.price}</p>
               <h5>
                 {" "}
                 Availability : <span>{product.availabilityStatus}</span>
               </h5>
               <h5>
                 {" "}
                 Brand : <span>{product.brand}</span>
               </h5>
               <p className="desc">{product.description}</p>
               <h5 className="stock">
                 <span>
                   Hurry Up! Only {product.stock} products left in stock .{" "}
                 </span>
               </h5>
   
               <button className={`btn ${isInCart ? 'in-cart' : ''}`} onClick={handleAddToCard}>
                {isInCart ? "item in cart" : " Add to Cart"} <FaCartArrowDown />
               </button>
   
               <div className="icons">
                 <span className={`${isInFav ? "in-fav" : "" }`} onClick={handleAddToFav} >
                   {" "}
                   <FaRegHeart />
                 </span>
                 <span>
                   {" "}
                   <FaShare  />
                 </span>
               </div>
             </div>
  )
}

export default ProductInfo
