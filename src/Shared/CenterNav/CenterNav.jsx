import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RxBookmark } from "react-icons/rx";
import { PiShareNetworkLight } from "react-icons/pi";
import { MdRemoveRedEye } from "react-icons/md";

const CenterNav = () => {
    const [news, setNews] = useState([]);
    const [visibleNews, setVisibleNews] = useState(5);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    const handlemorebutton = () => {
        setVisibleNews(news.length-10)
    }
    return (
        <div className='space-y-4'>
            <h1 className='text-3xl p-2'>Dragon News Home</h1>
            {
                news.slice(0, visibleNews).map(neews => <div key={neews._id} className='space-y-4'>
                    <div className='flex justify-between bg-black p-4'>
                        <div className='flex  items-center'>
                            <img className='ring-4 w-10 h-10 mr-4' src={neews.author.img} alt="" />
                            <div>
                                {neews.author.name}
                                <br />
                                {neews.author.published_date}
                            </div>
                        </div>
                        <div className='flex space-x-4 text-2xl pr-5'>
                            <RxBookmark></RxBookmark>
                            <PiShareNetworkLight />
                        </div>
                    </div>
                    <div className='p-4 space-y-4'>
                        <h2>{neews.title}</h2>
                        <img src={neews.image_url} alt="" />
                        {
                            neews.details.length > 200 ?
                            <p>{neews.details.slice(0,200)} <Link to={`/newsdetails/${neews._id}`} className='text-pink-400 font-semibold'>Read More ...</Link></p>
                            :
                            <p>{neews.details}</p>
                        }
                    </div>
                    <div className='flex justify-between px-5 pb-4'>
                        <p>Ratings : {neews.rating.number}</p>
                        <p className='flex items-center'><MdRemoveRedEye className='mr-4'></MdRemoveRedEye> <span>{neews.total_view}</span></p>
                    </div>

                </div>)
            }
            {visibleNews < news.length && (<button onClick={handlemorebutton} className='p-3 btn btn-success'>Show More</button>
            )}
        </div>

    );
};

export default CenterNav;