import React from 'react';
import Header from '../../Shared/Header/Header';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import Navbar from '../../Shared/Navbar/Navbar';

const NewsDetails = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4 gap-6'>
                <div className='col-span-3'>
                    <h1 className='text-3xl'>Drangon News Details</h1>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;