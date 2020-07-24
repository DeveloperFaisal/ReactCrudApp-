import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Navbar from './Components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './Components/Pages/NotFound';


const App =() => {

return(
    <>
<>
    <Router>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/About"component={About}/>
                <Route exact path="/Contact"component={Contact}/>
                <Route component={NotFound}/>
            </Switch>
    </Router>
</>


    </>
);



};

export default App;