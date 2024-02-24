import React from 'react';
import Slider from './testToolTwo/Slider';
import { sliderData } from '../sliderImgData/data';


const TestToolTwoV2 = () => {
    const data = sliderData
    return (
        <div style={{ width: '70%', margin: 'auto' }}>
            <br /><br />
            <Slider
                data={data}
                width_value='70%'
            />
        </div>
    );
};

export default TestToolTwoV2;