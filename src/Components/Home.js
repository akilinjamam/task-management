
import './Home.css'
import Todo from './Todo';
import Typewriter from 'typewriter-effect';

const Home = () => {


    const handlePress = event => {

        event.preventDefault()
        const task = event.target.task.value

        const theTask = {
            task: task
        }

        fetch('https://fierce-plains-73609.herokuapp.com/complete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(theTask)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('added to To-Do List')
            })




    }
    return (
        <div>
            <br /><br />
            <div className='main'>
                <div>
                    <div>
                        <p className='typeWritter'>
                            <span > <Typewriter

                                options={{
                                    strings: ["Make Task", " Do Complete"],
                                    autoStart: true,
                                    delay: 75,
                                    loop: true
                                }}

                            />  </span>
                        </p>
                        <br /><br />
                    </div>
                    <form onSubmit={handlePress}>
                        <input placeholder='type your daily task...' className='styles' type="text" name="task" required />
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


