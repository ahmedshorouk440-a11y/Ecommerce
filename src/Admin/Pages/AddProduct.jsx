
import React, { useState, useContext } from "react";
import { ProductContext } from "../../components/context/ProductContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(form);
    navigate("/admin/products");
  };

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;