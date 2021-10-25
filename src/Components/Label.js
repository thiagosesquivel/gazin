import React from 'react'

export default function Label({children}) {
    return (
       <label className="font-bold text-warmGray-500">
           {children}
       </label>
    )
}
