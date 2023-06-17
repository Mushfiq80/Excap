import React, { useState } from 'react';

const Modal = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        history.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={openModal}
            >
                Open Modal
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8">
                        <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
                        <p>অেিাইে থরজিনেিে সংক্রান্ত থেনক্াে প্রনয়ািনে থোগানোগ ক্রুে অেো থমইি ক্রুে জেনের ঠিক্াোয়। <br />
                            Mobile Contact 01727281180, 01831800200, 01300745458 <br />
                            ইনমইিঃ reunion.excap.scpsc@gmail.com</p>
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={closeModal}
                            
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;