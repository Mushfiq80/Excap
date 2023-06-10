import React from 'react';
import Slideshow from './Pages/Slideshow';
import Welcome from './Welcome';
import Registration from './Registration';
import Video from './Video';

const Home = () => {
    return (
        <div>
            
                <Slideshow></Slideshow>
                <Welcome></Welcome>
                <Registration></Registration>
                <Video></Video>

        </div>
    );
};

export default Home;