import React from 'react'
import Sidenav from '../Components/Sidenav'
import { ToastContainer } from 'react-toastify';


export default function Dashboarrd({children, view}) {
    return (
        <div className="w-screen h-screen p-4 flex bg-gray-50">
            <Sidenav view={view}/>
            <main className="p-8 bg-white ml-6 shadow-md" style={{width: "calc( 100% - 5rem)"}}>
                {children}
            </main>
            <ToastContainer autoClose={2000}/>

        </div>
    )
}
