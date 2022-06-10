import React from 'react';
// import { Link } from 'react-router-dom';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='container mx-auto px-6'>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;