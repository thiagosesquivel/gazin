import React, { useEffect, useState } from 'react'
import Label from '../Components/Label'
import HeaderModal from '../Components/HeaderModal'
import {useForm} from 'react-hook-form';
import Button from '../Components/Button';
import ReactTagInput from "@pathofdev/react-tag-input";
import api from '../service';
import {toast} from 'react-toastify'
import moment from 'moment';
import Dashboarrd from '../Layouts/Dashboarrd'
import { useParams } from 'react-router';



export default function FormEditDeveloper({ handleModal, setDevelopers}) {
    const [hobbies, setHobbies] = useState([]);
    const [developer, setDeveloper] = useState(null);
    const [languages, setLanguages] = useState([]);
    const {id} = useParams();
    const {register, handleSubmit} = useForm(developer);

    useEffect(()=>{
        async function getData(){
            const {data} = await api.get(`developers/${id}`);
            setDeveloper(data)
            setLanguages(data.languages.map(l=>l.nome));
            setHobbies(data.hobbies.map(l=>l.nome));
        }
        getData();
    },[]);

    const onSubmit = async data => {
        const idade =  moment(data.datanascimento,"YYYYMMDD").fromNow();
        const newHobies = hobbies.map((hobbies)=>{ return {nome:hobbies}});
        const newLanguages = languages.map((language)=>{ return {nome:language}});
        const newData = {...data, idade, hobbies: newHobies, languages:newLanguages}
        const response = await api.put(`/developers/${id}`, newData) 
        if(response.status===200){
            toast.success('Desenvolvedor alterado com sucesso');
            handleModal();
            const {data} = await api.get('/developers');
            setDevelopers(data);
        }else{
            toast.error(response.message);
        }
    }

   

    return (
    <Dashboarrd >
        <HeaderModal title={developer ? 'Editar desenvolvedor':'Adicionar desenvolvedor'} handleModal={handleModal}/>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-3/5">
                <Label>Nome do desenvolvedor</Label>
                <input defaultValue={developer && developer.nome} className="border border-gray-200 p-1 focus:outline-none"  {...register('nome',{required:true})}/>
            </div>
            <div className="flex">
                <div className="flex flex-col w-1/4 mr-2">
                    <Label>Data de nascimento</Label>
                    <input defaultValue={developer && new Date(developer.datanascimento)} className="border border-gray-200 p-1 focus:outline-none" type="date"   {...register('datanascimento',{required:true})} />
                </div>
            </div>
            <div className="flex flex-col">
                <Label>Sexo:</Label>
                <div className="flex justify-items-start mt-1">
                    <input checked={(developer && developer.sexo==='M') && true} name="sexo" {...register("sexo",{required:true})}  className="hidden" type="radio" id="M" value="M"/>
                    <label className="text-white bg-blue-500 mr-2 rounded-lg p-1 pl-3 pr-3 cursor-pointer" htmlFor="M">Masculino</label>
                    <input checked={(developer && developer.sexo==='F') && true} name="sexo" {...register("sexo",{required:true})}  className="hidden" type="radio" id="F" value="F"/>
                    <label className="text-white bg-blue-500 rounded-lg p-1 pl-3 pr-3 cursor-pointer" htmlFor="F">Feminino</label>
                </div>
            </div>
            <div className="flex flex-col">
                <Label>Hobbies</Label>
                <ReactTagInput tags={hobbies} onChange={(newHobies)=>setHobbies(newHobies)}  name="hobbies" />
            </div>
            <div className="flex flex-col">
                <Label>Linguagens</Label>
                <ReactTagInput tags={languages}  onChange={(newLanguages)=>setLanguages(newLanguages)}  name="languages" />
            </div>
            <Button type="submit" className="bg-green-500 text-white mt-8" >
                Alterar
            </Button>            
        </form>
    </Dashboarrd>
    )
}
