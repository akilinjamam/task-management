import React, { useEffect, useState } from 'react';
import './BarcodeGen.css'
import Modal from './modal/Modal';

const BarcodeGen = () => {

    const [open, setOpen] = useState(false);

    const [showData, setShowData] = useState([]);
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');

    const [data, setData] = useState({
        material: '',
        frameType: '',
        size: '',
        shape: '',
    });

    const optionField = [

        {
            value: '',
            variable: 'material',
            placeholder: 'SELECT MATERIAL',
            options: {
                typeOne: 'metal',
                typeTwo: 'plastic',
                typeThree: 'acetate',
                typeFour: 'titanium',
                typeFive: 'wood',
                typeSix: 'texture',
            },
            keys: 7

        },
        {
            value: '',
            variable: 'frameType',
            placeholder: 'SLECT TYPES OF FRAME',
            options: {
                typeOne: 'full-Rim',
                typeTwo: 'half-Rim',
                typeThree: 'rimless',
            },
            keys: 3
        },
        {
            value: '',
            variable: 'size',
            placeholder: 'SELECT SIZE',
            options: {
                typeOne: 'medium',
                typeTwo: 'large',
                typeThree: 'small',
            },
            keys: 3
        },
        {
            value: '',
            variable: 'shape',
            placeholder: 'SELECT SHAPE',
            options: {
                typeOne: 'oval',
                typeTwo: 'round',
                typeThree: 'square',
                typeFour: 'cat eye',
                typeFive: 'Rectangle',
                typeSix: 'aviator',
                typeSeven: 'browline',
                typeEight: 'horn',
            },
            keys: 8
        },

    ]


    const date = new Date();

    useEffect(() => {
        const alphabetMap = {
            '1': 'K',
            '2': 'E',
            '3': 'Y',
            '4': 'R',
            '5': 'G',
            '6': 'H',
            '7': 'N',
            '8': 'O',
            '9': 'D',
            '0': 'X'
        };

        let convertedString = '';
        for (let digit of number) {
            if (alphabetMap.hasOwnProperty(digit)) {
                convertedString += alphabetMap[digit];
            } else {
                // If the digit is not mapped, keep it as is
                convertedString += digit;
            }
        }

        setResult(convertedString);
    }, [number])

    const handleSubmit = () => {

        const allData = {
            price: number,
            material: data?.material,
            size: data?.size,
            shape: data?.shape,
            code: `${result}${data.material.slice(0, 1)}${data.frameType.slice(0, 1)}${data.size.slice(0, 1)}${data.shape.slice(0, 1)}${date.getTime()}`,
            frameType: data.frameType
        }

        if (allData.price !== '' && allData.material !== '' && allData.size !== '' && allData.shape !== '') {

            setShowData(prevData => [...prevData, allData]);
            setMessage('');
        } else {
            setMessage('can not keep any input filed emply')
        }
    }

    return (
        <div className='barcode_main'>
            <table className='my_table'>
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Material</th>
                        <th>FrameType</th>
                        <th>Size</th>
                        <th>Shape</th>
                        <th>Product Code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showData?.map(data => {
                            return (
                                <tr>
                                    <td>{data.price}</td>
                                    <td>{data.material}</td>
                                    <td>{data.frameType}</td>
                                    <td>{data.size}</td>
                                    <td>{data.shape}</td>
                                    <td>{data.code}</td>
                                </tr>
                            )
                        })
                    }
                    <tr></tr>
                </tbody>
                <br />
                <tbody>
                    <tr>
                        <td><input type="number" placeholder='type your price'
                            onChange={(e) => {
                                setNumber(e.target.value);
                            }}
                        /></td>
                        {
                            optionField.map(select => {
                                return (
                                    <td key={select?.id}>
                                        <select onChange={(e) => {
                                            setData({ ...data, [select.variable]: e.target.value })
                                        }}>
                                            <option className='italic' value="">{select?.placeholder}</option>
                                            {Object.keys(select.options).map((optionKey, optionIndex) => (
                                                <option key={optionIndex} value={select.options[optionKey]}>
                                                    {select.options[optionKey]}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                )
                            })
                        }
                        <td>
                            <button onClick={handleSubmit} className='btn btn-sm'>ADD</button>
                            <button onClick={() => {
                                if (showData?.length > 0) {
                                    setOpen(!open);
                                    setMessage('')
                                } else {
                                    setMessage('no product found for generating code')
                                }
                            }} className='btn btn-sm ml-5'>GENERATE BARCODE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            {message && <p className='text-red-500'>{message}</p>}
            <div style={{ display: `${open ? 'block' : 'none'}` }}>
                <div className='barcode_modal middle_flex'>
                    <div className="barcode_modal_container">
                        <div>
                            <Modal showData={showData} setOpen={setOpen}></Modal>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarcodeGen;