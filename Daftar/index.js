import React,{useState, useEffect} from 'react';
import Navbar from '../Navbar';
const Daftar = ({title}) => {
    const [fullname, setFullname]= useState('');
    const [username, setUsername]= useState('');
    const [email, setEmail]= useState('');
    const [phonenumber, setPhonenumber]= useState('');
    const [address, setAddress]= useState('');
    // menyimpan data yang di input
    const handleSubmit = ()=>{
        const data = {
            fullname: fullname,
            username: username,
            email: email,
            phonenumber: phonenumber,
            address: address,
                    }
        console.log('Fullname:',fullname);
        console.log('Username:',username);
        console.log('Email:',email);
        console.log('PhoneNumber:',phonenumber);
        console.log('Address:',address);

    }
    return(
        <div>
            <Navbar/>
    <div  class="d-grid gap-0.1 col-4 mx-auto">
        
        <h3>Login</h3>
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
        <button class="btn btn-primary" type="button" onClick={handleSubmit}>Register</button>
        </div>
        </div>
    )

}

export default Daftar;