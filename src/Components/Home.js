
import './Home.css'
import Typewriter from 'typewriter-effect';

const Home = () => {



    return (
        <div>
            <div style={{ width: '100%', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'crimson', fontSize: '40px', fontWeight: 'bold' }}>
                <p className='typeWritter'>
                    <span > <Typewriter

                        options={{
                            strings: ["Impliment test", "Build something new"],
                            autoStart: true,
                            delay: 75,
                            loop: true
                        }}

                    />  </span>
                </p>

            </div>

        </div>

    );
};

export default Home;


