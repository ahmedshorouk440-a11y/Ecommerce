
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // Cart
  const [cartItems, setCartItems] = useState(() => {
    try {
      const data = localStorage.getItem("cartItems");
      if (!data) return [];
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err)
     {
      console.warn("Cart data corrupted, resetting...");
      return [];
    }
  });

  // Favorites
  const [favoritesItems, setFavoritesItems] = useState(() => {
    try {
      const data = localStorage.getItem("favoritesItems");
      if (!data) return [];
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.warn("Favorites data corrupted, resetting...");
      return [];
    }
  });

  // Save cart
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (err) {
      console.error("Failed to save cart", err);
    }
  }, [cartItems]);

  // Save favorites
  useEffect(() => {
    try {
      localStorage.setItem("favoritesItems", JSON.stringify(favoritesItems));
    } catch (err) {
      console.error("Failed to save favorites", err);
    }
  }, [favoritesItems]);



   const removeFromFavorite = (id) => {
    setFavoritesItems ((prev) => prev.filter ((i) => i.id !== id))
   }

  const addToCart = (item) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  const removeFromCard = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const addToFavorites = (item) => {
    setFavoritesItems(prev => {
      if (prev.some(i => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCard,
      addToFavorites,
      favoritesItems,
      removeFromFavorite ,
    }}>
      {children}
    </CartContext.Provider>
  );
}