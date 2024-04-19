import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const {userId} = useParams();
    const [user,setUser] = useState({});
    const navi = useNavigate();

    async function fetchdata(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`);

        setUser(result.data);
    }

    function deleteuser(){
        axios.delete(`http://localhost:5000/users/${userId}`);
        navi('/show');
    }

    useEffect(()=>{
        fetchdata();
    },[])

  return (
    <>
        <center><u><h1>DELETE CONFIRMATION</h1></u>
        <div className='container mt-5'>
            <h3>Do you want to delete <span style={{'color':'green'}}>{user.adhar_no} {user.holder_name}{user.address}</span>?</h3>
            <button onClick={()=>deleteuser()}className='btn btn-outline-danger col-3'>YES</button>
            <NavLink to='/show'><button className='btn btn-outline-warning col-3'>No</button></NavLink>
        </div>
        </center>
    </>
  )
}

export default Delete