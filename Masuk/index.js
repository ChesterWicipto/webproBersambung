import React,{useState, useEffect} from 'react';
import Navbar from '../Navbar';
const Masuk = ({title}) => {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    // menyimpan data yang di input
    const handleSubmit = ()=>{
        const data = {
            username: username,
            password: password,
                    }
        console.log('Username',username);
        console.log('Password',password);

    }
    //componetDidMount
    useEffect (()=>{
        console.log('componentDidmount dijalankan')
    },[]);
    return(
    <div className="container">
        <Navbar/> 
        <div  className="container Container card p-4  row-cols-1 text-white bg-dark mb-3 shadow" >
        <h3>Login</h3>
        <p>User Name </p>
        <input placeholder='Enter UserName' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <p>Password </p>
        <input placeholder='Enter Password' type="password" value={password} onChange={(p)=>setPassword(p.target.value)}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
       

        
    
    </div>
    )

}

export default Masuk;