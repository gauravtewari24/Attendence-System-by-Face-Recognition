import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import Login from "../Login-Panel/Login";
import Login from "../login/Login";
import User from '../User/User'
import Admin from "../Admin/Admin";
import Cover from "../cover/Cover";
const App =()=>{
    return(
<Router>
      <div>
          <Switch>
          <Route path="/Admin" component={Admin}/>
          <Route path="/User" component={User}/>
          <Route path="/Login" component={Login}/>
          <Route path="/" component={Cover}/>
          </Switch>
      </div>
        </Router>
    )
}
export default App