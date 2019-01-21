import './Services.css';

import React from 'react';

import magnify from '../../Images/magnify.png';
import boxArrow from '../../Images/boxArrow.png';
import gears from '../../Images/gears.png';
import sArrow from '../../Images/sArrow.png';

const Services = () => {
    return (
        <div className='services'>
            <h2 className='servicesHeader'>Services</h2>
            <span className='servicesLine'></span>
            
                <div className='eachService'>
                    <div>
                        <div className='serviceImage'><img src={magnify} alt='magnifyGlass' /></div>
                        <h3>Hardware Procurement:</h3>
                        <p>CSG specializes in providing affordable solutions for large volume wireless deployments across a wide range of Enterprise, M2M and IOT verticals.  We help you find the best device for your application and work tirelessly to provide it under budget.</p>
                    </div>
                    <div>
                    <div className='serviceImage'><img src={boxArrow} alt='magnifyGlass' /></div>
                        <h3>Fullfillment & Support:</h3>
                        <p>CSG’s facility in Richmond, Virginia is strategically designed to facilitate a host of fulfillment and logistical services, including custom kitting and labeling, SIM implementation, IMEI and ID reporting, asset tagging, deployment logistics, and much more.</p>
                    </div>
                    <div>
                    <div className='serviceImage'><img src={gears} alt='magnifyGlass' /></div>
                        <h3>Programming & Software Solutions:</h3>
                        <p>CSG’s technicians can perform a number of device alterations including software upgrades /downgrades, custom banners and logos, unlocking services, lock-down & MDM implementation, & much more. We take pride in taking on any challenge.</p>
                    </div>
                    <div>
                    <div className='serviceImage'><img src={sArrow} alt='magnifyGlass' /></div>
                        <h3>Buyback Services:</h3>
                        <p>CSG can close the loop on the life cycle of devices by buying back retired or excess hardware.  Whether through direct purchase or revolutionary revenue sharing models, we will make sure you get maximum residual value to use towards your new device rollouts.  </p>
                    </div>
                
            </div>
        </div>
    )
};

export default Services;