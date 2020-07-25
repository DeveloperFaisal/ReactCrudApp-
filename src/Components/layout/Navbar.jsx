import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Navbar = () => {
    return(
        <>
 
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
   <a className="navbar-brand" href="#">REACT USER</a>
   <div className="container">
  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link"  exact to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  exact to="/About">About </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  exact to="/Contact">Contact </NavLink>
      </li>
    </ul>
  </div>
  <NavLink className="btn btn-outline-light" exact to="/Users/Add">Add User</NavLink>
  </div>
</nav>
  
        </>
    );
};

export default Navbar;