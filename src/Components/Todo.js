import React, { useEffect, useState } from 'react';
import './Todo.css'
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import Loading from './Loading';

const Todo = () => {


    const [allow, setAllow] = useState('false')



    const handleComplete = (id) => {

        console.log('clicked')
        setAllow(!allow)
        const match = showTask.find(f => f._id === id)

        if (allow) {

            if (match) {


                console.log(match)

                const theDeed = {
                    done: match.task
                }

                fetch('https://fierce-plains-73609.herokuapp.com/done', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(theDeed)
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        alert('Task Completed')
                    })

            }

        }


    }

    const { data: showTask, isLoading, refetch } = useQuery('complete', () => fetch('https://fierce-plains-73609.herokuapp.com/complete', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>

    }


    return (
        <div>


            <div className='todo'>
                <p>Your To-do list: </p>
                <hr />
                <div>
                    {
                        showTask.map((t, index) =>
                            <div className='info'>
                                <div>
                                    <input onClick={() => handleComplete(t._id)} type="checkbox" name="" id="" />
                                    <span className='index'>{index + 1} :</span>
                                    <span> {t.task} </span>
                                </div>

                                <div>
                                    <Link to={`/updateList/${t._id}`}> <button className='btn btn-primary theBtn'>edit</button></Link>

                                </div>
                            </div>)
                    }
                </div>


            </div>

        </div>
    );
};

export default Todo;