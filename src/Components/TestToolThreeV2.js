import React, { useEffect, useState } from 'react';
import Pagination from './testToolThree/Pagination';

const TestToolThreeV2 = () => {
    const [data, setData] = useState([]);
    const [paginatedData, setPaginatedData] = useState();
    const [pageNumber, setPageNumber] = useState();
    console.log('result :', paginatedData);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        fetch(url).then(res => res.json()).then(res => setData(res))
    }, [])



    return (
        <div style={{ width: '100%' }}>
            <div style={{ margin: 'auto', width: '700px', border: '1px solid gray', padding: '5px', marginTop: '50px' }}>
                <p>page no: {pageNumber}</p>
                <br />
                {
                    paginatedData?.map(d =>
                        <div key={d.id} style={{ display: 'flex' }}>
                            <p>{d.id}. </p>
                            <p>{d.name}</p>
                        </div>
                    )
                }
            </div>
            <br />
            <br />
            <Pagination
                data={data}
                container={setPaginatedData}
                pageNumber={setPageNumber}
                isBorder={true}
                perPageNo={10}
                border='black'
                background={true}
            />
        </div>
    );
};

export default TestToolThreeV2;