import React from 'react'

export default function Modal({children}) {
    return (
        <div className="w-screen h-screen fixed flex items-center justify-center top-0 left-0 bg-warmGray-900 bg-opacity-20">
            <div className="bg-white w-3/5 h-4/5 p-4">
                {children}
            </div>
        </div>
    )
}
