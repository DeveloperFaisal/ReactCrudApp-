import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
const AddUsers = () => {
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
  
  const onSubmit = async(event) => {
      event.preventDefault();
     
      await axios.post("http://localhost:3003/Users",fullName);
      history.push("/");
  };

  

   return(
    <> 
    
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
   <h1 className="text-center mt-5 mb-5">Add New Userse</h1>
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
  <button className="btn btn-primary btn-block" >Add Userse</button>
</form>
</div>
 </div>
    </>
);
};
export default AddUsers;