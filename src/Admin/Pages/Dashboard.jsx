
import React, { useContext } from "react";
import { ProductContext } from "../../components/context/ProductContext";

const Dashboard = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Total Products: {products.length}</h3>
    </div>
  );
};

export default Dashboard;