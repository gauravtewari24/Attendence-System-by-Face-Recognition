import React, { Component } from 'react'
import styles from './Login.module.css'
import {Link,Redirect} from 'react-router-dom'
import store from '../../redux files/store'
import {user} from '../../redux files/action'
import { connect } from 'react-redux'
import Loading from '../loading/Loading'
const mapStateToProps=(state)=>{
return {
    
        user:state.user
}
}

class Login extends Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            loading:false
        }
    }
   
    onEmailChange=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    onPasswordChange=(event)=>{
        this.setState({
            password:event.target.value
        })
        
    }
    fetchUser=()=>{
        this.setState({loading:true})
        fetch("/api/signin/user",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },           
               body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        }).then(res=>res.json()).then(data=>{
                store.dispatch(user(data))
                this.setState({loading:false})
            })
    
    }
    fetchAdmin=()=>{
        this.setState({loading:true})

        fetch("/api/signin/admin",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },           
               body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        }).then(res=>res.json()).then(data=>{
            store.dispatch(user(data))
            this.setState({loading:false})

        })
    
    }
    render(){
            const {user}=this.props
            const {loading}=this.state
            if(!loading)
        return(
        <div className="">
    <div className="flex justify-center items-center vh-100">
    
        <div className={`tc shadow-1   ${styles.media}`}>
            <h3 className="mt3 mb4 "> Sign in</h3>
            <ul className="nav nav-tabs">
              <li className="nav-item col-6">
                <a className="nav-link active" href="#user"
                  role="tab" data-toggle="tab">User </a>
              </li>
              <li className="nav-item col-6">
                <a className="nav-link" href="#admin" role="tab"
                  data-toggle="tab">Admin</a>
              </li>
            </ul>
    
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade show active user" id="user">
                    <div className="card-body">
                        <div className="form-group row mv4">
                            <div className="col-md-10 offset-md-1 tl">
                                <label>Enter Email</label>
                                <input type="email" onChange={this.onEmailChange} className="form-control" name="emailid"  placeholder="Email"/>
                            </div>
                        </div>
    
    
                        <div className="form-group row mv4">
                            <div className="col-md-10 offset-md-1 tl">
                                <label>Enter Password</label>
                                <input type="password" onChange={this.onPasswordChange} className="form-control" name="password"  placeholder="Password"/>
                            </div>
                        </div>
    
                        <div className="form-group row">
                            <div className="w-100 mv4">
                                <button type="Login" onClick={this.fetchUser} className="btn w-50 btn-primary">Login</button>
                            </div>
                        </div>
                        {
                          user?user.result?user.result[0].type==='u'?<Redirect to='/user'/>
                          :<Redirect to='/admin'/>:
                            <div className="red">Invalid Credentials</div>
                        :""
                    }
    
                    </div>
                </div>
    
                <div role="tabpanel" className="tab-pane fade user" id="admin">
                    <div className="card-body">
                        <div className="form-group row mv4">
                            <div className="col-md-10 offset-md-1 tl">
                                <label>Enter Email</label>
                                <input type="email" onChange={this.onEmailChange} className="form-control" name="emailid"  placeholder="Email"/>
                            </div>
                        </div>
    
                        <div className="form-group row mv4">
                            <div className="col-md-10 offset-md-1 tl">
                                <label>Enter Password</label>
                                <input type="password" onChange={this.onPasswordChange} className="form-control" name="password" placeholder="Password"/>
                            </div>
                        </div>
    
                        <div className="form-group row ">
                            <div className="w-100 mv4">
                                <button type="Login" className="btn w-50 btn-primary" onClick={this.fetchAdmin}>Login</button>
                            </div>
                        </div>
                        {
                          user?user.result?user.result[0].type==='u'?<Redirect to='/user'/>
                          :<Redirect to='/admin'/>:
                          <div className="red">Invalid Credentials</div>
                        :""
                    }
    
                    </div>
                </div>
            </div>
        </div>
    </div>
    
      </div>
    
    ) 
    else
     return(<Loading/>)
    }
}
export default connect(mapStateToProps)(Login)

