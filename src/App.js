import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; 
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, About, Contact, Project, NavBar, Skills, Footer } from './components/index';
//import './style/style.css';
import {Switch, Redirect, Route  } from 'react-router-dom';

class App extends Component {
  render() {  
   return (
    
      <React.Fragment>
       <NavBar />
        <Switch>
        <Route exact path="/">
              <Home />
        </Route>
        <Route exact path="/">
              <Home />
        </Route>
        <Route exact path="/about">
              <About />
        </Route>
        <Route exact path="/project">
              <Project />
        </Route>
        <Route exact path="/contact">
              <Contact />
              
        </Route>
        <Route exact path="/skills">
              <Skills />
        </Route>
        <Redirect to= '/' />
      </Switch> 
     <Footer /> 
  
    </React.Fragment> 
   
  );
 }
}




export default App;


