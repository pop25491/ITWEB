import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { path: "/", label: "หน้าหลัก" },
    { path: "/about", label: "เกี่ยวกับเรา" },
    { path: "/courses", label: "หลักสูตร" },
    { path: "/contact", label: "ติดต่อเรา" },
  ];

  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
