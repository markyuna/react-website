import React from 'react';
import '../index.css';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom'
export const MainLayout = () => {

  return (
   <div className='main-layout'>
    <header>
      <NavBar />
    </header>
    <main>
      <div className='container'>
        <Outlet />
      </div>
    </main>
   </div>
  );
};

export default MainLayout;
