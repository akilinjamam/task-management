import React, { useEffect, useRef, useState } from 'react';
import './TestTool.css';

const TestTool = () => {

    const [pause, setPause] = useState(false);

    const parentRef = useRef(null);

    useEffect(() => {
        let parentElement = parentRef.current;

        // Function to scroll the parent div horizontally
        const scrollHorizontally = () => {
            if (pause) {
                parentElement.scrollLeft += 0;
            } else {
                parentElement.scrollLeft += 1;
            }
            console.log(parentElement.scrollWidth)
            console.log(parentElement.scrollLeft + parentElement.clientWidth)


            if ((parentElement.scrollLeft + parentElement.clientWidth) + 1 === parentElement.scrollWidth) {
                parentElement.scrollLeft = 0; // Reset the scroll position to the beginning
            }
        };

        // Start the interval to scroll the parent div horizontally
        let interval = setInterval(scrollHorizontally, 10); // Adjust the interval duration as needed
        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, [pause]);

    return (
        <div className='testToolMain'>
            <div
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                className="parent" ref={parentRef}>
                <div className="child">
                    {Array.from({ length: 30 }).map((index) => (
                        <div className="element" key={index}></div>
                    ))}
                </div>p
            </div>
        </div>
    );
};

export default TestTool;