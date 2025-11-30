
import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import Product from '../../components/slideProducts/product';

import PageTransition from '../../components/PageTransation'

function Favorites() {
    const { favoritesItems } = useContext(CartContext)
  return (
   <PageTransition >
      <div className="category_product FavoritesPage">
        <div className="container">
            <div className="top_slide">
                <h2> Your Favorites </h2>
            </div>
             {favoritesItems.length === 0 ? (
                <p>No Favorites Products Yet .</p>
            ) : (
                <div className="products">
                    {favoritesItems.map( item => (
                       <Product key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>

      </div>
   </PageTransition>
  )
}

export default Favorites
