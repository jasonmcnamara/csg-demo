import React from 'react';
import secondBackground from '../../Images/jpeg/secondBackground.jpeg';
import './SecondBackground.css';

const SecondBackground = () => {

    console.log(secondBackground);

    return(
        <div style={{backgroundImage: `url(${secondBackground})`, backgroundPosition: 'fixed', backgroundRepeat: 'no-repeat' }} className="secondBackground parallax">
            {/* <img src={secondBackground} alt="Background Cell Phone" /> */}
          </div>
    )
}

export default SecondBackground;