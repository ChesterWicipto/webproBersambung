import React,{useState, useEffect} from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
const Daftar = ({title}) => {
    const [fullname, setFullname]= useState('');
    const [username, setUsername]= useState('');
    const [email, setEmail]= useState('');
    const [phonenumber, setPhonenumber]= useState('');
    const [address, setAddress]= useState('');
    // menyimpan data yang di input
    const handleSubmit = ()=>{
        const data = {
            full_name: fullname,
            user_name: username,
            email: email,
            phone_number: phonenumber,
            address: address};
            axios
            .post(" http://localhost:3004/regis", data)
            .then(() => alert(`${fullname} ${username} Berhasil Ditambahkan`))
            .catch(() => {
              alert("Tidak Bisa Terhubung ke json-server");
              },[])
              console.log(data);
    }
    return(
        <div className="container">
            <Navbar/>
    <div className="container Container card p-4  row-cols-1 text-white bg-dark mb-3 shadow">
        <h3>Register</h3>
        <p> FullName </p>
        <input placeholder='Enter FullName' value={fullname} onChange={(e)=> setFullname(e.target.value)}/>
        <p> User Name </p>
        <input placeholder='Enter UserName' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <p> Email </p>
        <input placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <p> Phone Number </p>
        <input placeholder='Enter Phone Number' value={phonenumber} onChange={(e)=> setPhonenumber(e.target.value)}/>
        <p> Address </p>
        <input placeholder='Enter Address' value={address} onChange={(e)=> setAddress(e.target.value)}/>
        <br/>
        <br/>
        <button className="btn btn-primary" type="button" onClick={handleSubmit}>Register</button>
        </div>
        </div>
        
    )

}

export default Daftar;