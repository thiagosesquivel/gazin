import React, {  useState } from 'react'
import Label from '../Components/Label'
import HeaderModal from '../Components/HeaderModal'
import {useForm} from 'react-hook-form';
import Button from '../Components/Button';
import ReactTagInput from "@pathofdev/react-tag-input";
import api from '../service';
import {toast} from 'react-toastify'
import moment from 'moment';
import Dashboarrd from '../Layouts/Dashboarrd'




export default function FormDeveloper() {
    const [hobbies, setHobbies] = useState([]);
    const [processing, setProcessing] = useState(false);
    const [languages, setLanguages] = useState([]);
    const {register, handleSubmit, reset} = useForm({
    });


    const onSubmit = async data => {
        setProcessing(!processing);
        
        const idade =  moment(data.datanascimento,"YYYYMMDD").fromNow();
        const newHobies = hobbies.map((hobbies)=>{ return {nome:hobbies}});
        const newLanguages = languages.map((language)=>{ return {nome:language}});
        const newData = {...data, idade, hobbies: newHobies, languages:newLanguages}
        const response = await api.post('/developers', newData);
        if(response.status===201){
            toast.success('Desenvolvedor cadastrado com sucesso') 
            reset()
            setHobbies([]);
            setLanguages([])
        }else{
            toast.error(response.message);
        }
    }

   

    return (
    <Dashboarrd >
        <HeaderModal title={'Adicionar desenvolvedor'} />
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-3/5">
                <Label>Nome do desenvolvedor</Label>
                <input  className="border border-gray-200 p-1 focus:outline-none"  {...register('nome',{required:true})}/>
            </div>
            <div className="flex">
                <div className="flex flex-col w-1/4 mr-2">
                    <Label>Data de nascimento</Label>
                    <input className="border border-gray-200 p-1 focus:outline-none" type="date"   {...register('datanascimento',{required:true})} />
                </div>
            </div>
            <div className="flex flex-col">
                <Label>Sexo:</Label>
                <div className="flex justify-items-start mt-1">
                    <input  name="sexo" {...register("sexo",{required:true})}  className="hidden" type="radio" id="M" value="M"/>
                    <label className="text-white bg-blue-500 mr-2 rounded-lg p-1 pl-3 pr-3 cursor-pointer" htmlFor="M">Masculino</label>
                    <input  name="sexo" {...register("sexo",{required:true})}  className="hidden" type="radio" id="F" value="F"/>
                    <label className="text-white bg-blue-500 rounded-lg p-1 pl-3 pr-3 cursor-pointer" htmlFor="F">Feminino</label>
                </div>
            </div>
            <div className="flex flex-col">
                <Label>Hobbies</Label>
                <ReactTagInput tags={ hobbies} onChange={(newHobies)=>setHobbies(newHobies)}  name="hobbies" />
            </div>
            <div className="flex flex-col">
                <Label>Linguagens</Label>
                <ReactTagInput tags={languages}  onChange={(newLanguages)=>setLanguages(newLanguages)}  name="languages" />
            </div>
            <Button className="bg-green-500 text-white mt-8" >
                Cadastrar
            </Button>            
        </form>
    </Dashboarrd>
    )
}
