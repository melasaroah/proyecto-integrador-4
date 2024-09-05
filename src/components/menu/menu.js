import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../backend/firebase';

import './menu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faTable, faCashRegister, faClipboardList, faChartLine, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Menu({ setUser }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Asegúrate de que setUser esté definido
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const menuItems = [
    { icon: faHome, label: 'Home', action: () => handleClick(0) },
    { icon: faUsers, label: 'Customers', action: () => handleClick(1) },
    { icon: faTable, label: 'Tables', action: () => handleClick(2) },
    { icon: faCashRegister, label: 'Cashier', action: () => handleClick(3) },
    { icon: faClipboardList, label: 'Orders', action: () => handleClick(4) },
    { icon: faChartLine, label: 'Reports', action: () => handleClick(5) },
    { icon: faCog, label: 'Settings', action: () => handleClick(6) },
    { icon: faSignOutAlt, label: 'Logout', action: handleLogout }, // Logout action here
  ];

  return (
    <div className="side-menu">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={item.action}
          >
            <FontAwesomeIcon icon={item.icon} className="menu-icon" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
