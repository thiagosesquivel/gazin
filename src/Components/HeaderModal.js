import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderModal({title, handleModal}) {
    return (
    <div className="flex flex-col mb-4">
        <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <Link to="/developers" className="font-bold text-base  rounded-md hover:bg-opacity-70 p-1 pl-4 pr-4 text-white bg-red-500">
                Cancelar
            </Link>
        </div>
        <hr></hr>
    </div>
    )
}
