import React,{useState, useEffect} from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
const Adduser = ({title}) => {
    const [firstname, setFirstname]= useState('');
    const [email, setEmail]= useState('');
    const [lastname, setLastname]= useState('');  
    const [picture, setPicture]= useState('');  
    // menyimpan data yang di input
    const handleSubmit = ()=>{
        const data = {
            first_name: firstname,
            email: email,
            last_name: lastname,
            avatar: picture};
            axios
      .post(" http://localhost:3004/data", data)
      .then(() => alert(`${firstname} ${lastname} Berhasil Ditambahkan`))
      .catch(() => {
        alert("Tidak Bisa Terhubung ke json-server");
            
        },[])
    }
    return(
        <div className="container">
            <Navbar/>
    <div className="container Container card p-4  row-cols-1 text-white bg-dark mb-3 shadow">
        
        <h3>Add User</h3>
        <p>Picture</p>
        <div class="mb-3">
  <input class="form-control" type="file" id="formFile" value={picture} onChange={(e)=>setPicture(e.target.value)} />
    </div>
        <p> Email </p>
        <input placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>        
        <p> First Name </p>
        <input placeholder='Enter FirstName' value={firstname} onChange={(e)=> setFirstname(e.target.value)}/>
        <p> Last Name </p>
        <input placeholder='Enter LastName' value={lastname} onChange={(e)=> setLastname(e.target.value)}/>
        <br/>
        <br/>
        <button className="btn btn-primary" type="button" onClick={handleSubmit}>Add User</button>
        </div>
        </div>
    )

}

export default Adduser;