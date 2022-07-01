import React, { useEffect, useState } from 'react';
import './CompleteTask.css'

const CompletedTask = () => {

    const [showDone, setShowDone] = useState([])

    useEffect(() => {
        fetch('https://fierce-plains-73609.herokuapp.com/done', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })

            .then(res => res.json())
            .then(data => setShowDone(data))
    }, [])
    return (
        <div className='todo' style={{ marginBottom: '40px', marginTop: '20px' }}>
            <br />
            {
                showDone.map((s, index) =>
                    <div className='done'>
                        <p style={{ marginRight: '10px' }}> {index + 1}</p>
                        <p> {s.done} </p>
                    </div>)
            }
        </div>
    );
};

export default CompletedTask;