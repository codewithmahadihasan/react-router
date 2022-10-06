import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDitails = () => {
    const data = useLoaderData()
    // console.log(data);
    const navigator = useNavigate()
    const navHandeling = () => {
        navigator(`/blog/${data.userId}`)
    }
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <p className="inline-block max-w-lg font-sans text-3xl font-bold mb-10 leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl capitalize">
                Details About Post Number : {data.id}
            </p>
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                <div className="mb-4">
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl capitalize"
                    >
                        {data.title.slice(0, 40)}
                    </a>
                </div>
                <p className="text-base text-gray-700 md:text-lg capitalize">
                    {data.body}
                </p>
                <button className='bg-blue-500 px-4 py-1 text-xl mt-10 rounded hover:bg-blue-700 text-white' onClick={navHandeling}>Author Details</button>
            </div>

        </div>
    );
};

export default PostDitails;