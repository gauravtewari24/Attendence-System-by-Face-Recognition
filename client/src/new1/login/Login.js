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
                show:false,
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
            console.log(this.state)

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
            console.log(this.state)
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
        show=()=>{
            this.setState({show:!this.state.show})
        }
        hide=()=>{
            this.setState({show:!this.state.show})
        }
    render(){
        const {user}=this.props

        const {show}=this.state;
        const {loading}=this.state
        if(!loading)
        return(
            <div className="vh-100">

            <div className={`${styles.container}`} id="container">
    <div class={`${styles.form_container} ${styles.sign_up_container} ${show?styles.Asign_up_container:''}`} id="signin">
      <form>    
     <h1 className={styles.heading1}> Admin Signin </h1><br></br>
        <input type="email" onChange={this.onEmailChange} placeholder="Email" required/><br></br>
        <input type="password" onChange={this.onPasswordChange} placeholder="Password" required/><br></br>
        <button className={styles.btn} onClick={this.fetchAdmin} >Admin Log</button>
        {
                          user?user.result?user.result[0].type==='u'?<Redirect to='/user'/>
                          :<Redirect to='/admin'/>:
                          <div className="pa3 red">Invalid Credentials</div>
                        :""
                    }
      </form>
    </div>
    <div class={`${styles.form_container} ${styles.sign_in_container} ${show?styles.Asign_in_container:''}`} id="admin" >
      <form action="#">
        <h1 className={styles.heading1}>User Signin </h1><br></br>
        <input type="email" onChange={this.onEmailChange} placeholder="Email" required/><br></br>
        <input type="password" onChange={this.onPasswordChange} placeholder="Password" required/><br></br>
        <button className={styles.btn} onClick={this.fetchUser} >User Log</button>
        {
                          user?user.result?user.result[0].type==='u'?<Redirect to='/user'/>
                          :<Redirect to='/admin'/>:
                            <div className=" pa3 red">Invalid Credentials</div>
                        :""
                    }
      </form>
    </div>
  <div class={`${styles.overlay_container} ${show?styles.Aoverlay_container:''}`}>
    <div class={`${styles.overlay} ${show?styles.Aoverlay:''}`}>
      <div class={`${styles.overlay_panel} ${styles.overlay_left} ${show?styles.Aoverlay_left :''}`}>
        <h2> Hello , Admin !!</h2>
        <p className={styles.para}>To use  User Sign in ID , Click on  this : :  </p>
        <button className={styles.btn}  id="signIn" onClick={this.show}>User Log </button>
       
      </div>
      <div class={`${styles.overlay_panel} ${styles.overlay_right} ${show?styles.Aoverlay_right:''}`}>
        <h2>Hi, User !! </h2>
        <p className={styles.para}>To login with Admin id , just click on it : :  </p>
      <button className={styles.btn} id="signUp" onClick={this.hide}>Admin Log </button>
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
