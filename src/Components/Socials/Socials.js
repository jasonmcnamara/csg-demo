import React from 'react';
import './Socials.css';
import Linkdin from '../../Images/linkdin.png';
import Fb from '../../Images/fb.png';
import Tw from '../../Images/tw.png';
import Inst from '../../Images/inst.png';

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