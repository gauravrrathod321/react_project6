import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useForm} from 'react-hook-form'

function Update() {
    const {register,handleSubmit,setValue} = useForm()
    const {userId} = useParams(); 
    const navi = useNavigate();

    async function fetchdata(){
        const result =await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('adhar_no',result.data.adhar_no);
        setValue('holder_name',result.data.holder_name);
        setValue('address',result.data.address);
    } 

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`,data)
        navi('/show');
    }

    useEffect(()=>{
        fetchdata();
    },[])

  return (
    <>
    <div className='container'>
    <center><h1 className="text-primary"><u> AdharCard Update info</u></h1></center>
    <form onSubmit={handleSubmit(saveData)} className='border border-success mt-5'>
        <lalel htmlFor='n'>Enter Adhar No:</lalel>
        <input type="number" id="n" className='form-control'{...register('adhar_no')}></input>
        <br></br>
        <label htmlFor="pn">Enter holder name</label>
        <input type="text" id="pn" className='form-control' {...register('holder_name')}></input>
        <br></br>
        <label htmlFor="aa">Enter address </label>
        <input htmlFor="text" id="aa" className='form-control'{...register('address')}></input>
        <br></br>
        <input type="submit" value="Update Adhar" className='btn btn-outline-success col-6 btn-lg'></input>
        <input type="reset" value="RESET" className='btn btn-outline-warning col-6 btn-lg'></input>
    </form>
    </div>
    </>
  )
}

export default Update;