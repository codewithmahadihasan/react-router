import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Single from './Single';

const CardDitais = () => {
    const cards = useLoaderData();


    return (
        <div>
            <Single card={cards}></Single>
        </div>
    );
};

export default CardDitais;