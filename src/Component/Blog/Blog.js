import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

export const Blogs = () => {
    const data = useLoaderData();

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    data.map(value => <Card key={value.id} data={value}></Card>)
                }
            </div>
        </div>
    );
};

export default Blogs;