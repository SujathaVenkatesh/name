// Home.jsx
import React, { useEffect } from 'react';

import Forms from './Forms';
import Map from './Map';
// import { Calendar } from 'antd';

function Contact() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, [])
    return (
        <>
        <div className='w-full h-[230px] grid place-items-center relative' style={{ backgroundImage: `url(${require('../../assets/baner.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-xl lg:text-3xl font-bold uppercase">Contact Us</h2>
        <div className="flex items-center mt-2">
        <p className="text-sm"><a href="/">Home</a></p>
            <p className="text-sm mx-2">/</p>
            {/* <p className="text-sm"><a href="/services">Services</a></p> */}
            {/* <p className="text-sm mx-2">/</p> */}
            <p className="text-sm" >Contact Us</p>
        </div>
    </div>
</div>
        <Forms/>
        <Map/>
        {/* <Calendar/> */}
        </>
    );
}

export default Contact;
