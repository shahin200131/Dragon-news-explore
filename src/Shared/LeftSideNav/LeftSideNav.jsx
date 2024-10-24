import React, { useEffect, useState } from 'react';
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';
import news1 from '../../assets/1.png';
import news2 from '../../assets/2.png';
import news3 from '../../assets/3.png';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className='p-3 space-y-4'>
                <h1 className="text-3xl">All Categories</h1>
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className='block font-semibold text-xl ml-6 hover:bg-black p-2 rounded' key={category.id}>{category.name}</Link>)
                }
            </div>
            <div className='space-y-4'>
                <div className="card bg-base-100 mt-4 p-2">
                    <figure className='mb-5'>
                        <img
                            src={news1}
                            alt="News1" />
                    </figure>
                    <div className="">
                        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="card-actions justify-between mt-3">
                            <div className="badge ">Sports</div>
                            <div className="badge"> <SlCalender className='mr-2'></SlCalender>Oct 10, 2024</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 mt-4 p-2">
                    <figure className='mb-5'>
                        <img
                            src={news2}
                            alt="News2" />
                    </figure>
                    <div className="">
                        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="card-actions justify-between mt-3">
                            <div className="badge ">Sports</div>
                            <div className="badge"> <SlCalender className='mr-2'></SlCalender>Oct 10, 2024</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 mt-4 p-2">
                    <figure className='mb-5'>
                        <img
                            src={news3}
                            alt="News3" />
                    </figure>
                    <div className="">
                        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="card-actions justify-between mt-3">
                            <div className="badge ">Sports</div>
                            <div className="badge"> <SlCalender className='mr-2'></SlCalender>Oct 10, 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;