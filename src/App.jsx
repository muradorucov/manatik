import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from './layout/user'
import Home from './pages/user/home'
import Contact from './pages/user/contact'
import Cart from './pages/user/cart'
import FavPage from './pages/user/fav'
import Login from './pages/user/login'
import AdminLayout from './layout/admin'
import AdminHome from './pages/admin/Home'
import Products from './pages/admin/products'
import Users from './pages/admin/users'
import Comments from './pages/admin/Comments'

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='favorite' element={<FavPage />} />
                </Route>
                <Route path='/admin' element={<AdminLayout />}>
                    <Route path='home' element={<AdminHome />} />
                    <Route path='products' element={<Products />} />
                    <Route path='users' element={<Users />} />
                    <Route path='comments' element={<Comments />} />
                </Route>
            </Routes >
        </>
    )
}

export default App