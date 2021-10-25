import React from 'react'

export default function Button({className, children, click=null, type='submit'}) {
    return (
       <button className={` font-bold text-base  rounded-md hover:bg-opacity-70 p-1 pl-4 pr-4  ${className}`} onClick={click && click} type={type}>
           {children}
       </button>
    )
}
