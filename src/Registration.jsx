import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="bg-[url('/images/school.jpg')] bg-cover bg-center h-screen ">
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className="text-xl md:text-6xl font-bold text-white mb-4 mt-32 md:mt-52 ">Reunion of SCPSC All Batch</h1>
                <h3 className="text-lg md:text-4xl text-gray-300 mb-6"><span className='font-semibold'>Date:</span>  October 27, 2023 <br /><span className='font-semibold'>Venue:</span> School Compound</h3>
                <Link to="./form" className="btn btn-error sm:btn-sm md:btn-md lg:btn-lg">Register Here!</Link>
            </div>
        </div>
    );
};

export default Registration;