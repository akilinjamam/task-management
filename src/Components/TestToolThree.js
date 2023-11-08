import React, { useEffect, useState } from 'react';

const TestToolThree = () => {
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(10);
    const [buttonNumber, setButtonNumber] = useState(10);
    const [modifiedButtonNumber, setModifiedButtonNumber] = useState()

    const roundedDataLength = Math.ceil(data?.length / 10);
    const totalDataLength = roundedDataLength * 10
    console.log(totalDataLength)

    const arrayOfObjects = [];
    for (let id = 1; id <= (totalDataLength / 10); id++) {
        const newObj = { id: id };
        arrayOfObjects.push(newObj);
    }

    let mappedArray = arrayOfObjects.map((obj) => {
        return {
            ...obj,
        };
    });

    console.log(mappedArray.length);

    const handlePage = (value) => {
        const pageNumber = value * 10;
        setNumber(pageNumber)
    }

    const makeLastDigitZero = (number) => {
        if (number % 10 !== 0) {
            number = Math.ceil(number / 10) * 10;
        }
        setModifiedButtonNumber(number)
    }

    useEffect(() => {
        makeLastDigitZero(mappedArray?.length)
        if (modifiedButtonNumber < buttonNumber) {
            setButtonNumber(10)

        };
    }, [buttonNumber, mappedArray, modifiedButtonNumber]);

    const handlePageButton = (value) => {
        if (value === 'decrease' && buttonNumber > 10) {
            setButtonNumber(buttonNumber - 10)
        } else if (value === 'increase') {
            setButtonNumber(buttonNumber + 10)
        }
    }

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        fetch(url).then(res => res.json()).then(res => setData(res))
    }, [])

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <div style={{ margin: 'auto', width: '700px', border: '1px solid gray', padding: '5px', marginTop: '50px' }}>
                <p>page no: {number.toString().slice(0, (number.toString().length - 1))}</p>
                <br />
                {
                    data?.slice((number - 10), number)?.map(d =>
                        <div key={d.id} style={{ display: 'flex' }}>
                            <p>{d.id}. </p>
                            <p>{d.name}</p>
                        </div>
                    )
                }
            </div>
            <br />
            <br />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={() => handlePageButton('decrease')}> <p style={{ fontSize: '25px', marginRight: '25px' }}>&lt;</p> </button>
                {
                    mappedArray?.slice((buttonNumber - 10), buttonNumber).map(m => {
                        return (
                            <div key={m.id} onClick={() => handlePage(m.id)} style={{ height: '25px', width: '25px', border: '1px solid red', margin: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <p >{m.id}</p>
                            </div>
                        )
                    })
                }
                <button onClick={() => handlePageButton('increase')}> <p style={{ fontSize: '25px', marginLeft: '15px' }}>&gt;</p> </button>
            </div>
        </div>
    );
};

export default TestToolThree;