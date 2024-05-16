import React, { useState } from 'react';

const CrudNesting = () => {

    const [data, setData] = useState([{
        fName: '',
        lName: ''
    }])


    const handleAdd = () => {
        setData([...data, { fName: "", lName: "" }])
    }

    const handleChange = (e, i) => {
        const { name, value } = e.target
        const changeValue = [...data];

        changeValue[i][name] = value;
        setData(changeValue)
    }

    const handleRemove = (i) => {
        const deleteValue = [...data];


        deleteValue.splice(i, 1);
        // or
        // const removedValue = deleteValue.filter((f, index) => index !== i)

        setData(deleteValue)
    }

    return (
        <div>
            {
                data.map((input, index) => {
                    return (
                        <div>
                            <input style={{ border: '1px solid gray' }} name="fName" value={input.fName} type="text"
                                onChange={(e) => handleChange(e, index)}
                            />
                            <input style={{ border: '1px solid gray' }} name="lName" value={input.lName} type="text"
                                onChange={(e) => handleChange(e, index)}
                            />
                            <button onClick={() => handleRemove(index)}>remove</button>
                        </div>
                    )
                })
            }
            <button onClick={handleAdd}>add</button>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default CrudNesting;