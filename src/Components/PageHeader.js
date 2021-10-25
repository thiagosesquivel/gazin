import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHeader({title}) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between mb-1">
                <h1 className="text-3xl font-bold">{title}</h1>
                <Link to="add/developers" className="font-bold text-base  rounded-md hover:bg-opacity-70 p-1 pl-4 pr-4 bg-indigo-500 text-white">
                    Novo
                </Link>
            </div>
            <hr></hr>
        </div>
    )
}
