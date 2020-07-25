import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Userse = () => {

    const [user, setUser]=useState({
        name:'',
        email:'',
        phone:'',
        username:''
    });

    const {id} = useParams();

    useEffect (() => {
        loadUser();
    },[]);

    const loadUser = async() => {
        const valu = await Axios.get(`http://localhost:3003/Users/${id}`)
         setUser(valu.data)
    }

    return(
        
        <>
    <div className="container">

        <h1 className="display-4">User Id:{id}</h1>
        <hr/>
        <ul className="list-group w-50">

            <li className="list-group-item ">Name:  {user.name}</li>
            <li className="list-group-item">Email:  {user.email}</li>
            <li className="list-group-item">Phone:  {user.phone}</li>
            <li className="list-group-item">Username:  {user.username}</li>

        </ul>

    </div>


        </>

    )
};
export default Userse;