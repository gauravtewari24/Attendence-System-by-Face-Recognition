import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './Homepage.module.css'
import  Breadcrumbs  from '../breadcrumbs/Breadcrumbs'
import Nav from '../Nav/Nav'
import Loading from '../loading/Loading'
import {uuid} from 'uuidv4'
import store from '../../redux files/store'

class HomepageAdmin extends Component{
constructor(){
  super()
  this.state={
    details:null,
    temp:''
  }
}

  componentDidMount(){
    fetch("/api/admindashboard")
    .then(res=>res.json()).then(details=>{
        this.setState({details})
})  
  }

search=(event)=>{
    this.setState({temp:event.target.value})

    }
render(){
     const {details,temp}=this.state
     const result=store.getState().user
     const {type,firstname,lastname}=result.result[0]  
     if(details!==null){
      const searchDetails=details.filter((value)=>{
        return value.firstname.toLowerCase().includes(temp);
      })
    return(
        <div>
          <Nav type={type} name={firstname+" "+lastname}/>
          <Breadcrumbs/>
        <div className="flex justify-center mt3 mb5">
               <div className={styles.search}>
                <input type="text" name="q" className={styles.searchbox} onChange={this.search} placeholder="Search User"/>
                <button type="submit" className={styles.searchbtn}>
                    <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
          {
            !searchDetails.length?<h1 className="tc">No Record found</h1>:
          
            <div className="w-100 overflow-x-scroll ">

            <table className="table ">
    <thead>
      <tr>
        <th>S.no</th>
        <th>Name</th>
        <th>Designation</th>
        <th>Phone No</th>
      </tr>
    </thead>
    <tbody>
           { 
             searchDetails.map((value,id) => {
               return(
                <tr key={uuid()}>
               <td key={uuid()}>{id+1}</td>
               <td key={uuid()}>{value.firstname+" "+value.lastname}</td>
               <td key={uuid()}>{value.designation}</td>
               <td key={uuid()}>{value.phonenumber}</td>
               
            </tr>
               )
          
              })
            }
      
     </tbody>
  </table>
            </div>
       }
        </div>
    )
  }
    else return(<Loading/>)
  }
}
export default HomepageAdmin