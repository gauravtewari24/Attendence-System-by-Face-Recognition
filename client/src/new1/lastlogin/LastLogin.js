import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import  Breadcrumbs  from '../breadcrumbs/Breadcrumbs'
import store from '../../redux files/store'
import Loading from '../loading/Loading'
import {uuid} from 'uuidv4'
class LastLogin extends Component{
    constructor(){
        super()
        this.state={
            details:null
        }
    }

    componentDidMount(){
        const {user}=store.getState()
        const {type}=user.result[0]
        if(type!=='a'){
            var token =store.getState().user.token
            
            fetch("/api/userlogdetails",{
                headers:{
                    Authorization:"Bearer " +token
                }
            })
            .then(res=>res.json()).then(details=>{
            this.setState({details})    
    
    })    }
        else{
            fetch("/api/alllogdetails")
            .then(res=>res.json()).then(details=>{
            this.setState({details}) 
        })
        }
    }
componentWillUnmount(){
    this.setState({details:null,temp:null})
}

    render(){

        const result=store.getState().user
        const {type,firstname,lastname}=result.result[0]  
           const {details}=this.state
           if(details!==null)
        return(
            <div>
        <Nav type={type} name={firstname+" "+lastname}/>
        <Breadcrumbs activeBread="Last Login Details"/>
        <div className="w-100">
            {details.length?
            <table className="table">
    <thead>
      <tr>
      <th>S.no</th>
      <th>Name</th>
        <th>Login-Details</th>
        <th>designation</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
        { 
        details.map((value,id)=>{
            return(
                <tr key={uuid()}>
                <td key={uuid()}>{id+1}</td>
                <td key={uuid()}>{value.name}</td>
                <td key={uuid()}>{value.logindetails}</td>
                <td key={uuid()}>{value.designation}</td>
                <td key={uuid()}>{value.logindate}</td>
                <td key={uuid()}>{value.logintime}</td>
              </tr>
            )
        })}
     
    </tbody>
  </table>
:
<h1 className="tc">No Record found</h1>
}
  </div>
            </div>
        )
        else 
        return(<Loading/>)
    }
}
export default LastLogin