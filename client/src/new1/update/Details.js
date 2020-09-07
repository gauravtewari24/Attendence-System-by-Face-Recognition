import React, { Component } from 'react'
import  Breadcrumbs  from '../breadcrumbs/Breadcrumbs'
import Nav from '../Nav/Nav'
import store from '../../redux files/store'
import Modal from '../success modal/Modal'

class Details extends Component{
    constructor(){
        super()
        const result=store.getState().user
        const user=result.result[0]
        this.state={
            addressline1:user.addressline1,
            addressline2:user.addressline2,
            phonenumber:user.phonenumber,
            designation:user.designation,
            rep:null
        }
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
    onsubmit=()=>{
        console.log(this.state)
        var token =store.getState().user.token
        const {addressline1,addressline2,phonenumber,designation}=this.state
        fetch("/api/update",{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization:"Bearer " +token

              },           
               body:JSON.stringify({
                    addressline1,
                    addressline2,
                    phonenumber,
                    designation
            })
        }).then(res=>res.json()).then(data=>{
                this.setState({rep:data})
                console.log(this.state)
        }).then( setTimeout(()=>{
            this.setState({rep:null})

        },3000))       
    }
       
    render(){
        const styles={
            backgroundColor: "#0AABB6"
        }
        const {rep}=this.state
         const result=store.getState().user
        const {type,firstname,lastname,dob,gender,addressline1,addressline2
        ,phonenumber,designation,email}=result.result[0]
        return(
            <div>
        <Nav type={type} name={firstname+" "+lastname}/>
        
                <Breadcrumbs activeBread="Update"/>
            <div className="tc">
            <h1>Update Details</h1>
            <div className="">
            <div className=" tc ma1">
            <label className="tl w-90 pa2">First Name</label>
            <input type="text" className="pa2 w-90" disabled required placeholder={firstname} />
        </div>        
        <div className=" tc ma1">
            <label className="tl w-90 pa2">Last Name</label>
            <input type="text" className="pa2 w-90" disabled required placeholder={lastname} />
        </div>        
        <div className=" tc ma1">
            <label className="tl w-90 pa2">Gender </label>
            <input type="text" className="pa2 w-90" disabled required placeholder={gender} />
        </div>        
        <div className=" tc ma1">
            <label className="tl w-90 pa2">Date of Birth</label>
            <input type="text" className="pa2 w-90" disabled required placeholder={dob} />
        </div>        
        <div className=" tc ma1">
            <label className="tl w-90 pa2">Email</label>
            <input type="text" className="pa2 w-90" disabled required placeholder={email} />
        </div>        
                <div className=" tc ma1">
                    <label className="tl w-90 pa2">Address Line 1</label>
                    <input type="text" className="pa2 w-90" defaultValue={addressline1} name="addressline1" onChange={this.address1}  required />
                </div>
                <div className=" tc ma1">
                    <label className="tl w-90 pa2">Address Line 2</label>
                    <input type="text" className="pa2 w-90" defaultValue={addressline2} name="addressline2" onChange={this.address2} required />
                </div>
                <div className=" tc ma1">
                    <label className="tl w-90 pa2">Phone Number</label>
                    <input type="text" className="pa2 w-90" defaultValue={phonenumber} name="phonenumber" onChange={this.phonenumber}  required />
                </div>
                <div className=" tc ma1">
                    <label className="tl w-90 pa2">Designation</label>
                    <input type="text" className="pa2 w-90" defaultValue={designation} name="designation" onChange={this.designation}  required />
                </div>
                              
            </div>
            <button type="submit" className= {`bn ma3 white grow pointer pa3`} onClick={this.onsubmit} style={styles}>Update changes</button>
            </div>
            {rep!==null? <Modal text={rep}/>    
           
            :""}
            </div>
        
        )
    }
}
export default Details