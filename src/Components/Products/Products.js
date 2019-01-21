import React from 'react';
import './Products.css';

import tablets from '../../Images/tablets.png';
import phones from '../../Images/phones.png';
import jetpack from '../../Images/jetpack.png';
import routers from '../../Images/routers.png';
import mounting from '../../Images/mounting.png';
import accessories from '../../Images/accessories.png';
import resellerImg from '../../Images/resellerImg.png';

const Products = () => {
    return (
        <div className='Products'>
            <h2>Products</h2>
            <span className='productsLine'></span>
            <div className='theProducts'>
                <div className='eachProduct'>
                    <div className='productImg'><img  src={tablets} alt='tablets' /></div>
                    <div className='productInfo'>
                        <h3>TABLETS</h3>
                        <p>CSG is a leading distributor of embedded tablets.  With an extensive line of Android and Apple OS devices from all leading manufacturers, our mission is to find a quality device that meets your specifications with pricing that falls significantly under budget. </p>
                    </div>
                </div>
                <div className='eachProduct'>
                    <div className='productImg'><img src={phones} alt='tablets' /></div>
                    <div className='productInfo'>
                        <h3>HANDSETS</h3>
                        <p>CSG has become a go-to source for the burgeoning segment of the industry that utilize handsets and smartphones to run low data applications.  Our ability to source high quality, yet affordable devices across a wide range of spec requirements allows us to find the perfect solution for your individual application.</p>
                    </div>
                </div>
                <div className='eachProduct'>
                <div className='productImg'><img  src={jetpack} alt='tablets' /></div>
                    <div className='productInfo'>
                        <h3>DATA DEVICES</h3>
                        <p>CSG stocks a consistent inventory of cellular data devices, including, but not limited to, embedded modules, usb modems, hotspots, M2M routers, home/office LTE routers, amplifiers, and much more.  Antennas and other add-on accessories are also readily available.</p>
                    </div>
                </div>
                <div className='eachProduct'>
                <div className='productImg'><img  src={routers} alt='tablets' /></div>
                    <div className='productInfo'>
                        <h3>ROUTERS, FAIL-OVER, & BUSINESS CONTINUITY</h3>
                        <p>CSG is a reseller for the top router, fail-over, and business continuity hardware manufacturers.  You can source these products through a number of resellers, but CSG works hard to trim pricing as aggressively as possible, provide ultra-fast shipping, and post-sale support.</p>
                    </div>
                </div>
                <div className='eachProduct'>
                <div className='productImg'><img  src={mounting} alt='tablets' /></div>
                    <div className='productInfo'>
                        <h3>MOUNTING SOLUTIONS</h3>
                        <p>CSG is furthering our ability to be a true turn-key solution by adding a number of mounting solutions for tablets and handsets, including the innovative RAM MOUNTS product line.  Inquire to learn how bundling your devices and mounting hardware from one source can save you time and money.</p>
                    </div>
                </div>
                <div className='eachProduct'>
                <div className='productImg'><img  src={accessories} alt='tablets' /></div>
                    <div className='productInfo'>
                        <h3>ACCESSORIES</h3>
                        <p>Most device deployments require additional accessories or peripherals, including, but not limited to, rugged cases, chargers, CLA’s, headsets, bluetooth devices, extra batteries and more.  CSG can lower your bottom line by providing these products at a fraction of retail cost.</p>
                    </div>
                </div>
                
            </div>
            <div className='resellerImg'>
                <img src={resellerImg} alt='Authorized Reseller' />
            </div>
        </div>
    )
};

export default Products