import React, { useState } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const navItems = [
  {
    id: 1,
    text: '01 - Rays',
    to: '/01-rays'
  }
]

const DrawerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles["menu-button"]} onClick={toggleDrawer}>
        ☰
      </button>
      <div className={`${styles[`drawer`]} ${styles[isOpen ? 'open' : '']}`}>
        <h3>Code 001</h3>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item?.id} onClick={toggleDrawer}><Link to={item?.to}>{item?.text}</Link></li>

            ))}
          </ul>
        </nav>
      </div>
      <div className={`${styles[`overlay`]} ${styles[isOpen ? 'show' : '']}`} onClick={toggleDrawer}></div>
    </div>
  );
};

export default DrawerMenu;