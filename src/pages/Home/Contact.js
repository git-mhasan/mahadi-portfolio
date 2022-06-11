import React, { useState } from 'react';
import { toast } from 'react-toastify';
import contact from './../../assets/images/contact.jpg';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        const templateParams = {
            from_name: name,
            message: message,
            reply_to: email
        };

        emailjs.send(process.env.REACT_APP_EMAILJS_SERV_KEY, process.env.REACT_APP_EMAILJS_TEMPL_KEY, templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then(function (response) {
                toast.success('Email Sent Successfully!');
                event.target.reset()
            }, function (err) {
                toast.error('Email Sending Failed:' + err);
            });;

    }

    return (
        <>
            <div className='flex justify-center my-16'><h2 className='text-4xl text-black-500'>Contact Me</h2></div>
            <div className='flex flex-col md:flex-row m-6 md:m-16'>
                <div className='h-[400px] md:w-1/2 flex items-center justify-center'>
                    <img src={contact} alt="" />
                </div>
                <div className='pl-12 bg-accent h-[400px] md:w-1/2 p-4'>

                    <p className="mb-2 font-bold text-xl text-center text-white">Leave me a message</p>

                    <form onSubmit={handleSubmit}>
                        <label className='label'>
                            <span className="label-text font-bold text-white">Enter your name:</span>
                        </label>
                        <input
                            className='input input-bordered input-info input-sm w-full max-w-xs mt-1 mb-3 ml-1'
                            type="text"
                            required
                            // value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label className='label'>
                            <span className="label-text font-bold text-white">Enter your email:</span>
                        </label>
                        <input
                            className='input input-bordered input-info input-sm w-full max-w-xs mt-1 mb-3 ml-1'
                            type="email"
                            required
                            // value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className='label'>
                            <span className="label-text font-bold text-white">Your Message:</span>
                        </label>
                        <textarea
                            className="textarea textarea-info w-full max-w-xs mt-1 mb-3 ml-1"
                            required
                            // value={message}
                            maxLength={250}
                            onChange={(e) => setMessage(e.target.value)}
                        />


                        <input
                            type="submit"
                            className='btn btn-sm block content-center' />
                    </form>
                </div>
            </div>
        </>

    );
};

export default Contact;