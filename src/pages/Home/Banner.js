import React from 'react';
import bg from '../../assets/images/laptop.png';
import profilePic from '../../assets/images/mahadi.png';
import TypeAnimation from 'react-type-animation';

const Banner = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})`, width: "100%", height: "400px" }} className="image-full relative bg-gradient-to-b from-sky-500 to-indigo-500">
                <img src={profilePic} alt="" className='h-[300px] w-[300px] border rounded-full items-end absolute left-5 md:left-16 top-60' />
            </div>
            <div className='flex flex-col lg:flex-row justify-center my-6'>
                <div className='h-[200px] w-[200px] '></div>
                <div>
                    <div className='pl-3 border-l-4 border-accent'>
                        <h1 className='text-5xl font-bold'>Hi, I am Mahadi</h1>

                        <div className='mt-3 ml-1 text-2xl font-bold text-accent'>
                            [    <TypeAnimation
                                className="inline"
                                cursor={false}
                                sequence={['A full stack web developer', 1000, '']}
                                repeat={Infinity}
                                wrapper="h2"
                            /> ] </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;