import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <ul>
                <li>
                    <a href="/csgdemo">HOME</a>
                </li>
                <li>
                    <a href="/csgdemo">BOLT BLOG</a>
                </li>
                <li>
                    <a href="/csgdemo">OUR EXPERTISE</a>
                </li>
                <li>
                    <a href="/csgdemo">PRODUCTS</a>
                </li>
                <li>
                    <a href="/csgdemo">SERVICES</a>
                </li>
                <li>
                    <a href="/csgdemo">OUR VISION</a>
                </li>
                <li>
                    <a href="/csgdemo">CSG CERTIFIED A-STOCK</a>
                </li>
                <li>
                    <a href="/csgdemo">CONTACT</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;