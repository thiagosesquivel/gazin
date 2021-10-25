import React from 'react'
import RoundedButton from './RoundedButton';
import { FaTrashAlt, FaEdit} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Table({data, columns}) {
    return (
    <div className="overflow-auto" style={{height:"500px"}}>
            <table className="min-w-full divide-y divide-gray-200 mt-6">
                <thead className="bg-gray-100">
                    <tr className="p-4 text-xl rounded-tl-lg rounded-tr-lg">
                       {columns.map(column=><th  scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{column.name}</th>)}
                        <td className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d=>{
                        return(
                            <tr className="text-center p-2 border-b border-solid border-gray-200" key={d.id}>
                                {                                
                                    columns.map(column=>{
                                        if(column.render){

                                            const string = column.render(d[column.key]);
                                            return <td className="px-6 py-4 whitespace-nowrap">{string}</td>                                            
                                        }
                                        return (<td className="px-6 py-4 whitespace-nowrap">{d[column.key]}</td>);
                                    })
                                }
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex">
                                            <Link to={`/developers/${d.id}`} style={{borderRadius:'50%'}} className="bg-blue-500 mr-1 text-white h-8 w-8 flex items-center justify-center hover:bg-opacity-70">
                                                <FaEdit/>
                                            </Link>
                                            <RoundedButton  className="bg-red-500 text-white h-8 w-8 flex items-center justify-center hover:bg-opacity-70">
                                                <FaTrashAlt/>
                                            </RoundedButton>
                                        </div>
                                    </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
