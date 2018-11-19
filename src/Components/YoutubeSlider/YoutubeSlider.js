import React, { Component } from 'react';
import './YoutubeSlider.css';

class YoutubeSlider extends Component{

    render(){
        return(
            <div className='youtubeSlider'>
                <div className='leftArrow'>
                    &#60;
                </div>
                <div className='rightArrow'>
                    &#62;
                </div>
                <div className='slideBox'>
                    <div className='slideCapWrapper'>
                        <iframe title='ytbox'  src="https://www.youtube.com/embed/bwX9Rd5DQsA"   allowfullscreen></iframe>
                        <div className='caption'>
                            <h2>
                                Company Culture
                            </h2>
                            <div className='captionLine'>
                            </div>
                            <p className='captionParagraph'>
                                Film maker Amber Rose Kandarian gets to the root of the company culture at Connected Solutions Group based in Ashland, Virginia. CSG is a Value-Added Reseller for Verizon Wireless, boasting a wide range of cellular-based solutions for enterprise customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default YoutubeSlider;