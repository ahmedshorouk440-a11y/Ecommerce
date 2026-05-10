
import React, { useState } from "react";

const initialUsers = [
  { id: 1, name: "Ahmed Ali", email: "ahmed@email.com", role: "Admin" },
  { id: 2, name: "Sara Mohamed", email: "sara@email.com", role: "User" },
  { id: 3, name: "Omar Hassan", email: "omar@email.com", role: "User" },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [form, setForm] = useState({ name: "", email: "", role: "User" });
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setUsers([...users, { id: Date.now(), ...form }]);
    setForm({ name: "", email: "", role: "User" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role: newRole } : u)));
  };

  return (
    <div style={styles.container}>
      <h2>Users</h2>
      <p>Total Users: {users.length}</p>
      <button onClick={() => setShowForm(!showForm)} style={styles.addBtn}>
        {showForm ? "Cancel" : "Add User"}
      </button>

      {showForm && (
        <form onSubmit={handleAdd} style={styles.form}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={styles.input}
          />
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={styles.input}
          />
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            style={styles.input}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          <button type="submit" style={styles.submitBtn}>Add</button>
        </form>
      )}

      <table border="1" style={styles.table}>
        <thead>
          <tr style={styles.thead}>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={styles.td}>{user.id}</td>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>
                <span style={{ ...styles.roleBadge, backgroundColor: user.role === "Admin" ? "#3f51b5" : "#607d8b" }}>
                  {user.role}
                </span>
              </td>
              <td style={styles.td}>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  style={styles.select}
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
                <button onClick={() => handleDelete(user.id)} style={styles.deleteBtn}>
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
  addBtn: { backgroundColor: "#3f51b5", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer", marginBottom: "16px" },
  form: { display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" },
  input: { padding: "8px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "14px" },
  submitBtn: { backgroundColor: "#4caf50", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" },
  table: { width: "100%", borderCollapse: "collapse" },
  thead: { backgroundColor: "#f0f0f0" },
  th: { padding: "10px", textAlign: "left" },
  td: { padding: "10px" },
  roleBadge: { padding: "4px 10px", borderRadius: "12px", fontSize: "13px", fontWeight: "bold", color: "#fff" },
  select: { marginRight: "8px", padding: "4px 8px", borderRadius: "4px", border: "1px solid #ccc" },
  deleteBtn: { backgroundColor: "#f44336", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" },
};

export default Users;