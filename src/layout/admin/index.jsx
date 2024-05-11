import React from 'react'
import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './footer/Footer';

function AdminLayout() {
    console.log(import.meta.env.VITE_USERS_API);

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AdminLayout
