import React, { Component } from 'react'

import {Link } from 'react-router-dom'
import store from '../../redux files/store'
class Breadcrumbs extends Component{
    componentDidMount(){
        
    }
    render(){
        const {activeBread}=this.props
       const {user} =store.getState()
       const {type}=user.result[0]
        return(
            <div className="flex flex-wrap" >
       <ol className="col-12 breadcrumb">
       <li className="breadcrumb-item">
         <Link to={type==='a'?"/admin":"/user"}>Dashboard</Link >
         </li>
       <li className="breadcrumb-item active">{activeBread}</li>
     </ol>
         <div className="col-12 col-sm-12">
            <h3 className="dashboard">Welcome!</h3>
            <hr></hr>
         </div>
     </div>
        )
    }
}
export default Breadcrumbs