import React from 'react';
import { Link } from 'react-router-dom';
export default function AdminSidebar() {
  return (
    <div className="sidebar">
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/orders" className="nav-link">
          Orders
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className="nav-link">
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/customers" className="nav-link">
          Customers
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/analytics" className="nav-link">
          Analytics
        </Link>
      </li>
    </ul>
  </div>
  )
}
