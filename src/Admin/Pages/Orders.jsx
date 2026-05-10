
import React, { useState } from "react";

const initialOrders = [
  { id: 1, customer: "Ahmed Ali", product: "Laptop", price: 1200, status: "Pending" },
  { id: 2, customer: "Sara Mohamed", product: "Phone", price: 800, status: "Delivered" },
  { id: 3, customer: "Omar Hassan", product: "Tablet", price: 500, status: "Cancelled" },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
  };

  const handleDelete = (id) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  const getStatusStyle = (status) => {
    if (status === "Delivered") return styles.statusDelivered;
    if (status === "Cancelled") return styles.statusCancelled;
    return styles.statusPending;
  };

  return (
    <div style={styles.container}>
      <h2>Orders</h2>
      <p>Total Orders: {orders.length}</p>
      <table border="1" style={styles.table}>
        <thead>
          <tr style={styles.thead}>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Customer</th>
            <th style={styles.th}>Product</th>
            <th style={styles.th}>Price ($)</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={styles.td}>{order.id}</td>
              <td style={styles.td}>{order.customer}</td>
              <td style={styles.td}>{order.product}</td>
              <td style={styles.td}>${order.price}</td>
              <td style={styles.td}>
                <span style={{ ...styles.statusBadge, ...getStatusStyle(order.status) }}>
                  {order.status}
                </span>
              </td>
              <td style={styles.td}>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  style={styles.select}
                >
                  <option value="Pending">Pending</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                <button onClick={() => handleDelete(order.id)} style={styles.deleteBtn}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: { padding: "20px" },
  table: { width: "100%", borderCollapse: "collapse" },
  thead: { backgroundColor: "#f0f0f0" },
  th: { padding: "10px", textAlign: "left" },
  td: { padding: "10px" },
  statusBadge: { padding: "4px 10px", borderRadius: "12px", fontSize: "13px", fontWeight: "bold", color: "#fff" },
  statusDelivered: { backgroundColor: "#4caf50" },
  statusCancelled: { backgroundColor: "#f44336" },
  statusPending: { backgroundColor: "#ff9800" },
  select: { marginRight: "8px", padding: "4px 8px", borderRadius: "4px", border: "1px solid #ccc" },
  deleteBtn: { backgroundColor: "#f44336", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" },
};

export default Orders;