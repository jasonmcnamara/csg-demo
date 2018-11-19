import React from 'react';
import './Socials.css';
import Linkdin from '../../Images/linkdin.webp';
import Fb from '../../Images/fb.webp';
import Tw from '../../Images/tw.webp';
import Inst from '../../Images/inst.webp';

const Socials = () => {
    return(
        <div className='socials'>
            <a href='/csgdemo'><img src={Linkdin} alt='Linkdin Icon' /></a>
            <a href='/csgdemo'><img src={Fb} alt='Facebook Icon' /></a>
            <a href='/csgdemo'><img src={Tw} alt='Twitter Icon' /></a>
            <a href='/csgdemo'><img src={Inst} alt='Instagram Icon' /></a>
        </div>
    )
}

export default Socials;