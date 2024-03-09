import React from 'react';
import { useParams } from 'react-router-dom';

function User(props) {

    const {id} = useParams();

    return (
        <div className='bg-gray-700 text-white text-3xl p-4 flex items-center justify-center'>
            User: {id}
        </div>
    );
}

export default User;