import React, { Component } from 'react';
import './Navbar.css';

import Slidenav from '../Slidenav/Slidenav';

class Navbar extends Component  {

    state = {
        showSlidenav: false
    }

    clicked = () => {
         console.log('clicked');
         this.setState((prevState) => {
             return { showSlidenav: !prevState.showSlidenav }
         });
    }

    render() {
        return (
            <div className='Navbar'>
                <ul className='navbarUl'>
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
            <div className='slideNavbutton' onClick={this.clicked}>
            &#8801;
            </div>
            <Slidenav toggle={this.state.showSlidenav} />
            </div>
        )
    }
}
export default Navbar;