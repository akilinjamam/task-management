import React, { useEffect, useState } from 'react';

const Pagination = ({ data, container, pageNumber, perPageNo = 10, isBorder = false, border = 'green', background = false }) => {

    const defaultPageNo = perPageNo;

    const [number, setNumber] = useState(defaultPageNo);
    const [buttonNumber, setButtonNumber] = useState(defaultPageNo);
    const [modifiedButtonNumber, setModifiedButtonNumber] = useState()

    const roundedDataLength = Math.ceil(data?.length / defaultPageNo);
    const totalDataLength = roundedDataLength * defaultPageNo
    console.log(totalDataLength)

    const arrayOfObjects = [];
    for (let id = 1; id <= (totalDataLength / defaultPageNo); id++) {
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
        const pageNumber = value * defaultPageNo;
        setNumber(pageNumber)
    }



    useEffect(() => {
        const makeLastDigitZero = (number) => {
            if (number % defaultPageNo !== 0) {
                number = Math.ceil(number / defaultPageNo) * defaultPageNo;
            }
            setModifiedButtonNumber(number)
        }
        makeLastDigitZero(mappedArray?.length)
        if (modifiedButtonNumber < buttonNumber) {
            setButtonNumber(defaultPageNo)

        };
    }, [buttonNumber, mappedArray, modifiedButtonNumber, defaultPageNo]);



    const handlePageButton = (value) => {
        if (value === 'decrease' && buttonNumber > defaultPageNo) {
            setButtonNumber(buttonNumber - defaultPageNo)
        } else if (value === 'increase') {
            setButtonNumber(buttonNumber + defaultPageNo)
        }
    }

    useEffect(() => {
        const paginatedData = data?.slice((number - defaultPageNo), number);
        container(paginatedData)
        pageNumber(number / defaultPageNo)
    }, [container, pageNumber, number, defaultPageNo, data])


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={() => handlePageButton('decrease')}> <p style={{ fontSize: '25px', marginRight: '25px' }}>&lt;</p> </button>
            {
                mappedArray?.slice((buttonNumber - defaultPageNo), buttonNumber).map(m => {
                    return (
                        <div
                            key={m.id}
                            onClick={() => handlePage(m.id)}

                            style={{
                                height: '25px',
                                width: '25px',
                                border: `${isBorder ? `1px solid ${m.id === (number / defaultPageNo) ? `${border}` : 'red'}` : ''}`,
                                borderRadius: '5px',
                                margin: '5px', display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backgroundColor: `${background ? `${m.id === (number / defaultPageNo) ? 'lightGray' : ''}` : ''}`
                            }}
                        >
                            <p >{m.id}</p>
                        </div>
                    )
                })
            }
            <button onClick={() => handlePageButton('increase')}> <p style={{ fontSize: '25px', marginLeft: '15px' }}>&gt;</p> </button>
        </div>
    );
};

export default Pagination;