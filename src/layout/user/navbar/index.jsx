import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header >
            <div className="container d-flex justify-content-between align-items-center">
                <h2 className="logo">Manatik</h2>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/favorite">Favorite</NavLink>
                    <NavLink to="/cart">Card</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                <button className='login-btn'>
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </header>
    )
}

export default Navbar