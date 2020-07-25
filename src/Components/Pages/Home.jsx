import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () =>{
    const[users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers()
    }, []);

    const loadUsers = async () => {

        const result = await Axios.get("http://localhost:3003/users");

        setUsers(result.data.reverse());
    };

        const deletUser = async (id) => {
                await Axios.delete(`http://localhost:3003/Users/${id}`);
                loadUsers()
        }
    return(

        <>
 <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user, index) => (
            <tr>
                <th scope="row">{index +1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                    <Link className="btn btn-primary  mr-2" to = {`Users/view/${user.id}`} >View</Link>
                    <Link className="btn btn-outline-dark mr-2" to = {`Users/Edit/${user.id}`}>Edite</Link>
                    <Link className="btn btn-danger mr-2" onClick= {() => deletUser(user.id)}>Delete</Link>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>
</div>
</div>

        </>

    );


};
export default Home;