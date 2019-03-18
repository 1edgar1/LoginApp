import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route,Switch} from "react-router-dom"
import {CSSTransition,TransitionGroup,} from "react-transition-group";
import Login from './Components/Login';
import Home from "./Components/Home"
import './App.css';


ReactDOM.render(
<HashRouter>
    <Route render={({location})=>(
        <TransitionGroup>
                <CSSTransition key={location.key} timeout={300} classNames="fade">
                    <Switch location={location}>
                        <Route exact path="/" component={Login}/>
                        <Route path="/Home" component={Home}/>
                    </Switch>
                </CSSTransition>
        </TransitionGroup>
    )}/>
        
</HashRouter>  
, document.getElementById('root'));


