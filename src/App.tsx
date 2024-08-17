import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import DrawerMenu from './components/DrawerMenu'


function App() {

  return (
    <>
      <DrawerMenu />
      <Outlet />
    </>
  )
}

export default App;
