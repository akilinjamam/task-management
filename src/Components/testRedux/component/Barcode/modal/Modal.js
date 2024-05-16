import React, { useRef, useState } from 'react';
import barcode from './Modal.module.css';
import { useReactToPrint } from 'react-to-print';
import Barcode from 'react-barcode';

const Modal = ({ showData, setOpen }) => {


    const contentToPrint = useRef(null);
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: true,
    });
    return (
        <div className={`${barcode.main} top_flex`}>
            <div style={{ width: '100%' }}>
                <div className={`${barcode.container}`}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }} ref={contentToPrint} >
                        {
                            showData?.map(barcode => {
                                return (
                                    <div style={{ marginBottom: '40px', marginTop: '20px' }}>
                                        <Barcode font={barcode.barcodeFont} width={2} height={40} value={barcode.code} />
                                    </div>

                                )
                            })
                        }
                    </div>

                </div>
                <br />
                <div style={{ width: '100%' }} className='around_flex'>

                    <button
                        className={barcode.button}
                        onClick={() => {
                            handlePrint(null, () => contentToPrint.current);
                        }}
                    >Print</button>
                    <button onClick={() => setOpen(false)} className={barcode.button}>Back</button>
                </div>
            </div>

        </div>
    );
};

export default Modal;