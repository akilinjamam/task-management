import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateList = () => {

    const { id } = useParams()

    const handleUpdate = (event) => {

        const updateTask = event.target.updated.value

        const updateTaskData = {

            task: updateTask
        }

        fetch(`https://fierce-plains-73609.herokuapp.com/complete/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTaskData)
        })

            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log(data)

                if (data) {
                    alert('task updated')
                }

            })

    }


    return (
        <div style={{ border: '1px solid gray', width: '360px', margin: 'auto', padding: '20px', borderRadius: '10px' }}>


            <form onSubmit={handleUpdate}>
                <input style={{ border: '1px solid black', width: '100%', textAlign: 'center', padding: '5px' }} placeholder='update your task' type="text" name="updated" id="" required />
                <br /><br />
                <input style={{ width: '100%' }} className='btn btn-primary' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateList; 