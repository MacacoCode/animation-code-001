import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import DrawerMenu from './components/DrawerMenu';

function App() {
  return (
    <div id="app">
      <DrawerMenu id="drawer-menu" />
      <Outlet />
    </div>
  );
}

export default App;
