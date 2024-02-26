import React, { useEffect, useState } from 'react';
import tt4 from './Slider.module.css'

const Slider = ({ data, width_value = '100%', auto_slide = true }) => {

    const [copiedData, setCopiedData] = useState([]);
    const [count, setCount] = useState(0);
    const [pause, setPause] = useState(false);

    // console.log(copiedData)


    const findImageIdMapped = data?.map(m => {
        return m.id
    })

    const findImageId = findImageIdMapped?.slice(0, 1)
    // console.log(findImageId)
    const findFirstImage = data?.find(f => {
        return f.id === findImageId[0]
    })

    useEffect(() => {
        const handleTransition = () => {
            if (auto_slide) {
                if (pause) {
                    const increase = count + 0;
                    setCount(increase)
                } else {
                    const increase = count + 1;
                    setCount(increase)
                }

                if ((data?.length) <= (count)) {
                    setCount(0)
                }
            }
            if (copiedData) {
                setCopiedData([...data, findFirstImage])
            }
        };
        const interval = setInterval(handleTransition, 3000)
        return () => {
            clearInterval(interval);
        };
    }, [count, data, copiedData, findFirstImage, pause, auto_slide]);
    return (
        <div
            className={tt4.main}
        >
            <div className={tt4.container}>
                <div
                    onMouseEnter={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ width: `${copiedData.length * 100}%`, height: '100%', display: 'flex' }}>
                    {
                        copiedData.map(d => {
                            return (
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: `transform ${count > 0 ? 1 : 0}s`,
                                    transform: `translateX(${count * -100}%)`
                                }}>
                                    <img style={{ width: '100%', height: '100%', display: 'block' }} src={d?.bannerImg} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={tt4.slide_controller}>
                <div className={tt4.slide_controller_main}>
                    <span onClick={() => setCount(count > 1 ? count - 1 : () => setCount(data?.length))}>&lt;</span>
                    <span onClick={() => setCount(count === data?.length ? () => setCount(1) : count + 1)}>&gt;</span>
                    {/* <span onClick={() => setCount(count === 1 ? () => setCount(data?.length) : count - 1)}>&lt;</span>
                <span onClick={() => setCount(count === data?.length ? () => setCount(0) : count + 1)}>&gt;</span> */}
                </div>
            </div>
        </div>
    );
};

export default Slider;