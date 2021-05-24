import React from 'react';
import './containers.css';
import SliderList from '../components/SliderList'
const SliderSection = () => {
    return (
        <div className='slider-warpper'>
            <SliderList />
            <div className='footer'>
                <small>made by @FatimaAlmashhor</small>
            </div>
        </div>
    )
}

export default SliderSection
