import React from 'react';
import { Link  } from 'react-router-dom';
import { AiOutlineUser} from 'react-icons/ai'

export default function Sidenav({view}) {
    return (
        <div className="bg-blueGray-700 h-full w-20 rounded-xl flex flex-col items-center justify-between pt-4 pb-4">
                <div className="flex flex-col">
                    <Link  to="/developers" className={`p-2 rounded-md link hover:text-white text-gray-300 hover:bg-blueGray-500 mb-2 relative inline-block  ${view==='developers' && 'bg-blueGray-500 text-white'}`}>
                        <AiOutlineUser className="w-6 h-6"/>
                        <span className="shadow-md bg-white pr-2 pl-2 text-black top-0 hidden absolute z-10 left-16 opacity-0 transition-opacity rounded p-1">Devs</span>                        
                    </Link>
                </div>
        </div>
    )
}
