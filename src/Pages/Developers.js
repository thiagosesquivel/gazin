import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/PageHeader'
import Dashboarrd from '../Layouts/Dashboarrd'
import Table from '../Components/Table';
import Modal from '../Components/Modal';
import Tag from '../Components/Tag';
import api from '../service';

export default function Developers() {
    const [developers, setDevelopers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        async function getData(){
            const {data} = await api.get('/developers');
            setDevelopers(data);
        }
        getData();
    },[]);

    function handleModal(){
        setShowModal(!showModal);
        
    }

    const columns = [
        {
            name:"Nome",
            key:"nome"
        },
        {
            name:"Idade",
            key:"idade",
        },{
            name:"Linguagens",
            key:'languages',
            render:(array)=>array.map((a)=>{
                return <Tag content={a.nome}/>
            })
        },
        {
            name:"Hobbies",
            key:"hobbies",
            render:(array)=>array.map((a)=>{
                return <Tag content={a.nome}/>
            })
        }
    ]


    return (
        <Dashboarrd view="developers">
            <PageHeader title="Devs" handleModal={handleModal} />
            <Table data={developers} columns={columns} />
        </Dashboarrd>
    )
}
