import React, { Component } from 'react';
import './Firstslides.css';

import YoutubeSlider from '../YoutubeSlider/YoutubeSlider';
class Firstslides extends Component{
    

    render(){
        return (
            <div className='firstSlides'>
                <h2>
                    Company Media
                </h2>
                <div className='line'></div>
                <YoutubeSlider />               
            </div>
        )
    }
}

export default Firstslides;