import React from 'react';

const Instruction = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-10'>
            <h1 className='text-5xl text-white'>EXCAP Reunion SCPSC 2023</h1>
            <h3 className='text-3xl'>Manual for Online Registration</h3>
            {/* <div className='text-left'>
                <h3>১। <span>Name:</span> এখানে আপোর োম ইংনরজিনে জিখনেে।</h3>
                <p></p>
            </div> */}
            <img className='w-fit' src="https://i.ibb.co/g3YQRwp/manual.png" alt="" />

            <a className="btn btn-error sm:btn-sm md:btn-md lg:btn-lg" href="https://docs.google.com/forms/d/e/1FAIpQLScqjpLHRqLADckzTs6054yS1Jy3FZIcIdA6OK7Q3PygZWU1_g/viewform?usp=sf_link">Register Here!</a>
        </div>
    );
};

export default Instruction;


