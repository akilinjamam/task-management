import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Calender.css'
import calender from '../calender.jpg'

const Calender = () => {

    const [selected, setSelected] = useState(new Date());

    console.log(selected)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap-reverse', marginTop: '20px' }}>

            <div className='date'>
                {
                    <DayPicker mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    ></DayPicker>
                }
            </div>

            <div>
                <img src={calender} alt="" />
            </div>
        </div>
    );
};

export default Calender;