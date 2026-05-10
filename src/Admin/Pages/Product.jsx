
import React, { useContext } from "react";
import { ProductContext } from "../../components/context/ProductContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Products</h2>

      <button onClick={() => navigate("/admin/add")}>Add Product</button>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <button onClick={() => deleteProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;