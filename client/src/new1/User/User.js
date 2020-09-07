import React, { Component } from 'react'
import {Route} from "react-router-dom";
import Details from '../update/Details';
import LastLogin from '../lastlogin/LastLogin';
import Homepage from '../Homepage/Homepage';
import store from '../../redux files/store';
import { user } from '../../redux files/action';
class User extends Component{
    

    componentWillUnmount(){
        store.dispatch(user(null))
    }
render(){

    return(
        <div>
     <Route exact path="/user/Last-Login" component={LastLogin}/>
     <Route exact path="/user/update" component={Details}/>
     <Route exact path="/user" component={Homepage}/>
     </div>
    )
}

}
export default User