import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (

        <div className="navbar bg-primary text-primary-content flex-col md:flex-row justify-between">
            <div>
                <Link to="/" className='flex gap-1'>
                    <img className='logo-excap' src="/images/Excap_logo main.png" alt="" />
                    <p className='ml-2 title text-orange-500'>ExCap</p>
                </Link>
            </div>
            <div className='flex-col md:flex-row mt-4'>
                <Link to="/" className="btn btn-primary">Home</Link>
                <Link className="btn btn-primary">Registration</Link>
                <Link to="/modal" className="btn btn-primary">Contact Us</Link>
            </div>
        </div>

    );
};

export default Header;