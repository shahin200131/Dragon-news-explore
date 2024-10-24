import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-4'>
                <h1 className='text-3xl'>Login with</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Github
                </button>
            </div>
            <div className='p-4'>
                <h1 className='text-3xl mb-4'>Find Us On</h1>
                <a className='flex items-center border rounded-t-lg p-2' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className='flex items-center border-x p-2' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    Twitter
                </a>
                <a className='flex items-center border p-2 rounded-b-lg' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className='p-1'>
                <h1 className='text-3xl mb-8 p-4'>Q-Zone</h1>
                <img className='mb-4' src={qzone1} alt="" />
                <img className='mb-4' src={qzone2} alt="" />
                <img className='mb-4' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;