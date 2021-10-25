import React from 'react'

export default function Tag({content}) {
    return (
        <label className="rounded-md p-1 hover:bg-opacity-70 cursor-pointer text-warmGray-400 bg-warmGray-200 mr-1">
            {content}
        </label>
    )
}
