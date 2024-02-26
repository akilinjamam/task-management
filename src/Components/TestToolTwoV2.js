import React from 'react';
import Slider from './testToolTwo/Slider';
import { sliderData } from '../sliderImgData/data';


const TestToolTwoV2 = () => {
    const data = sliderData
    return (
        <div style={{ width: '70%', margin: 'auto' }} >

            <Slider
                data={data}
                auto_slide={true}
            />
        </div>
    );
};

export default TestToolTwoV2;