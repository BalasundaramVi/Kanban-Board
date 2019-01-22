import React from 'react';

import LOGO from '../../public/assets/calendar-icon.png';

import '../styles/Header.css';

const Header = () => (
  <div className="header">
    <img src={LOGO} className="logo-png" alt="logo" />
    <h1 className="title">Kanban Board</h1>
  </div>
);

export default Header;
