import React from 'react';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import CenterNav from '../../Shared/CenterNav/CenterNav';
import BrekingNews from '../BrekingNews/BrekingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar>
            <h1 className='text-3xl font-poppins text-center m-5'>This is home pages</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border border-white'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 border border-white'>
                    <CenterNav></CenterNav>
                </div>
                <div className='border border-white'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;