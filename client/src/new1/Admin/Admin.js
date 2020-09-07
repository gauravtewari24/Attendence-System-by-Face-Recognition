import React, { Component } from 'react'
import { Route} from "react-router-dom";
import LastLogin from '../lastlogin/LastLogin';
import store from '../../redux files/store';
import { user } from '../../redux files/action';
import Register from '../Register/Register';
import HomepageAdmin from '../Homepageadmin/HomepageAdmin';
class Admin extends Component{
    
    
    componentWillUnmount(){
        store.dispatch(user(null))

    }
render(){

    return(
        <div>
     <Route exact path="/admin" component={HomepageAdmin}/>
     <Route exact path="/admin/Last-Login" component={LastLogin}/>
     <Route exact path="/admin/Register" component={Register}/>
     </div>
    )
}

}
export default Admin