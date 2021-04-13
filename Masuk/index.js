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
    <div>
        <Navbar/>
        <div  class="d-grid gap-1 col-4 mx-auto">
        <h3>Login</h3>
        <p> User Name </p>
        <input placeholder='Enter UserName' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <p> Password </p>
        <input placeholder='Enter Password' type="password" value={password} onChange={(p)=>setPassword(p.target.value)}/>
        <br/>
        <button type="button" onClick={handleSubmit}>Submit</button> 
        </div>
        
    
    </div>
    )

}

export default Masuk;