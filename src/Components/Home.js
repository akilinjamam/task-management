
import './Home.css'
import Todo from './Todo';

const Home = () => {


    const handlePress = event => {


        const task = event.target.task.value

        const theTask = {
            task: task
        }

        fetch('https://radiant-plains-45803.herokuapp.com/complete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(theTask)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);

            })




    }
    return (
        <div>

            <div className='main'>
                <div>
                    <form onSubmit={handlePress}>
                        <input placeholder='type your daily task...' className='styles' type="text" name="task" />
                    </form>
                </div>

                <div>
                    <Todo></Todo>
                </div>
            </div>
        </div>

    );
};

export default Home;


