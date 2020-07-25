import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Navbar from './Components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './Components/Pages/NotFound';
import AddUsers from './Components/Users/AddUsers';
import EditUser from './Components/Users/EditUser';
import Userse from './Components/Users/Userse';


const App =() => {

return(

<>
    <Router>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/About"  component={About}/>
                <Route  path="/Contact"  component={Contact}/>
                <Route  path="/Users/Add" component={AddUsers}/>
                <Route  path="/Users/Edit/:id" component={EditUser}/>
                <Route  path="/Users/View/:id" component={Userse}/>
                <Route component={NotFound}/>
            </Switch>
    </Router>
</>
);



};

export default App;