import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
  const {register,handleSubmit}=useForm();

  const navi = useNavigate();

  function saveData(data){
    axios.post('http://localhost:5000/users',data);
    navi("/show");
  }

  return (
    <div className='container'>
    <center><h1 className="text-primary"><u>Person AdharCard info</u></h1></center>
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
        <input type="submit" value="Add Adhar" className='btn btn-outline-success col-6 btn-lg'></input>
        <input type="reset" value="RESET" className='btn btn-outline-warning col-6 btn-lg'></input>
    </form>
    </div>
  )
}

export default Add 