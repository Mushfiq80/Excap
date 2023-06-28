import React from 'react';

const Video = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-violet-800 to-blue-900">
            <div className="w-4/5 lg:w-3/5 xl:w-1/2 p-6 flex flex-col">
                <div className="w-full h-96">
                    <iframe
                        title="YouTube Video"
                        className="w-full h-full shadow-lg rounded-lg"
                        src={`https://www.youtube.com/embed/TLDB_HmymnM`}
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="mt-6 text-white text-center">
                    <h1 className="text-3xl font-bold">In One Glance</h1>
                    <h2 className="text-lg mt-2">ExCap Executive committee activity Documentary</h2>
                </div>
            </div>
        </div>
    );
};

export default Video;


