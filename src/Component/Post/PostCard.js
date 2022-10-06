import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
    console.log(post);
    const { id, title, body } = post
    const navigate = useNavigate()
    const handelNavigate = () => {
        navigate(`/post/${id}`)
    }

    return (


        <div className="p-5 duration-300 transform bg-gray-200 border-2 border-dashed rounded shadow-sm border-blue-400 hover:-translate-y-2 hover:border-solid ">
            <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-blue-500">
                    {id}
                </p>
                <p className="text-lg font-bold leading-5">{title.slice(0, 28)} </p>
            </div>
            <p className="text-sm text-gray-900">
                {body}
            </p>
            <div className='mt-2'>
                <Link className='bg-purple-500 h-6 rounded px-5 ' to={`/post/${id}`}>Visit</Link>
                <Link className='bg-gray-500 h-6 rounded px-5 ml-2' to={`/post/${id}`}><button>Visit</button></Link>
                <button className='bg-blue-500 h-6 rounded px-5 ml-2' onClick={handelNavigate}>Visit</button>
            </div>
        </div>



    );
};

export default PostCard;