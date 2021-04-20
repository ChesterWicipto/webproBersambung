import Navbar from "../Navbar";
import {useEffect, useState} from "react";
import Axios from 'axios';
import axios from "axios";
import { useParams } from "react-router";


const Dashboard = () =>
{
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(' http://localhost:3004/data', {})
        .then(res=>setData(res.data));

    },[])
    // useEffect (()=>{
    //     console.log(data);
    // },[data])
    return(

        <div className="container">        
        <Navbar/>
        <div className="container">
            <h3>Dashboard</h3>
            {data.map ((item)=>{
                return(
                    <div  key={item.id}>
                       <div className="card p-3 bg-dark">
                       <div className="border col p-2 bg-primary text-white">
                        
                        FullName: {item.first_name},{item.last_name}<br/>
                            Email: {item.email}<br/>
                        </div>
                        </div>
                       
                                                   
                     </div>
                )
            })}
            </div>
        </div>
    )
}

export default Dashboard;