import React, { useEffect, useState } from 'react';
import './TestToolTwo.css';

const TestToolTwo = () => {
    const [data, setData] = useState([]);
    const [copiedData, setCopiedData] = useState([]);
    const [count, setCount] = useState(0);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        const url = 'https://assignment-10-server.onrender.com/api/v1/bannerEvents';
        fetch(url).then(res => res.json()).then(res => setData(res))
    }, [])

    const findImageIdMapped = data?.result?.map(m => {
        return m._id
    })

    const findImageId = findImageIdMapped?.slice(0, 1)
    console.log(findImageId)
    const findFirstImage = data?.result?.find(f => {
        return f._id === findImageId[0]
    })

    useEffect(() => {
        const handleTransition = () => {
            if (pause) {
                const increase = count + 0;
                setCount(increase)
            } else {
                const increase = count + 1;
                setCount(increase)
            }

            if ((data?.result?.length) <= (count)) {
                setCount(0)
            }
            if (copiedData) {
                setCopiedData([...data?.result, findFirstImage])
            }
        };
        const interval = setInterval(handleTransition, 3000)
        return () => {
            clearInterval(interval);
        };
    }, [count, data, copiedData, findFirstImage, pause]);
    return (
        <div className='testToolTwo'>
            <div className='testToolTwoMain'>
                {
                    copiedData?.map(d =>
                        <div key={d.id}
                            style={{
                                transition: `transform ${count > 0 ? 1 : 0}s`,
                                transform: `translateX(${count * -100}%)`,
                            }}

                        >
                            <div
                                style={{ width: '100vw', animationDuration: '16s', }}
                                onMouseEnter={() => setPause(true)}
                                onMouseLeave={() => setPause(false)}
                            >
                                <img style={{ height: '70vh', width: '100vw' }} src={d?.bannerImg} alt="" />

                            </div>
                        </div>
                    )
                }
            </div>
            <div className="slide-controller">
                <div className='slide-controller-main'>
                    <span onClick={() => setCount(count === 1 ? () => setCount(data?.result?.length) : count - 1)}>&lt;</span>
                    <span onClick={() => setCount(count === data?.result?.length ? () => setCount(0) : count + 1)}>&gt;</span>
                </div>
            </div>
        </div>
    );
};

export default TestToolTwo;