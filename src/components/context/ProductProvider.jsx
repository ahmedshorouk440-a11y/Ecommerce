
import React, { useState } from "react";
import { ProductContext } from "./ProductContext";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ]);

  const [orders, setOrders] = useState([
    { id: 1, customer: "Ahmed Ali", product: "Laptop", price: 1200, status: "Pending" },
    { id: 2, customer: "Sara Mohamed", product: "Phone", price: 800, status: "Delivered" },
    { id: 3, customer: "Omar Hassan", product: "Tablet", price: 500, status: "Cancelled" },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Ahmed Ali", email: "ahmed@email.com", role: "Admin" },
    { id: 2, name: "Sara Mohamed", email: "sara@email.com", role: "User" },
    { id: 3, name: "Omar Hassan", email: "omar@email.com", role: "User" },
  ]);

  const addProduct = (product) => setProducts([...products, { id: Date.now(), ...product }]);
  const deleteProduct = (id) => setProducts(products.filter((p) => p.id !== id));
  const updateOrderStatus = (id, status) => setOrders(orders.map((o) => (o.id === id ? { ...o, status } : o)));
  const deleteOrder = (id) => setOrders(orders.filter((o) => o.id !== id));
  const addUser = (user) => setUsers([...users, { id: Date.now(), ...user }]);
  const deleteUser = (id) => setUsers(users.filter((u) => u.id !== id));
  const updateUserRole = (id, role) => setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));

  return (
    <ProductContext.Provider value={{
      products, addProduct, deleteProduct,
      orders, updateOrderStatus, deleteOrder,
      users, addUser, deleteUser, updateUserRole,
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;