import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='h-[calc(100vh-16rem)] flex flex-col justify-center items-center '>
            <h1 className='text-8xl font-bold'>404</h1>
            <p className='my-5'>Sorry, Page Not Found.</p>
            <button className='btn btn-accent btn-sm' onClick={() => navigate('/')}>Homepage</button>
        </div>
    );
};

export default PageNotFound;