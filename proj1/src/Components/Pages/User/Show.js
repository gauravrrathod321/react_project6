import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom';


function Show() {
    const [users,setUser]=useState([])

    async function fetchdata(){
        const result= await axios.get('http://localhost:5000/users')
        setUser(result.data);
    }

    useEffect(()=>{
        fetchdata();
    },[])
  return (
    <>
        <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <th>adhar_no</th>
                    <th>holder_name</th>
                    <th>address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((obj)=>{
                        return(
                        <tr>
                            <td>{obj.adhar_no}</td>
                            <td>{obj.holder_name}</td>
                            <td>{obj.address}</td>
                            <td>
                                <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm'>UPDATE</button></NavLink>
                                <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger btn-sm'>DELETE</button></NavLink>
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Show