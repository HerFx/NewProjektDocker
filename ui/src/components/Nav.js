import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return (
    <>
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'><i class="fa-solid fa-play"></i></Link>
                <ul className="nav-menu">
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>Wszystkie</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/random' className='nav-links'>Losowania</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}