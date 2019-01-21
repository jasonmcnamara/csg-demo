import React from 'react';
import './Front.css';
import csgLogo from '../../Images/csgLogo.png';
import verizon from '../../Images/verizon.jpg';

const Front = () => {
    return(
        <div className='Front'>
            <div className='csgLogo'>
                <img src={csgLogo} alt=""/>
            </div>
            <div className='frontLinks'>
                <a className='oneTalk' href='/csgdemo'>One Talk</a>
                <a className='jetPack' href='/csgdemo'>Jetpack Express</a>
                <div className='verizon'>
                    <img src={verizon} alt='verizon partner program' />
                </div>
            </div>
            <div className='slogan'>
                <div className='topSlogan'>
                    the <span className='ultimate'>ULTIMATE</span> wireless hardware co-sell partner
                </div>
                <div className='divider'></div>
                <div className='bottomSlogan'>
                    click <a className='sloganClick' href='/csgdemo'>HERE</a> to explore the csg interactive catalog of services
                </div>
            </div>
            <div className='getQuote'>
                Need a quick quote or wholesale pricing on a specific device? <a className='quoteMe' href='/csgdemo'> QUOTE ME </a>
            </div>
            
        </div>
    )
}

export default Front;