import React, { Component } from 'react'
import styles from './Register.module.css'
import { Link } from 'react-router-dom'
import Modal from '../success modal/Modal'

class Register extends Component{
constructor(){
super()
this.state={
    firstname:null,
    lastname:null,
    dob:null,
    email:null,
    password:null,
    gender:null,
    addressline1:null,
    addressline2:null,
    phonenumber:null,
    designation:null,
    detectface:null,
    response:null,
}

}

firstname=(event)=>{
    this.setState({firstname:event.target.value})
}
lastname=(event)=>{
   this.setState({lastname:event.target.value})
}
dob=(event)=>{
   this.setState({dob:event.target.value})
}
male=()=>{
   this.setState({gender:"M"})
}
female=()=>{
   this.setState({gender:"F"})
}
email=(event)=>{
   this.setState({email:event.target.value})
}
password=(event)=>{
   this.setState({password:event.target.value})
}
address1=(event)=>{
   this.setState({addressline1:event.target.value})
}
address2=(event)=>{
   this.setState({addressline2:event.target.value})
}
phonenumber=(event)=>{
   this.setState({phonenumber:event.target.value})
}
designation=(event)=>{
   this.setState({designation:event.target.value})
}
detectface=()=>{
    fetch("/api/detectfaces",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },           
               body:JSON.stringify({
                name:this.state.firstname,               
            })
        }).then(res=>res.json()).then(data=>{
                this.setState({detectface:data})
        })
}
submit=()=>{
    const {detectface} =this.state
    if(detectface!==null){

        fetch("/api/registration",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },           
               body:JSON.stringify({
                   firstname:this.state.firstname,
                lastname:this.state.lastname,
                 email:this.state.email,
                password:this.state.password,
                addressline1:this.state.addressline1,
                addressline2:this.state.addressline2,
                 phonenumber:this.state.phonenumber,
                 designation:this.state.designation,
                 dob:this.state.dob,
                 gender:this.state.gender,
            })
        }).then(res=>res.json()).then(data=>{
            this.setState({response:data})
        }).then( setTimeout(()=>{
            this.setState({response:null})

        },2000))    
    }
    else{
        alert("Detecting the faces is mandatory")
    }
}
    render(){
        const {detectface,response}= this.state
    
    return(
<div className={styles.background}>
    
    <div className={`tc shadow-1 pa3 bg-white mh6 ${styles.media}`}>
        <div className="tc ">
        
            <h1>Registeration</h1>
            <p>New user Registration Form</p>
        </div>
        <div className="mv5">
    <div  className={`ma1 ${styles.form}`}>
    <label  className={`tl  ${styles.label} pa2`}>Firt Name</label>
    <input   className={`pa2 tl ${styles.input}`} onChange={this.firstname}  required placeholder="First Name"/>
    </div>
    <div  className={`ma1 ${styles.form}`}>
    <label  className={`tl  ${styles.label} pa2`}>Last Name</label>
    <input   className={`pa2 tl ${styles.input}`} onChange={this.lastname}  required placeholder="Last Name"/>
    </div>
    <div  className={`ma1 ${styles.form}`}>
        <label className="tl w-20 pa2">Gender</label>
        <label  className={`pa2 tl ${styles.input}`}>
        <input type="radio" id="male" name="gender" onClick={this.male} value="male"/>
        <label  htmlFor="male" className="ph2">Male</label>
        <input  type="radio" id="female" name="gender" onClick={this.female} value="female"/>
        <label  htmlFor="female" className="ph2">Female</label>   
    
        </label>
  </div>
    <div  className={`ma1 ${styles.form}`}>
    <label  className={`tl  ${styles.label} pa2`}>Date Of Birth</label>
    <input   className={`pa2 tl ${styles.input}`} onChange={this.dob} type="date"  required />
    </div>
    <div  className={`ma1 ${styles.form}`}>
    <label  className={`tl  ${styles.label} pa2`}>Email</label>
    <input   className={`pa2 tl ${styles.input}`} onChange={this.email} type="email" required placeholder="Email"/>
    </div>
    <div  className={`ma1 ${styles.form}`}>
    <label  className={`tl  ${styles.label} pa2`}>Password</label>
    <input   className={`pa2 tl ${styles.input}`} onChange={this.password} type="password"  required placeholder="Password"/>
    </div>
    <div  className={`ma1 ${styles.form}`}>
    <label  className={`tl  ${styles.label} pa2`}>Address Line 1</label>
    <input   className={`pa2 tl ${styles.input}`} onChange={this.address1} type="text" required placeholder="Address Line 1"/>
    </div>
    <div  className={`ma1 ${styles.form}`}>
    <label  className={`tl  ${styles.label} pa2`}>Address Line 2</label>
    <input   className={`pa2 tl ${styles.input}`} onChange={this.address2} type="text"  required placeholder="Address Line 2"/>
    </div>
    <div  className={`ma1 ${styles.form}`}>
    <label  className={`tl  ${styles.label} pa2`}>Phone Number</label>
    <input   className={`pa2 tl ${styles.input}`} onChange={this.phonenumber} type="text"  required placeholder="Phone Number"/>
    </div>
    <div  className={`ma1 ${styles.form}`}>
    <label  className={`tl  ${styles.label} pa2`}>Designation</label>
    <input   className={`pa2 tl ${styles.input}`} onChange={this.designation} type="text" required placeholder="Designation"/>
    </div>
        <input type="button" onClick={this.detectface} value="Open Webcam for Face Detetcion" required className="bn pa3 ma4 bg-black white grow"/>
        <label>Accuracy Level 90%</label>
        <div className="tr">
            <Link to ="/admin">
        <button className="bn pa3 ma4  black grow">Back to Home</button>
            </Link>
            {detectface!==null?
                    <button className="bn pa3 ma4  black grow" type="submit"   onClick={this.submit}>Submit</button>

            :        <button disabled className="bn pa3 ma4  black "  onClick={this.submit}>Submit</button>

            }

        </div>
         </div>
    </div>
    {response!==null? <Modal text={response}/>    
          :""}
</div>
)


}
}
export default Register