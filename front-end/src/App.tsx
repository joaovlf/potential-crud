import React from 'react';
import SideBar from './components/sideMenu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Developers } from './pages/Developers';
import { RegisterPage } from './pages/RegisterPage';
import { UpdatePage } from './pages/UpdatePage';


const App : React.FC = ()=>{
  return(
    <>
      <Router>
        <Switch>
         <Route path="/" exact component={Developers}></Route>
         <Route path="/register" exact component={RegisterPage}></Route>
         <Route path="/update/:id" exact component={UpdatePage}></Route>
        </Switch>
        <SideBar/>
      </Router>

    </>


  )}

export default App; 
 