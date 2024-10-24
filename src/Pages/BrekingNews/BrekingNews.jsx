import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BrekingNews = () => {
    return (
        <div className='m-3 flex bg-gray-400 text-black'>
            <button className='btn btn-secondary'>Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} className=''>
                <Link to='/' className='ml-10'>I can be a React component, multiple React components, or just some text.</Link>
                <Link className='ml-10'>I can be a React component, multiple React components, or just some text.</Link>
                <Link className='ml-10'>I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BrekingNews;