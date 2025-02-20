import React from "react";

const AdminDashboard = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  ];

  const products = [
    { id: 1, name: "Habit Tracker Pro", price: "$29.99", stock: 100 },
    { id: 2, name: "Mindfulness Journal", price: "$19.99", stock: 50 },
    { id: 3, name: "Fitness Planner", price: "$39.99", stock: 75 },
  ];

  return (
    <div className="p-8 bg-base-100 min-h-screen" data-theme="lemonade">
      <h1 className="text-3xl font-bold text-[rgb(34,73,69)] mb-8">
        Admin Dashboard
      </h1>

      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Users List</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-base-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Products List</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
