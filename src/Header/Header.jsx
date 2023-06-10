import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (

        <div className="navbar bg-primary text-primary-content flex-col md:flex-row justify-between">
            <div>
                <img className='logo-excap' src="/images/Excap_logo main.png" alt="" />
                <p className='ml-2 title text-orange-500'>ExCap</p>
            </div>
            <div className='flex-col md:flex-row mt-4'>
                <Link className="btn btn-primary">Registration</Link>
                <Link className="btn btn-primary">Contact Us</Link>
            </div>
        </div>

    );
};

export default Header;