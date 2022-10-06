import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {

    return (
        <div>
            <div className="overflow-hidden transition-shadow border-2 bg-purple-50 p-5 border-dashed rounded shadow-sm border-blue-400 hover:-translate-y-1 hover:border-solid">
                <a href="/" aria-label="Article">
                    <img
                        src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        className="object-cover w-full h-64 rounded"
                        alt=""
                    />
                </a>
                <div className="py-5">
                    <p className="mb-2 text-xs font-semibold text-gray-600 lowercase">
                        {data.email}
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        <p className="text-2xl font-bold leading-5">{data.name}</p>
                    </a>
                    <p className="mb-4 text-gray-700">
                        {data.username}
                    </p>
                    <div className="flex space-x-4 justify-center">
                        <a
                            href="/"
                            aria-label="Likes"
                            className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                        >
                            <div className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                >
                                    <polyline
                                        points="6 23 1 23 1 12 6 12"
                                        fill="none"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                    />
                                </svg>
                            </div>
                            <p className="font-semibold">7.4K</p>
                        </a>
                        <a
                            href="/"
                            aria-label="Comments"
                            className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                        >
                            <div className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                >
                                    <polyline
                                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                                        fill="none"
                                        strokeMiterlimit="10"
                                    />
                                    <polygon
                                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                    />
                                </svg>
                            </div>
                            <p className="font-semibold">81</p>
                        </a>

                    </div>
                    <Link
                        to={`/blog/${data.id}`}
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 mt-3 focus:shadow-outline focus:outline-none"
                    >
                        Learn more
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Card;