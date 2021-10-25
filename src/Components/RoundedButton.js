import React from 'react'

export default function RoundedButton({className, children}) {
    return (
        <button className={className} style={{borderRadius:'50%'}}>
            {children}
        </button>
    )
}
