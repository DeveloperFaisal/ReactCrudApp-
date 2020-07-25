
import React,{useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';

const EditUser = () => {
  const [fullName, setFullName] = useState(
      {
          name:"",
          username: "",
          email: "",
          phone: ""
      }
  );

  const {name, username, email, phone}=fullName

  const InputEvent =(event) => {
       const {value,name} = event.target;

       setFullName({...fullName,[name]:value})  
  };   
      
  let history = useHistory();
  const {id}= useParams();

  const onSubmit = async(event) => {
    event.preventDefault();
   
    await axios.put(`http://localhost:3003/Users/${id}`,fullName);
    history.push("/");
};
  
 useEffect(() => {
    loadUser();
 },[]);

  const loadUser = async() => {
     const result = await axios.get(`http://localhost:3003/Users/${id}`);
     setFullName(result.data)
  };

  

   return(
    <> 
    
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
   <h1 className="text-center mt-5 mb-5"> Edit Your Account</h1>
    <form onSubmit = {onSubmit}>
  <div className="form-group">
  <input
     type="text"
     className="form-control form-control-lg"
     placeholder="Enter Your Name"
     name="name"
     value={name}
     onChange={InputEvent}
     />
     </div>
     <div className="form-group">
    <input
     type="text"
     className="form-control form-control-lg"
     placeholder="Enter Your Username"
     name="username"
     value={username}
     onChange={InputEvent}
     />
  </div>
  <div className="form-group">
    <input
     type="text"
     className="form-control form-control-lg"
     placeholder="Enter Your Email"
     name="email"
     value={email}
     onChange={InputEvent}
     />
  </div>
  <div className="form-group">
    <input
     type="text"
     className="form-control form-control-lg"
     placeholder="Enter Your Phone"
     name="phone"
     value={phone}
     onChange={InputEvent}
     />
  </div>
  <button className="btn btn-outline-success btn-block" >Updet Userse</button>
</form>
</div>
 </div>
    </>
);
};
export default EditUser;
