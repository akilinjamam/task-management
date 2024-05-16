import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import getAllTodos from "../state-management/action/Action";



const Todos = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const { todos, isLoading, error } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
        setData(todos)
        setLoading(isLoading)
    }, [dispatch, isLoading, todos])

    return (
        <div>
            <h2>All todos:</h2>
            {loading && <p style={{ color: 'black' }}>Loading...</p>}
            <hr />
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
            <div style={{ width: '100%', height: '400px', border: '1px solid gray', overflowX: 'hidden', overflowY: 'scroll', display: 'flex', flexWrap: 'wrap' }}>

                {
                    data && data?.map(data => {
                        return (
                            <div key={data.id} style={{ width: '49%', border: '1px solid red', height: '200px', backgroundColor: 'blue', color: 'white', margin: '5px' }}>
                                <div>
                                    <p>{data.id}</p>
                                    <p>{data.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Todos;