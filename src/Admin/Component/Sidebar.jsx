
import React from "react";
import { NavLink } from "react-router-dom";
import "./Admain.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>🛒 Admin</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          📊 Dashboard
        </NavLink>
        <NavLink to="/admin/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          📦 Products
        </NavLink>
        <NavLink to="/admin/orders" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          🧾 Orders
        </NavLink>
        <NavLink to="/admin/users" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          👥 Users
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;