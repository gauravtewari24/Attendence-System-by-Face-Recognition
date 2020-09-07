import React, { Component } from 'react'
import Webcam from 'react-webcam'
import styles from './Login.module.css'
class Login extends Component{
  
    render(){
        
        return(
    <div className="tc overflow-hidden vh-100">
        <label className={`absolute tc z-2 ma3 white ${styles.font1}`}>Please make sure your face is visible in Camera</label>
        <Webcam className="w-100"/>

   </div>
        
    )
}
}
export default Login