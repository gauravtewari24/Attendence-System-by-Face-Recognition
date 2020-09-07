import React from 'react'

import face from '../../Images/face.png'
import accuracy from '../../Images/accuracy.PNG'
import Nav from '../Nav/Nav'
import  Breadcrumbs  from '../breadcrumbs/Breadcrumbs'
import { useSelector } from 'react-redux'
import Loading from '../loading/Loading'
const Homepage =()=>{
const user=useSelector(state=>state.user)
  const {type,firstname,lastname}=user.result[0]
  return(
      <div>
         <Nav type={type} name={firstname+" "+lastname}/>
          <Breadcrumbs activeBread=""/>
      <div className="flex flex-wrap pa3 tc" >
      <div className="col-12 col-sm-6 ">
          <h2> Face Data Accuracy</h2>
          <img src={accuracy} alt="accuracy"/>
     </div>
     <div className="col-12 col-sm-6 pa4 ">
       <h2> User Details</h2>
       <div className="align-self-center">
         <img src={face} alt="face"/>
       </div>
  
    </div>
    </div>
  
      </div>
  )


}
export default Homepage