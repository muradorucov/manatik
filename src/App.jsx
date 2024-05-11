import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from './layout/user'
import Home from './pages/user/home'
import Contact from './pages/user/contact'
import Cart from './pages/user/cart'
import FavPage from './pages/user/fav'
import Login from './pages/user/login'

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
                <Route path='/admin'></Route>
            </Routes >
        </>
    )
}

export default App