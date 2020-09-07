import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,  faEdit, faSignOutAlt, faUser,faThLarge, faInfo, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import styles from  './Nav.module.css'
import store from '../../redux files/store';
import { user } from '../../redux files/action';

class Nav extends Component{
    constructor(){
        super()
        this.state={
            sideNav:false
        }
    }
    
    closeNav=()=>{
        this.setState({sideNav:false});
    }
    openNav=()=>{
        this.setState({sideNav:true});
    }
    dorr=()=>{
        store.dispatch(user(null))
         window.confirm("Do you want to Logout");
    }
    render(){
            const {type,name}=this.props
            const {sideNav}=this.state
       if(type==='u') 
       return(          
         <nav className={`navbar  navbar-expand-sm ${styles.backcolor}`} >
            <FontAwesomeIcon className="f3 white pointer" onClick={this.openNav} icon={faBars}/>          
            <div className={`${styles.sidenav} ${sideNav?styles.sidenavOpen:""}`}>
                <label onClick={this.closeNav} className={styles.closebtn}>&times;</label>
                <h3 className={styles.sidenavHead}>{name}</h3>
                <Link to="/user"  className={`${styles.items} ${styles.items1}`}>
                    <FontAwesomeIcon icon={faThLarge}/> 
                    <label className="pa2 pointer">DashBoard</label> 
                </Link >
                <Link to="/user/Last-Login"  className={styles.items}>
                    <FontAwesomeIcon icon={faUser}/> 
                    <label className="pa2 pointer">Logged in Details</label> 
                </Link>
                <Link to="/user/update" className={styles.items}>
                    <FontAwesomeIcon icon={faEdit}/> 
                    <label className="pa2 pointer">Update Details</label> 
                </Link>
                
                <Link to="/Login" className={styles.items} onClick={this.dorr}>
                    <FontAwesomeIcon icon={faSignOutAlt}/> 
                    <label className="pa2 pointer" >Log Out</label> 
                </Link>
            </div>
        </nav>
        )

        else if(type==="a")
        return(
            <nav className={`navbar   navbar-expand-sm ${styles.backcolor}`} >
            <FontAwesomeIcon className="f3 white pointer" onClick={this.openNav} icon={faBars}/>          
            <div className={`${styles.sidenav} ${sideNav?styles.sidenavOpen:""}`}>
                <label onClick={this.closeNav} className={styles.closebtn}>&times;</label>
                <h3 className={styles.sidenavHead}>{name}</h3>
                <Link to="/admin"  className={`${styles.items} ${styles.items1}`}>
                    <FontAwesomeIcon icon={faThLarge}/> 
                    <label className="pa2 pointer">DashBoard</label> 
                </Link >
                <Link to="/admin/Register"  className={`${styles.items} ${styles.items1}`}>
                    <FontAwesomeIcon icon={faAddressBook}/> 
                    <label className="pa2 pointer">Add a new User</label> 
                </Link >
                <Link to="/admin/Last-Login"  className={styles.items}>
                    <FontAwesomeIcon icon={faInfo}/> 
                    <label className="pa2 pointer">Users Logged in details</label> 
                </Link >
                
        <Link to="/Login" className={styles.items} onClick={this.dorr}>
                    <FontAwesomeIcon icon={faSignOutAlt}/> 
                    <label className="pa2 pointer">Log Out</label> 
                </Link >
            </div>
        </nav>
        )
    }
    
}
export default Nav
